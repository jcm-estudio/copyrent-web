import os
import fitz  # PyMuPDF
import gdown
import json

def download_folder():
    url = 'https://drive.google.com/drive/folders/12AxqjWWCviUvg42pagiM58XA3SL0U3o5?usp=sharing'
    output_dir = 'pdfs'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    # Using gdown to download the folder
    print("Downloading PDFs from Drive...")
    gdown.download_folder(url, output=output_dir, quiet=False, use_cookies=False)

def extract_content():
    input_dir = 'pdfs'
    images_dir = 'public/images/products'
    if not os.path.exists(images_dir):
        os.makedirs(images_dir)

    products = []

    if not os.path.exists(input_dir):
        print("PDF directory not found. Trying to parse existing if any.")
        return

    files = [f for f in os.listdir(input_dir) if f.endswith('.pdf')]
    print(f"Found {len(files)} PDFs.")

    for filename in files:
        filepath = os.path.join(input_dir, filename)
        doc = fitz.open(filepath)
        if len(doc) == 0:
            continue
        
        page = doc[0] # Usually the most important info and image are on the first page
        text = page.get_text("text")
        
        # Super simple summary: take the first 4 non-empty lines
        lines = [l.strip() for l in text.split('\n') if l.strip()]
        title = lines[0] if len(lines) > 0 else filename.replace('.pdf', '')
        summary = " ".join(lines[1:5]) if len(lines) > 1 else ""
        
        # Name formulation
        model_name = filename.replace('.pdf', '')
        
        # Image extraction
        images = page.get_images(full=True)
        image_path = ""
        if images:
            # Sort by image size, take the largest
            images.sort(key=lambda img: img[2] * img[3], reverse=True)
            xref = images[0][0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Clean filename
            safe_name = "".join([c for c in model_name if c.isalnum() or c in (' ', '-', '_')]).rstrip()
            img_filename = f"{safe_name}.{image_ext}"
            img_out_path = os.path.join(images_dir, img_filename)
            
            with open(img_out_path, "wb") as f:
                f.write(image_bytes)
            
            image_path = f"/images/products/{img_filename}"
            print(f"Extracted image {img_filename}")

        productType = "Proyector" if "Proyector" in model_name or "Projector" in text or "BenQ" in model_name else "Impresora / Multifunción"
        
        products.append({
            "model": model_name,
            "title": title,
            "summary": summary,
            "image": image_path,
            "type": productType
        })
        
        doc.close()

    with open('products.json', 'w', encoding='utf-8') as f:
        json.dump(products, f, indent=4, ensure_ascii=False)
    
    print("Done! Data saved to products.json")

if __name__ == "__main__":
    download_folder()
    extract_content()
