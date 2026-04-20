import https from 'https';
import fs from 'fs';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    };
    https.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
         reject(new Error(`Status: ${res.statusCode} for ${url}`));
         return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
};

async function main() {
  try {
    await download("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_de_la_Universidad_de_Buenos_Aires.svg/1024px-Logo_de_la_Universidad_de_Buenos_Aires.svg.png", "c:/Web Copiada/document-consulting/public/images/clients/uba.png");
    await download("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Logo_UADE.svg/800px-Logo_UADE.svg.png", "c:/Web Copiada/document-consulting/public/images/clients/uade.png");
    await download("https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Universidad_Torcuato_Di_Tella_-_Logo.svg/800px-Universidad_Torcuato_Di_Tella_-_Logo.svg.png", "c:/Web Copiada/document-consulting/public/images/clients/ditella.png");
    await download("https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Logo_Universidad_Austral.svg/800px-Logo_Universidad_Austral.svg.png", "c:/Web Copiada/document-consulting/public/images/clients/austral.png");
    console.log("Downloads completed");
  } catch (e) {
    console.error("Error:", e);
  }
}

main();
