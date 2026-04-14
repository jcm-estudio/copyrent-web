'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  Menu,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Monitor,
  TrendingDown,
  Activity,
  Shield,
  Globe,
} from 'lucide-react'

/* Social Icons Fallbacks */
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

/* ─────────── Scroll-to-top ─────────── */
function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed left-3 bottom-3 z-50 bg-black text-white rounded px-3 py-1 text-sm shadow-lg hover:bg-gray-800 transition"
      aria-label="Volver arriba"
    >
      ↑ Top
    </button>
  )
}

/* ─────────── WhatsApp Float ─────────── */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5491169652756?text=Hola,%20necesito%20asesoramiento%20en"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white rounded-full p-3.5 shadow-xl hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

/* ─────────── Intersection Observer Hook ─────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  type NavLink = { label: string; href: string; external?: boolean; children?: { label: string; href: string }[] }
  const navLinks: NavLink[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Aulas Híbridas', href: '#solucion-de-impresion' },
    { label: 'Soluciones', href: '#transformacion-digital' },
    {
      label: 'Equipamiento',
      href: '#equipamiento',
      children: [
        { label: 'Impresoras', href: '#productos' },
        { label: 'Multifuncionales', href: '#productos' },
        { label: 'Duplicadora Digital', href: '#productos' },
        { label: 'Proyectores', href: '#productos' },
      ],
    },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <div className="min-h-screen flex flex-col font-[var(--font-montserrat)]">
      {/* ═══════ HEADER ═══════ */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#inicio" className="flex-shrink-0">
              <img
                src="https://copyrent.com.ar/wp-content/uploads/2020/05/nuevo-logo.png"
                alt="CopyRent"
                className="h-10 md:h-14 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="group relative">
                    <a
                      href={link.href}
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0170B9] transition-colors"
                    >
                      {link.label}
                    </a>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-xl border py-2 min-w-[280px]">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#e6f0f7] hover:text-[#0170B9] transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0170B9] transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#contacto"
                className="ml-3 px-5 py-2.5 bg-[#0170B9] text-white text-sm font-semibold rounded-lg hover:bg-[#015086] transition-colors"
              >
                Haga su consulta
              </a>
            </nav>

            {/* Mobile hamburger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Abrir menú" className="lg:hidden" />}>
                <Menu className="h-6 w-6 text-[#0170B9]" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-[#0170B9] text-white p-0">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <div className="flex flex-col pt-6">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-6 py-3 text-base font-medium text-white hover:bg-[#015086] transition-colors"
                      >
                        {link.label}
                      </a>
                      {link.children &&
                        link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-10 py-2 text-sm text-white/80 hover:text-white hover:bg-[#015086] transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                    </div>
                  ))}
                  <a
                    href="#contacto"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mx-6 mt-4 mb-6 py-3 text-center bg-white text-[#0170B9] font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Haga su consulta
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <main className="flex-1">
        {/* ──── HERO SECTION ──── */}
        <section
          id="inicio"
          className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#0a1628] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 50%, rgba(0,130,64,0.3) 0%, transparent 50%),
                               radial-gradient(circle at 75% 30%, rgba(0,130,64,0.2) 0%, transparent 50%)`,
            }} />
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in uppercase">
              Reducí costos hoy: Alquiler de sistemas de impresión y proyectores con servicio premium.
            </h1>
            <p className="text-xl sm:text-2xl md:text-2xl font-light text-white/90 mb-2">
              Equipá tu empresa o institución educativa con tecnología de última generación sin inversión inicial.
            </p>
            <p className="text-lg sm:text-xl text-white/80 mb-8">
              Asegurá un ahorro real con nuestro inigualable servicio técnico garantizado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#productos"
                className="w-full sm:w-auto px-8 py-4 bg-[#0170B9] text-white font-semibold rounded-lg text-lg hover:bg-[#015086] hover:shadow-lg transition-all duration-300"
              >
                Ver Productos
              </a>
              <a
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#0170B9] font-semibold rounded-lg text-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
              >
                Solicitar Demo
              </a>
            </div>
          </div>
        </section>

        {/* ──── SOLUCIÓN INTEGRAL ──── */}
        <section id="servicios" className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
              <span className="text-[#0170B9]">NUESTROS</span> SERVICIOS
            </h2>
            <h3 className="text-lg sm:text-xl text-center text-gray-600 mb-4">
              Gestión integral para empresas y colegios
            </h3>
            <p className="text-center text-gray-500 max-w-2xl mx-auto mb-8">
              Nos dedicamos a la venta y alquiler de máquinas fotocopiadoras, multifuncionales y proyectores Epson para cubrir todas las necesidades de su empresa.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-4">Puntos destacados:</h4>

            <Accordion defaultValue={["item-1"]} className="space-y-2">
              {[
                {
                  title: 'ALQUILER DE EQUIPOS',
                  content: 'Ahorre el desembolso inicial de comprar un equipo nuevo y manténgase actualizado a un costo por clic ajustado a su modelo.',
                },
                {
                  title: 'SERVICIO TÉCNICO',
                  content: 'Contamos con el mejor servicio postventa para garantizar su tranquilidad operativa.',
                },
                {
                  title: 'AHORRO Y CONTROL',
                  content: 'Contratos personalizados según las necesidades y ubicación geográfica del cliente.',
                },
                {
                  title: 'ACTUALIZACIÓN TECNOLÓGICA',
                  content: 'Implementamos tecnología moderna y escalable, orientada siempre a la reducción de costos en la gestión documental.',
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i + 1}`}
                  className="border border-gray-200 rounded-lg px-4 data-[state=open]:border-[#0170B9] data-[state=open]:bg-[#f0f4f8] transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:no-underline py-4">
                    <span className="flex items-center gap-2">
                      <span className="text-[#0170B9]">•</span> {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base pb-4">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ──── CTA BANNER ──── */}
        <CTABanner />


        {/* ──── SOLUCIÓN DE IMPRESIÓN SUSTENTABLE ──── */}
        <SustentableSection />

        {/* ──── TRANSFORMACIÓN DIGITAL ──── */}
        <TransformacionSection />

        {/* ──── CONTROL Y MONITOREO ──── */}
        <ControlMonitoreoSection />

        {/* ──── PRODUCTOS ──── */}
        <ProductosSection />

        {/* ──── MARCAS BANNER ──── */}
        <MarcasBanner />

        {/* ──── CONTACTO ──── */}
        <ContactoSection />
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://copyrent.com.ar/wp-content/uploads/2020/05/nuevo-logo.png"
              alt="CopyRent"
              className="h-20 mb-6 brightness-0 invert"
            />
            <div className="space-y-1 mb-6 text-white/80">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" /> Buenos Aires | ARGENTINA
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" /> +54 9 11 6965-2756
              </p>
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" /> ventas@copyrent.com
              </p>
            </div>
            <div className="flex gap-4 mb-8">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/CopyRentok', label: 'Facebook' },
                { icon: Instagram, href: 'https://www.instagram.com/ventascopyrent/', label: 'Instagram' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/copyrent/', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0170B9] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
          Copyright © 2026 CopyRent | Web JCM Julio Mendez
        </div>
      </footer>

      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════ */

/* ──── CTA BANNER ──── */
function CTABanner() {
  const { ref, inView } = useInView()
  return (
    <section ref={ref} className="bg-[#0170B9] py-12 md:py-16">
      <div
        className={`max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
          Solicitá una auditoría gratuita y conocé cuánto podés ahorrar con Solución integral de Impresión y Copiado.
        </h2>
        <a
          href="#contacto"
          className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0170B9] transition-all duration-300"
        >
          Solicitar diagnóstico gratuito
        </a>
      </div>
    </section>
  )
}



/* ──── AULAS HÍBRIDAS ──── */
function SustentableSection() {
  const { ref, inView } = useInView()
  const beneficios = [
    'Proyectores interactivos Epson BrightLink.',
    'Sistemas integrales que capturan, guardan y permiten compartir el trabajo.',
    'Garantiza la participación de todos los estudiantes, presenciales o remotos.',
    'Elimina la necesidad de computadoras conectadas a la pizarra.',
    'Potencian el aprendizaje colaborativo con herramientas de marcado de pantalla compartida.',
  ]

  return (
    <section id="solucion-de-impresion" className="py-16 md:py-24 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            AULAS HÍBRIDAS <br className="hidden sm:block" /> INTERACTIVAS
          </h2>
          <h3 className="text-lg sm:text-xl text-gray-600 mb-4">
            La educación se transformó, y el aula también
          </h3>
          <p className="text-gray-500 max-w-3xl mx-auto">
            La educación en Argentina y el mundo requerirá en el futuro próximo modalidades combinadas –presenciales y remotas–. Esto implica readaptar metodologías, herramientas e infraestructuras.
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto mt-3">
            Los proyectores interactivos Epson BrightLink fácilmente transforman una pizarra blanca en pizarras digitales interactivas, facilitando la integración de estudiantes en cualquier modalidad.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img
              src={`${process.env.NODE_ENV === 'production' ? '/copyrent-web' : ''}/images/products/aula-interactiva.jpeg`}
              alt="Proyector Epson BrightLink Aulas Híbridas"
              className="max-h-[300px] mx-auto object-cover rounded-xl shadow-lg mix-blend-multiply"
              loading="lazy"
            />
          </div>

          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Beneficios para instituciones:</h4>
            <ul className="space-y-4 mb-8">
              {beneficios.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0170B9] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="inline-block px-8 py-3 bg-[#0170B9] text-white font-semibold rounded-lg hover:bg-[#015086] transition-colors"
            >
              COTIZÁ TU AULA HÍBRIDA
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──── REDUCCIÓN DE COSTOS ──── */
function TransformacionSection() {
  const { ref, inView } = useInView()

  const beneficios = [
    { title: 'Análisis inicial', desc: 'Realizamos un estudio completo de las necesidades de su empresa y gastos actuales.' },
    { title: 'Propuesta adaptada', desc: 'Diseñamos un plan de impresión con equipos que reducen costos de energía e insumos.' },
    { title: 'Reportes y control', desc: 'Supervisión constante para mantener los gastos bajo control en todo momento.' },
    { title: 'Mantenimiento preventivo', desc: 'Asegura que los sistemas estén siempre disponibles para no detener su operación.' },
  ]

  return (
    <section id="transformacion-digital" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            TE AYUDAMOS A <br />REDUCIR COSTOS DE IMPRESIÓN
          </h2>
          <h3 className="text-lg sm:text-xl text-gray-600 mb-4">
            Consultoría y gestión experta
          </h3>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Nuestros procesos de optimización son garantizados, logrando una reducción de costos ocultos y mejorando la productividad de su parque de impresión.
          </p>
          <p className="text-[#0170B9] font-semibold mt-4">
            Sin inversiones iniciales, pagando sólo lo que imprime.
          </p>
        </div>

        <div className="text-center mb-10 mt-8">
          <a
            href="#contacto"
            className="inline-block px-8 py-3 border-2 border-[#0170B9] text-[#0170B9] font-semibold rounded-lg hover:bg-[#0170B9] hover:text-white transition-all duration-300"
          >
            SOLICITÁ UNA AUDITORÍA HOY
          </a>
        </div>

        <h4 className="text-xl font-semibold text-gray-900 text-center mb-8">Nuestro proceso:</h4>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className={`flex gap-4 p-4 rounded-lg border border-gray-100 hover:border-[#0170B9]/30 hover:shadow-md transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="h-14 w-14 flex-shrink-0 bg-[#f0f4f8] rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-[#0170B9]" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">{b.title}</h5>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──── CONTROL Y MONITOREO ──── */
function ControlMonitoreoSection() {
  const { ref, inView } = useInView()

  const beneficios = [
    { title: 'Monitoreo centralizado', desc: 'Accedé a un panel que muestra el estado de cada equipo, consumos y alertas de mantenimiento.', icon: Monitor },
    { title: 'Reducción de costos operativos', desc: 'Controlá el uso por área, usuario o centro de costos, asignando políticas de impresión consientes.', icon: TrendingDown },
    { title: 'Automatización y control inteligente', desc: 'Detectá incidencias antes de que impacten, con reportes automáticos de rendimiento y gasto.', icon: Activity },
    { title: 'Seguridad y trazabilidad', desc: 'Protegé los documentos con autenticación, marcas de agua y auditorías de impresión.', icon: Shield },
    { title: 'Gestión remota', desc: 'Configurá y administrá toda tu flota desde cualquier lugar, con soporte técnico remoto.', icon: Globe },
  ]

  return (
    <section id="control-y-monitoreo" className="py-16 md:py-24 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            CONTROL Y MONITOREO DE<br />TU PARQUE DE IMPRESIÓN.
          </h2>
          <h3 className="text-lg sm:text-xl text-gray-600 mb-4">
            Más control, menos costos. Convertí la gestión de impresión en un{' '}
            <span className="font-bold text-[#0170B9]">proceso transparente, eficiente y sostenible.</span>
          </h3>
          <p className="text-gray-700 font-semibold mb-2">Soluciones incluidas</p>
        </div>

        <div className="mb-6"></div>

        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-gray-500 mb-4">
            Cada una diseñada para distintos niveles de gestión y control:
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            <strong className="text-gray-700">Print Audit</strong>: monitoreo remoto, control de usuarios y análisis de comportamiento de impresión.
            <br /><br />
            <strong className="text-gray-700">PaperCut</strong>: asignación por departamentos y reportes de uso; ideal para optimizar costos.
            <br /><br />
            Control Suite es el servicio de gestión de flota de impresión que te permite monitorear, administrar y optimizar todos tus dispositivos en tiempo real.
            <br /><br />
            Con nuestras soluciones, podés reducir costos, mejorar la eficiencia operativa y tener total visibilidad del uso de impresoras, usuarios y consumos.
          </p>
        </div>

        <h4 className="text-xl font-semibold text-gray-900 text-center mb-8">Beneficios clave:</h4>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className={`flex gap-4 p-4 rounded-lg border border-gray-100 bg-white hover:border-[#0170B9]/30 hover:shadow-md transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="h-14 w-14 flex-shrink-0 bg-[#f0f4f8] rounded-full flex items-center justify-center">
                <b.icon className="h-6 w-6 text-[#0170B9]" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">{b.title}</h5>
                <p className="text-sm text-gray-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contacto"
            className="inline-block px-8 py-3 bg-[#0170B9] text-white font-semibold rounded-lg hover:bg-[#015086] transition-colors w-full sm:w-auto sm:min-w-[280px]"
          >
            SOLICITAR DEMO CONTROL SUITE
          </a>
        </div>
      </div>
    </section>
  )
}

/* ──── PRODUCTOS ──── */
function ProductosSection() {
  const { ref, inView } = useInView()
  const [visibleCount, setVisibleCount] = useState(8)
  const [activeTab, setActiveTab] = useState('Todos')

  const productosOficiales = [
    {
      src: '/images/products/CATSHEET_EM_C8100.jpeg',
      title: 'Epson WorkForce Pro EM-C8100',
      desc: 'Impresora Monocromática, Escanea, Copia, Fax. Alto tránsito.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/EH600.jpeg',
      title: 'BenQ EH600',
      desc: 'Proyector Inteligente Wireless. Calidad corporativa.',
      type: 'Proyector'
    },
    {
      src: '/images/products/Especificaciones-POWERLITE-L210W.jpeg',
      title: 'Epson PowerLite L210W',
      desc: 'Proyector Láser 3LCD, 4.500 lúmenes de brillo.',
      type: 'Proyector'
    },
    {
      src: '/images/products/Especificciones-WF-C878R-v2.jpeg',
      title: 'Epson WorkForce Pro WF-C878R',
      desc: 'Multifuncional a color con tecnología RIPS (86.000 páginas).',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/EW800ST.jpeg',
      title: 'BenQ EW800ST',
      desc: 'Proyector Inteligente Interactivo de Tiro Corto.',
      type: 'Proyector'
    },
    {
      src: '/images/products/im-C4500-C6000-spec-sheet-es-la.jpeg',
      title: 'Ricoh IM C4500 / C6000',
      desc: 'Equipo Inteligente Multifunción A3 a Color.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/im430f-spec-sheet-es-la.jpeg',
      title: 'Ricoh IM 430F',
      desc: 'Equipo Inteligente Multifunción A4 Monocromo.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/impresora_multifuncion_MP501SPF-601SPF.jpeg',
      title: 'Ricoh MP 501SPF / 601SPF',
      desc: 'Impresora Multifunción Láser Monocromo (50-60ppm).',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/M320F_P311_Brochure_CAEN.jpeg',
      title: 'Ricoh M320F / P311',
      desc: 'Impresora Multifunción de Escritorio Monocromo productiva.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/mpc6004.jpeg',
      title: 'Ricoh MP C6004',
      desc: 'Multifunción Láser a Color de Alto Rendimiento.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/PowerLite_L260F_Laser_Display_Projector_Specification_Sheet_CPD-62987.jpeg',
      title: 'Epson PowerLite L260F',
      desc: 'Proyector Láser Inalámbrico 1080p, 4.600 lúmenes.',
      type: 'Proyector'
    },
    {
      src: '/images/products/R4111_v3_IM_C300F_IM_C400F_IM_C400SRF_Data_Sheet_hi-res_sp.jpeg',
      title: 'Ricoh IM C300F / C400F',
      desc: 'Equipo Inteligente Multifunción A4 a Color.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/Ricoh-MP-6055-Folleto.jpeg',
      title: 'Ricoh MP 6055 Series',
      desc: 'Multifunción Láser Monocromo para la oficina.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/Ricoh-MP-6503-Folleto.jpeg',
      title: 'Ricoh MP 6503SP',
      desc: 'Multifunción de Producción Láser Monocromo.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/Ricoh-MP-C6503-Folleto.jpeg',
      title: 'Ricoh MP C6503',
      desc: 'Multifunción A3 de Alta Producción a Color.',
      type: 'Impresora / Multifunción'
    },
    {
      src: '/images/products/sp_3710sf.jpeg',
      title: 'Ricoh SP 3710SF',
      desc: 'Impresora Multifunción Láser B/N Compacta.',
      type: 'Impresora / Multifunción'
    }
  ]

  const filteredProducts = activeTab === 'Todos' 
    ? productosOficiales 
    : productosOficiales.filter(p => p.type === activeTab);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const basePath = process.env.NODE_ENV === 'production' ? '/copyrent-web' : '';

  return (
    <section id="productos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            EQUIPAMIENTO QUE OFRECEMOS
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-6">
            Equipos y soluciones de impresión y proyección, adaptables a las necesidades de su empresa.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            {['Todos', 'Impresora / Multifunción', 'Proyector'].map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setVisibleCount(8); }}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTab === tab ? 'bg-[#0170B9] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((p, i) => (
            <div
              key={i}
              className={`bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-500 flex flex-col ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i % 4) * 100}ms` }}
            >
              <div className="h-48 mb-4 w-full flex items-center justify-center bg-white rounded-lg p-2 overflow-hidden shadow-sm">
                <img
                  src={`${basePath}${p.src}`}
                  alt={p.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 mt-auto">{p.title}</h3>
              <p className="text-sm text-gray-500 mb-4 h-10">{p.desc}</p>
              <a
                href={`https://wa.me/5491169652756?text=Hola,%20me%20interesa%20consultar%20por%20${encodeURIComponent(p.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border-2 border-[#0170B9] text-[#0170B9] font-semibold rounded-lg hover:bg-[#0170B9] hover:text-white transition-all duration-300 text-sm w-full mt-auto"
              >
                CONSULTAR
              </a>
            </div>
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="inline-block px-8 py-3 bg-[#0170B9] text-white font-semibold rounded-lg hover:bg-[#015086] transition-colors shadow-md hover:shadow-lg"
            >
              Cargar Más Equipos
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ──── MARCAS BANNER ──── */
function MarcasBanner() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <img
          src="https://document-consulting.com/wp-content/uploads/2023/04/Mesa-de-trabajo-1-copia-100.jpg"
          alt="Trabajamos con marcas líderes como Epson, Canon, Lexmark, Toshiba, Avision y Kodak Alaris"
          className="w-full hidden md:block"
          loading="lazy"
        />
        <img
          src="https://document-consulting.com/wp-content/uploads/2023/04/Mesa-de-trabajo-2-copia-100.jpg"
          alt="Trabajamos con marcas líderes como Epson, Canon, Lexmark, Toshiba, Avision y Kodak Alaris"
          className="w-full md:hidden"
          loading="lazy"
        />
      </div>
    </section>
  )
}

/* ──── CONTACTO ──── */
function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    empleados: '',
    email: '',
    telefono: '',
    producto: '',
    mensaje: '',
  })

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('https://formsubmit.co/ajax/ventas@copyrent.com.ar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'Nuevo contacto desde la web CopyRent',
          _template: 'table'
        })
      });
      alert('Formulario enviado correctamente. Nos pondremos en contacto a la brevedad.')
      setFormData({
        nombre: '', empresa: '', empleados: '', email: '', telefono: '', producto: '', mensaje: ''
      })
    } catch {
      alert('Hubo un error al enviar el formulario. Por favor, intente nuevamente o envíenos un correo directo.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="relative py-16 md:py-24 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2844] to-[#0a1628] opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div className="text-white">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <Mail className="h-10 w-10 text-[#0170B9] opacity-90" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTACTO</h2>
            <p className="text-white/70 text-lg mb-8">
              Cuéntenos qué necesita y un asesor se pondrá en contacto a la brevedad.
            </p>
            <a
              href="#inicio"
              className="inline-block px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0a1628] transition-all duration-300"
            >
              Volver al menú
            </a>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Nombre y apellido"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="bg-transparent border-2 border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none h-12 px-4"
            />
            <Input
              placeholder="Tipo de empresa"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              className="bg-transparent border-2 border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none h-12 px-4"
            />
            <Select
              value={formData.empleados}
              onValueChange={(v) => setFormData({ ...formData, empleados: v ?? '' })}
            >
              <SelectTrigger className="bg-transparent border-2 border-white/40 text-white focus:border-white rounded-none h-12 px-4">
                <SelectValue placeholder="Cantidad de empleados" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a2a44] border-white/20">
                <SelectItem value="menos-20">Menos de 20</SelectItem>
                <SelectItem value="20-50">De 20 a 50</SelectItem>
                <SelectItem value="50-mas">50 o más</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="email"
              placeholder="Mail"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-transparent border-2 border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none h-12 px-4"
            />
            <Input
              type="tel"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="bg-transparent border-2 border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none h-12 px-4"
            />
            <Select
              value={formData.producto}
              onValueChange={(v) => setFormData({ ...formData, producto: v ?? '' })}
            >
              <SelectTrigger className="bg-transparent border-2 border-white/40 text-white focus:border-white rounded-none h-12 px-4">
                <SelectValue placeholder="Producto de interés" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a2a44] border-white/20">
                <SelectItem value="plotters">Plotters e impresoras de gran formato / impresoras de etiquetas a color</SelectItem>
                <SelectItem value="microfilms">Microfilms y digitalización especializada</SelectItem>
                <SelectItem value="impresoras">Impresoras de alta y mediana producción</SelectItem>
                <SelectItem value="scanners">Scanners de documentos profesionales</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              className="bg-transparent border-2 border-white/40 text-white placeholder:text-white/50 focus:border-white rounded-none min-h-[100px] resize-none px-4 py-3"
            />
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-transparent border-2 border-white text-white font-semibold rounded-none h-12 hover:bg-white hover:text-[#0a1628] transition-all duration-300 disabled:opacity-50"
            >
              {submitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
