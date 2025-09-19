"use client"
import { useState } from "react";
import { motion } from "framer-motion";

// Landing template for the course project. 
// Drop this into `app/page.tsx` in a Next.js 14+ (app router) project with Tailwind enabled.
// All copy is placeholder—replace for your team/company.

export default function Page() {
  const [email, setEmail] = useState("");

  const features = [
    {
      title: "Portal Web de Clientes",
      desc: "Autogestión: consulta de saldos, movimientos y pagos.",
    },
    {
      title: "API & Microservicios",
      desc: "Capa de servicios para integraciones con sistemas legados (AS/400, ODA).",
    },
    {
      title: "Observabilidad",
      desc: "Monitoreo, logs centralizados y métricas de desempeño.",
    },
    {
      title: "Seguridad & Cumplimiento",
      desc: "Autenticación, autorización, cifrado en tránsito y en reposo.",
    },
  ];

  const steps = [
    { n: 1, t: "Descubrimiento", d: "Revisión de situación actual e infraestructura." },
    { n: 2, t: "Arquitectura", d: "Diseño propuesto en nube y selección de servicios." },
    { n: 3, t: "Costeo", d: "Proyección de costos y plan de capacidad." },
    { n: 4, t: "Implementación", d: "Plan de ejecución y despliegue incremental." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">F</div>
            <span className="font-semibold">FinCloud Consulting G-5.0</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#quienes" className="hover:text-slate-900">Quiénes somos</a>
            <a href="#actual" className="hover:text-slate-900">Situación actual</a>
            <a href="#propuesta" className="hover:text-slate-900">Propuesta</a>
            <a href="#ventajas" className="hover:text-slate-900">Ventajas</a>
            <a href="#limitantes" className="hover:text-slate-900">Limitantes</a>
            <a href="#contacto" className="hover:text-slate-900">Contacto</a>
          </nav>
          <a href="#contacto" className="text-sm font-medium px-4 py-2 rounded-xl bg-slate-900 text-white">Agendar Demo</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{opacity:0, y: 10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Transformación digital para cooperativas financieras
              </motion.h1>
              <p className="mt-4 text-slate-600 text-lg">
                Propuesta integral en la nube para habilitar un portal de clientes, APIs seguras e integración con sistemas existentes.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#propuesta" className="px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium">Ver Propuesta</a>
                <a href="#actual" className="px-5 py-3 rounded-xl border border-slate-300 text-sm font-medium">Infraestructura actual</a>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                *Plantilla académica. Reemplazar textos por información real del equipo.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl border border-slate-200 p-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {features.map((f, i) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="rounded-2xl p-4 border border-slate-200 bg-slate-50"
                    >
                      <h3 className="font-semibold text-slate-900">{f.title}</h3>
                      <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">¿Quiénes somos?</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Somos un equipo especializado en modernización de plataformas financieras. Ofrecemos consultoría, diseño de arquitectura nube y desarrollo de portales para banca cooperativa.
          </p>
        </div>
      </section>

      {/* Situación actual */}
      <section id="actual" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Situación e infraestructura actual</h2>
            <span className="text-xs text-slate-500">AS/400 • ODA • DB MySQL</span>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card title="Canales actuales" desc="Sitio informativo y chat limitado. Sin portal transaccional." />
            <Card title="Core & Datos" desc="Mainframe AS/400, BD privada y replicación a MySQL de lectura." />
            <Card title="Cuellos de botella" desc="Sobrecarga en agencias y consultas repetitivas de clientes." />
          </div>
        </div>
      </section>

      {/* Propuesta */}
      <section id="propuesta" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Propuesta de solución</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Arquitectura en nube con portal web, autenticación, APIs para lectura/escritura controlada e integración con sistemas legados. Despliegue en Vercel para el front y servicios gestionados para el backend.
          </p>
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-5 border bg-white border-slate-200 shadow-sm">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-10">
            <h3 className="font-semibold">Plan de ejecución</h3>
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

      {/* Ventajas & Limitantes */}
      <section id="ventajas" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Ventajas</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-4 list-disc list-inside text-slate-700">
            <li>Escalabilidad elástica y reducción de carga en agencias.</li>
            <li>Experiencia de cliente mejorada con autoservicio 24/7.</li>
            <li>Integración progresiva con sistemas actuales sin interrupciones.</li>
            <li>Monitoreo, auditoría y cumplimiento fortalecidos.</li>
          </ul>
        </div>
      </section>

      <section id="limitantes" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Condiciones y limitantes</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-4 list-disc list-inside text-slate-700">
            <li>Dependencias de integración con core legacy y ODA.</li>
            <li>Gobierno de datos y seguridad: definición de roles y permisos.</li>
            <li>Gestión del cambio y capacitación del personal.</li>
            <li>Costos operativos mensuales en nube y observabilidad.</li>
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold">Contacto</h2>
              <p className="mt-3 text-slate-600">
                ¿Quieres una demo? Déjanos tu correo y agenda una reunión.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Gracias, pronto te escribimos a: ${email}`);
                }}
                className="mt-6 flex gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full md:w-auto flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <button className="px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium">
                  Enviar
                </button>
              </form>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500">Correo</dt>
                  <dd className="font-medium">contacto@fincloud.example</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Sitio</dt>
                  <dd className="font-medium">fincloud.example</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Teléfono</dt>
                  <dd className="font-medium">(+502) 5555-5555</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Dirección</dt>
                  <dd className="font-medium">Guatemala, GT</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} FinCloud Consulting G-5.0. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Términos</a>
            <a href="#" className="hover:text-slate-700">Privacidad</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-5 border bg-slate-50 border-slate-200">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  );
}
