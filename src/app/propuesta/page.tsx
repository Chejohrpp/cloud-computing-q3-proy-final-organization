// src/app/propuesta/page.tsx
import {
  Building2,
  Users,
  Server,
  Database,
  Network,
  ShieldCheck,
  Smartphone,
  Globe,
  Layers,
  Workflow,
} from "lucide-react";

export default function PropuestaPage() {
  const metrics = [
    { big: "35,000+", small: "Clientes atendidos" },
    { big: "14", small: "Sucursales en operación" },
    { big: "5", small: "Productos principales" },
    { big: "24/7", small: "Disponibilidad objetivo" },
  ];

  const infraestructuraActual = [
    {
      icon: <Server className="h-5 w-5" />,
      title: "Servidor Central",
      desc:
        "IBM AS/400 (MAIN-SERVER) como núcleo de operaciones para 14 agencias.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Base de Datos Principal",
      desc: "DB FINCA HN con información transaccional y de clientes.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Replicación",
      desc:
        "Sistema de Novedades actualiza BD MySQL (Individuales y Organizacionales) de solo lectura.",
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: "ODA",
      desc:
        "Herramienta interna de alto volumen que consulta las réplicas MySQL (agencias 13 y 14).",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Presencia Web",
      desc:
        "Sitio informativo sin portal transaccional; chat de atención limitado.",
    },
  ];

  const canales = [
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Portal Web de Clientes",
      desc:
        "Accesible desde cualquier navegador para consultas y gestiones básicas.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Aplicación Móvil",
      desc:
        "iOS/Android para ampliar cobertura y notificaciones en tiempo real.",
    },
  ];

  const mvp = [
    "Consulta de saldos y movimientos",
    "Historial y estados de cuenta",
    "Fechas y recordatorios de pago",
    "Notificaciones de transacciones",
    "Consulta de información y políticas",
  ];

  const arquitecturaPropuesta = [
    {
      icon: <CloudIcon />,
      title: "Proveedor de Nube",
      desc:
        "AWS o Azure por seguridad, escalabilidad y amplitud de servicios.",
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: "API Gateway",
      desc:
        "Capa de integración segura entre la plataforma y el AS/400; única interfaz para escrituras y lecturas en tiempo real cuando aplique.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "BD en la Nube",
      desc:
        "RDS/SQL para lecturas masivas (consultas, historiales) reduciendo carga del core.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Portal Web (Frontend)",
      desc: "Next.js/React para rendimiento y accesibilidad.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "App Móvil (Frontend)",
      desc: "React Native o Flutter para iOS y Android.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Seguridad",
      desc:
        "Cifrado en tránsito y reposo, MFA, monitoreo continuo y auditoría.",
    },
  ];

  const ventajas = [
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Reducción de Carga Operativa",
      desc:
        "Automatización de miles de consultas mensuales para liberar al personal.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Mejor Experiencia",
      desc: "Acceso 24/7 y autoservicio para aumentar satisfacción y lealtad.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Escalabilidad",
      desc: "Crecimiento flexible sin inversiones de hardware.",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Modernización",
      desc: "Base tecnológica para nuevos servicios digitales.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Alineación Social",
      desc: "Facilita inclusión financiera en zonas remotas.",
    },
  ];

  const limitantes = [
    {
      title: "Dependencia del AS/400",
      desc:
        "El core sigue siendo crítico; la API Gateway mitiga pero no elimina el riesgo.",
    },
    {
      title: "Adopción del Cliente",
      desc:
        "Se requiere comunicación y capacitación, especialmente para usuarios con baja alfabetización digital.",
    },
    {
      title: "Conectividad",
      desc:
        "Limitaciones de internet en áreas rurales pueden afectar el uso continuo.",
    },
    {
      title: "Seguridad y Cumplimiento",
      desc:
        "Gestión rigurosa de datos y normativas durante todo el ciclo.",
    },
  ];

  const cronograma = [
    {
      fase: 1,
      nombre: "Análisis y Diseño",
      duracion: "4 semanas",
      detalle:
        "Levantamiento de requisitos, arquitectura y UX/UI.",
    },
    {
      fase: 2,
      nombre: "Backend & API Gateway",
      duracion: "8 semanas",
      detalle:
        "Integración segura con AS/400 y base en nube.",
    },
    {
      fase: 3,
      nombre: "Frontend (Web + Móvil)",
      duracion: "12 semanas",
      detalle:
        "Construcción del portal web y app móvil (MVP).",
    },
    {
      fase: 4,
      nombre: "Pruebas & Piloto",
      duracion: "6 semanas",
      detalle:
        "Seguridad, funcional y rendimiento; lanzamiento controlado.",
    },
    {
      fase: 5,
      nombre: "Lanzamiento & Operación",
      duracion: "Continuo",
      detalle:
        "Despliegue general, monitoreo y roadmap de mejoras.",
    },
  ];

  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">
          Propuesta para Financiera FINCA
        </h1>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Plataforma de banca digital en la nube con portal web, aplicación
          móvil y una capa de integración segura con el core AS/400. El
          objetivo es habilitar autoservicio 24/7, reducir carga operativa y
          mejorar la experiencia del cliente.
        </p>

        {/* Métricas / Contexto */}
        <section className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {metrics.map((m) => (
              <Card key={m.small}>
                <div className="text-2xl font-bold text-slate-900">
                  {m.big}
                </div>
                <div className="text-sm text-slate-600">{m.small}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* 1. Situación Actual */}
        <section className="mt-12">
          <SectionTitle title="1. Situación Actual de la Empresa" />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card>
              <h3 className="font-semibold">1.1. Descripción</h3>
              <p className="mt-2 text-sm text-slate-700">
                Financiera FINCA es una cooperativa financiera no bancaria en
                Honduras con misión social: combatir la pobreza. Atiende a
                ~35,000 clientes, principalmente emprendedores de bajos ingresos
                en áreas rurales e indígenas, a través de 14 sucursales. Ofrece
                Banca Comunal, Crédito Grupal e Individual, Ahorro y Depósitos a
                Plazo.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold">1.2. Análisis de la Situación</h3>
              <ul className="mt-2 text-sm text-slate-700 list-disc list-inside space-y-1">
                <li>
                  Personal sobrecargado por alto volumen de transacciones
                  manuales y consultas básicas.
                </li>
                <li>
                  Modelo presencial poco escalable; limita labores de mayor
                  valor.
                </li>
                <li>
                  <span className="font-medium">Clientes Individuales:</span>{" "}
                  88,000+ transacciones/mes; consultas de saldos/movimientos
                  (32,045) y depósitos (18,032) son automatizables (~95%).
                </li>
                <li>
                  <span className="font-medium">Clientes Organizacionales:</span>{" "}
                  reclamos (6,400; ~50% automatizable) y pagos (5,089; ~60%
                  automatizable).
                </li>
                <li>
                  Ausencia de autoservicio digital genera cuellos de botella y
                  experiencia subóptima.
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* 1.3 Infraestructura Actual */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">1.3. Infraestructura Actual</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {infraestructuraActual.map((b) => (
              <Card key={b.title}>
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-slate-900 text-white">
                  {b.icon}
                </div>
                <div className="mt-3 font-medium">{b.title}</div>
                <p className="text-sm text-slate-700 mt-1">{b.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 1.4 Análisis de Infraestructura */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">
            1.4. Análisis de la Infraestructura
          </h3>
          <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
            <li>
              <span className="font-medium">Tecnología heredada:</span> AS/400
              robusto pero difícil de integrar; sin APIs modernas.
            </li>
            <li>
              <span className="font-medium">Falta de escalabilidad:</span>{" "}
              on-premise costoso y lento para crecer.
            </li>
            <li>
              <span className="font-medium">Latencia de datos:</span>{" "}
              replicación a MySQL puede presentar desfases vs. tiempo real.
            </li>
            <li>
              <span className="font-medium">Aislamiento:</span> arquitectura
              cerrada que impide un ecosistema digital de valor agregado.
            </li>
          </ul>
        </section>

        {/* 2. Propuesta de Solución */}
        <section className="mt-16">
          <SectionTitle title="2. Propuesta de Solución" />
          <p className="mt-3 text-slate-700 max-w-4xl">
            Plataforma de Banca Digital en la Nube para clientes individuales y
            organizacionales, con énfasis en automatizar interacciones de alto
            volumen mediante dos canales principales.
          </p>

          {/* Canales */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {canales.map((c) => (
              <Card key={c.title}>
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-slate-900 text-white">
                  {c.icon}
                </div>
                <div className="mt-3 font-medium">{c.title}</div>
                <p className="text-sm text-slate-700 mt-1">{c.desc}</p>
              </Card>
            ))}
          </div>

          {/* MVP */}
          <div className="mt-6">
            <h4 className="font-semibold">Funciones del MVP</h4>
            <ul className="mt-2 text-sm text-slate-700 list-disc list-inside grid md:grid-cols-2 gap-x-6">
              {mvp.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2.2 Infraestructura Propuesta */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">2.2. Infraestructura Propuesta</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {arquitecturaPropuesta.map((a) => (
              <Card key={a.title}>
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-slate-900 text-white">
                  {a.icon}
                </div>
                <div className="mt-3 font-medium">{a.title}</div>
                <p className="text-sm text-slate-700 mt-1">{a.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 2.3 Proyección de Costos */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">2.3. Proyección de Costos</h3>
          <p className="mt-2 text-sm text-slate-700">
            Estimación preliminar. El detalle se definirá en la fase de
            planificación.
          </p>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full table-auto text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Categoría</th>
                  <th className="px-4 py-3 text-left font-medium">Descripción</th>
                  <th className="px-4 py-3 text-left font-medium">
                    Costo Estimado (USD)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="align-top px-4 py-4 font-medium">
                    Inversión Inicial (CAPEX)
                  </td>
                  <td className="align-top px-4 py-4 text-slate-700">
                    Desarrollo de APIs, diseño y desarrollo de App móvil y
                    Portal Web, configuración de infraestructura en la nube,
                    pruebas y despliegue.
                  </td>
                  <td className="align-top px-4 py-4 text-slate-900 font-semibold">
                    $80,000 – $120,000
                  </td>
                </tr>
                <tr>
                  <td className="align-top px-4 py-4 font-medium">
                    Costos Operativos Anuales (OPEX)
                  </td>
                  <td className="align-top px-4 py-4 text-slate-700">
                    Consumo de servicios en la nube (servidores, bases de datos,
                    transferencia de datos), licencias, mantenimiento, soporte
                    técnico y actualizaciones.
                  </td>
                  <td className="align-top px-4 py-4 text-slate-900 font-semibold">
                    $15,000 – $25,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 2.4 Cronograma */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">
            2.4. Planificación del Proyecto (Cronograma Preliminar)
          </h3>
          <div className="mt-4 grid md:grid-cols-5 gap-4">
            {cronograma.map((c) => (
              <Card key={c.fase}>
                <div className="text-xs text-slate-500">Fase {c.fase}</div>
                <div className="font-medium">{c.nombre}</div>
                <div className="text-sm text-slate-600">{c.duracion}</div>
                <p className="text-sm text-slate-700 mt-1">{c.detalle}</p>
              </Card>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Duración total estimada hasta lanzamiento general:{" "}
            <span className="font-medium">7–8 meses</span>.
          </p>
        </section>

        {/* 2.5 Ventajas */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">2.5. Ventajas de la Propuesta</h3>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventajas.map((v) => (
              <Card key={v.title}>
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-slate-900 text-white">
                  {v.icon}
                </div>
                <div className="mt-3 font-medium">{v.title}</div>
                <p className="text-sm text-slate-700 mt-1">{v.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 2.6 Limitantes */}
        <section className="mt-12">
          <h3 className="text-lg font-semibold">
            2.6. Condiciones y Limitantes
          </h3>
          <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
            {limitantes.map((l) => (
              <li key={l.title}>
                <span className="font-medium">{l.title}:</span> {l.desc}
              </li>
            ))}
          </ul>
        </section>

        {/* 3. Conclusiones */}
        <section className="mt-16">
          <SectionTitle title="3. Conclusiones" />
          <p className="mt-3 text-slate-700 max-w-4xl">
            El modelo operativo actual ha alcanzado su límite. La banca digital
            propuesta no es solo una mejora técnica, sino una inversión
            estratégica para la sostenibilidad y crecimiento de FINCA. Reducirá
            costos, mejorará la experiencia de los clientes y reforzará la
            misión de inclusión financiera.
          </p>
          <p className="mt-3 text-slate-700 max-w-4xl">
            Recomendamos proceder con la fase de análisis y diseño para detallar
            el alcance y validar estimaciones.
          </p>
        </section>
      </div>
    </main>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 border bg-white border-slate-200 shadow-sm">
      {children}
    </div>
  );
}

/** Minimal cloud icon (SVG) para mantener consistencia visual */
function CloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19a4.5 4.5 0 0 0 0-9 7 7 0 0 0-13.5 2" />
      <path d="M2 17.5A3.5 3.5 0 0 0 5.5 21H17" />
    </svg>
  );
}
