"use client";
import { motion } from "framer-motion";
import {
  Building2,
  Smartphone,
  Database,
  Users,
  Workflow,
  ShieldCheck,
} from "lucide-react";


export default function Page() {
  // Solo media (GIFs) para el HERO
  const heroMedia = [
    { alt: "Intro 1", src: "/gifs/presentation-intro.gif" },
    { alt: "Intro 2", src: "/gifs/presentation-intro.gif" },
  ];

  const services = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Portales de Autoservicio",
      desc:
        "Diseño y desarrollo de portales web para socios de cooperativas, con acceso seguro a saldos, pagos y estados de cuenta en línea.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Aplicaciones Móviles",
      desc:
        "Apps para Android e iOS pensadas en usuarios rurales y urbanos, que facilitan la consulta de productos financieros y notificaciones de pago.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Gestión de Datos Financieros",
      desc:
        "Modelado y administración de bases de datos para crédito y ahorro, con procesos ETL y reportes que apoyan la toma de decisiones.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Diseño UI/UX Inclusivo",
      desc:
        "Interfaces fáciles de usar y adaptadas a distintos niveles de alfabetización digital, con foco en accesibilidad y confianza.",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Automatización de Procesos",
      desc:
        "Implementación de flujos automatizados para originación de créditos, monitoreo de mora y generación de reportes regulatorios.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Ciberseguridad & Cumplimiento",
      desc:
        "Soluciones de autenticación multifactor, cifrado de datos y cumplimiento con normativas locales e internacionales (SIB, ISO).",
    },
  ];
  


  const steps = [
    { n: 1, t: "Descubrimiento", d: "Revisión de situación actual e infraestructura." },
    { n: 2, t: "Arquitectura", d: "Diseño propuesto en nube y selección de servicios." },
    { n: 3, t: "Costeo", d: "Proyección de costos y plan de capacidad." },
    { n: 4, t: "Implementación", d: "Despliegue incremental y pruebas." },
  ];

  const testimonials = [
    {
      quote:
        "Gracias a FinCloud G-5.0 logramos modernizar nuestros canales digitales y hoy los asociados pueden consultar saldos desde cualquier lugar. El cambio fue rápido y confiable.",
      name: "María Fernanda López",
      company: "Cooperativa San José de Chiquimula",
    },
    {
      quote:
        "El acompañamiento del equipo fue clave para migrar a la nube sin interrumpir operaciones. La seguridad y el soporte que ofrecen nos dan mucha tranquilidad.",
      name: "Carlos Méndez",
      company: "Financiera Nueva Esperanza",
    },
    {
      quote:
        "Trabajar con FinCloud G-5.0 nos permitió lanzar una aplicación móvil para nuestros clientes rurales. La adopción ha sido increíble y la satisfacción de los socios aumentó.",
      name: "Ana Lucía Castillo",
      company: "Cooperativa El Progreso, Zacapa",
    },
    {
      quote:
        "Su equipo entendió nuestras necesidades y propuso una arquitectura flexible que ahora usamos para crecer sin limitaciones. Han sido aliados estratégicos.",
      name: "Luis Roberto Alvarado",
      company: "Banco Cooperativo GT",
    },
    {
      quote:
        "Con su ayuda implementamos un portal de autoservicio que redujo hasta un 40% las visitas presenciales. Nuestros asesores ahora pueden enfocarse en brindar valor agregado.",
      name: "Gabriela Estrada",
      company: "Caja Rural La Bendición",
    },
    {
      quote:
        "El profesionalismo y compromiso de FinCloud G-5.0 superaron lo esperado. Son un equipo que combina tecnología y cercanía humana, algo vital en el sector cooperativo.",
      name: "Juan Pablo Morales",
      company: "Fondo de Garantía MICOOPE",
    },
  ];


  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
              >
                FinCloud Consulting G-5.0
              </motion.h1>
              <p className="mt-4 text-slate-700 text-lg">
                <span className="font-semibold">
                  Industria 5.0: nube + humanos al centro de la banca cooperativa
                </span>
              </p>
              <p className="mt-4 text-slate-600 max-w-2xl">
                Consultoría y ejecución para modernizar canales digitales en cooperativas financieras.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/propuesta" className="px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium">
                  Ver Propuesta a FINCA
                </a>
                <a href="/equipo" className="px-5 py-3 rounded-xl border border-slate-300 text-sm font-medium">
                  Conoce al Equipo
                </a>
              </div>
            </div>

            {/* Solo GIFs en el Hero */}
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl border border-slate-200 p-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {heroMedia.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="rounded-2xl p-2 border border-slate-200 bg-slate-50 grid place-items-center"
                    >
                      {/* <Image> no anima GIF, por eso usamos <img> */}
                      <img src={m.src} alt={m.alt} className="rounded-xl w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <Stat big="7+" small="Años de experiencia" />
            <Stat big="60+" small="Proyectos" />
            <Stat big="100+" small="Diseños" />
            <Stat big="50+" small="Clientes" />
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Nuestra Historia</h2>
          <p className="mt-4 text-slate-700 max-w-4xl">
            FinCloud Consulting G-5.0 nació en 2018 como un grupo de profesionales apasionados por la tecnología
            financiera y la nube. Desde nuestros primeros proyectos con cooperativas entendimos que la verdadera
            transformación no solo consiste en migrar sistemas, sino en integrar personas, procesos y tecnología bajo
            un mismo propósito. Evolucionamos hacia la visión de <span className="font-semibold">Industria 5.0</span>, donde la IA, la nube
            y la ciberseguridad se combinan con el talento humano para crear soluciones centradas en las comunidades.
          </p>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl p-8 border bg-white border-slate-200 shadow-sm">
              <h3 className="text-2xl font-semibold">Misión</h3>
              <p className="mt-3 text-slate-700">
                Ofrecer soluciones tecnológicas personalizadas y de alta calidad que fortalezcan a cooperativas y
                entidades financieras. Facilitar la inclusión financiera mediante plataformas accesibles, seguras y
                escalables que preparen a las organizaciones para el futuro digital.
              </p>
            </div>
            <div className="rounded-2xl p-8 border bg-white border-slate-200 shadow-sm">
              <h3 className="text-2xl font-semibold">Visión</h3>
              <p className="mt-3 text-slate-700">
                Ser reconocidos en Centroamérica como la consultora líder en transformación digital para el sector
                cooperativo, distinguiéndonos por integrar tecnologías de vanguardia con un enfoque humano, construyendo
                relaciones duraderas basadas en la confianza y el éxito compartido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Nuestros Valores</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc list-inside text-slate-700">
            <li><span className="font-medium">Innovación con propósito:</span> aplicamos tecnología donde genera impacto real.</li>
            <li><span className="font-medium">Confianza:</span> ética, transparencia y cumplimiento como base de cada entrega.</li>
            <li><span className="font-medium">Colaboración:</span> trabajamos como un solo equipo con nuestros clientes.</li>
            <li><span className="font-medium">Inclusión:</span> diseñamos experiencias pensadas para todos los usuarios.</li>
            <li><span className="font-medium">Excelencia:</span> buscamos superar expectativas en calidad y resultados.</li>
          </ul>
        </div>
      </section>

      {/* ¿Qué hacemos? / Servicios */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">¿Qué hacemos nosotros?</h2>
            <p className="mt-3 text-slate-600">
              Arquitectura en nube, portales de clientes y APIs integradas con sistemas heredados.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl p-6 border bg-white border-slate-200 shadow-sm">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-slate-900 text-white">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-700 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold">Plan de ejecución</h3>
            <ol className="mt-4 grid md:grid-cols-4 gap-4">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl p-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500">Fase {s.n}</div>
                  <div className="font-medium">{s.t}</div>
                  <div className="text-sm text-slate-600 mt-1">{s.d}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Lo que nuestros clientes dicen</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl p-6 border bg-white border-slate-200 shadow-sm">
                <blockquote className="text-slate-700">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">
                  <span className="font-medium text-slate-700">{t.name}</span> · {t.company}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ big, small }: { big: string; small: string }) {
  return (
    <div className="rounded-2xl p-6 border bg-white border-slate-200 shadow-sm text-center">
      <div className="text-3xl font-bold text-slate-900">{big}</div>
      <div className="text-sm text-slate-600">{small}</div>
    </div>
  );
}
