export default function DashboardMockup() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />
      <div className="w-full overflow-hidden rounded-2xl border bg-white shadow-2xl">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 border-b bg-gray-50 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs text-gray-400">DataInsight · Dashboard de Vendas</span>
        </div>

        <div className="p-4">
          {/* KPI cards row */}
          <div className="mb-4 grid grid-cols-3 gap-3">
            {[
              { label: 'Receita Total', value: 'R$284k', change: '+12%', up: true },
              { label: 'Novos Clientes', value: '1.429', change: '+8%', up: true },
              { label: 'Ticket Médio', value: 'R$1.987', change: '-3%', up: false },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-lg border bg-gray-50 p-2.5">
                <p className="mb-1 text-[10px] text-gray-500">{kpi.label}</p>
                <p className="text-sm font-bold text-gray-800">{kpi.value}</p>
                <p className={`text-[10px] font-medium ${kpi.up ? 'text-green-600' : 'text-red-500'}`}>
                  {kpi.change} vs mês ant.
                </p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-5 gap-3">
            {/* Bar chart */}
            <div className="col-span-3 rounded-lg border bg-gray-50 p-3">
              <p className="mb-3 text-[10px] font-semibold text-gray-600">Vendas por Mês</p>
              <svg viewBox="0 0 200 80" className="w-full">
                {/* Grid lines */}
                {[20, 40, 60].map((y) => (
                  <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
                ))}
                {/* Bars */}
                {[
                  { x: 10, h: 45, label: 'Jul' },
                  { x: 38, h: 55, label: 'Ago' },
                  { x: 66, h: 38, label: 'Set' },
                  { x: 94, h: 62, label: 'Out' },
                  { x: 122, h: 50, label: 'Nov' },
                  { x: 150, h: 72, label: 'Dez' },
                ].map((bar) => (
                  <g key={bar.label}>
                    <rect
                      x={bar.x}
                      y={80 - bar.h}
                      width="18"
                      height={bar.h}
                      rx="2"
                      fill="hsl(221, 83%, 40%)"
                      opacity="0.85"
                    />
                    <text x={bar.x + 9} y="78" textAnchor="middle" fontSize="6" fill="#9ca3af">
                      {bar.label}
                    </text>
                  </g>
                ))}
                {/* Trend line */}
                <polyline
                  points="19,35 47,25 75,42 103,18 131,30 159,8"
                  fill="none"
                  stroke="hsl(221,83%,65%)"
                  strokeWidth="1.5"
                  strokeDasharray="3 1"
                />
              </svg>
            </div>

            {/* Donut chart */}
            <div className="col-span-2 rounded-lg border bg-gray-50 p-3">
              <p className="mb-3 text-[10px] font-semibold text-gray-600">Canal de Vendas</p>
              <svg viewBox="0 0 80 80" className="mx-auto w-2/3">
                {/* Donut segments */}
                <circle cx="40" cy="40" r="28" fill="none" stroke="hsl(221,83%,40%)" strokeWidth="14"
                  strokeDasharray="63 105" strokeDashoffset="0" />
                <circle cx="40" cy="40" r="28" fill="none" stroke="hsl(221,83%,65%)" strokeWidth="14"
                  strokeDasharray="42 105" strokeDashoffset="-63" />
                <circle cx="40" cy="40" r="28" fill="none" stroke="#e5e7eb" strokeWidth="14"
                  strokeDasharray="44 105" strokeDashoffset="-105" />
                <text x="40" y="44" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1f2937">60%</text>
              </svg>
              <div className="mt-2 flex flex-col gap-1">
                {[
                  { color: 'hsl(221,83%,40%)', label: 'Direto 60%' },
                  { color: 'hsl(221,83%,65%)', label: 'Parceiros 25%' },
                  { color: '#e5e7eb', label: 'Online 15%' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full" style={{ background: item.color }} />
                    <span className="text-[9px] text-gray-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
