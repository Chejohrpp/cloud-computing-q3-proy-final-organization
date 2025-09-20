const integrantes = [
    { nombre: "Sergio Rolando Hernández Pérez", carnet: "999017213" },
    { nombre: "Rodrigo Eduardo Hernández Morales", carnet: "9990172692" },
    { nombre: "Guillermo Rene Medinilla Hernández", carnet: "999017289" },
    { nombre: "Alfredo Rafael Palencia García", carnet: "999000393" },
    { nombre: "Paula Gabriela Yuc Sánchez", carnet: "999017758" },
  ];
  
  export default function EquipoPage() {
    return (
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Equipo</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Nuestro equipo multidisciplinario de la Maestría en Ingeniería para la Industria — especialidad en Ciencias de la Computación.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrantes.map((p) => (
              <div key={p.nombre} className="rounded-2xl p-6 border bg-white border-slate-200 shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">{p.nombre.split(" ")[0][0]}</div>
                <h3 className="mt-3 font-semibold">{p.nombre}</h3>
                <p className="text-sm text-slate-600">Identificacion: {p.carnet}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }