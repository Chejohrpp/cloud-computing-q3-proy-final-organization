"use client"
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
        {/* Nav */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">F</div>
              <span className="font-semibold">FinCloud Consulting G-5.0</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-slate-900">Inicio</Link>          
              <Link href="/equipo" className="hover:text-slate-900">Equipo</Link>    
              <Link href="/propuesta" className="hover:text-slate-900">Propuesta</Link>
              <a href="#contacto" className="hover:text-slate-900">Contacto</a>       
            </nav>
            <Link href="/propuesta" className="text-sm font-medium px-4 py-2 rounded-xl bg-slate-900 text-white">Ver Propuesta</Link>
          </div>
        </header>

        {children}

        {/* Contacto global */}
        <section id="contacto" className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold">Contacto</h2>
                <p className="mt-3 text-slate-600">¿Quieres una demo? Escríbenos y agenda una reunión.</p>
                <form
                  onSubmit={(e) => { e.preventDefault(); alert("Gracias, te contactamos pronto."); }}
                  className="mt-6 flex gap-3"
                >
                  <input type="email" required placeholder="tu@email.com" className="w-full md:w-auto flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <button className="px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium">Enviar</button>
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
            <p>© {new Date().getFullYear()} FinCloud Consulting G-5.0 — Industria 5.0 aplicada a la banca cooperativa</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-700">Términos</a>
              <a href="#" className="hover:text-slate-700">Privacidad</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}