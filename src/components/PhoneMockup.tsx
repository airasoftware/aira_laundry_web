const TAB_ITEMS = [
  { label: "Beranda", active: true },
  { label: "Pesanan", active: false },
  { label: "Voucher", active: false },
  { label: "Akun", active: false },
];

const ORDER_ROWS = [
  { title: "Cuci + Setrika · 5kg", value: "Rp 45.000", accent: "bg-ocean" },
  { title: "Outlet", value: "Aira Laundry - Kemang", accent: "bg-mint" },
  { title: "Kurir", value: "Budi S.", accent: "bg-ocean" },
];

export default function PhoneMockup() {
  return (
    <div className="mx-auto w-[220px] sm:w-[280px] lg:w-[300px]">
      <div
        className="relative overflow-hidden rounded-[38px] bg-[#F2F2F7] sm:rounded-[44px] lg:rounded-[48px]"
        style={{
          aspectRatio: "402 / 874",
          boxShadow: "0 30px 60px rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.12)",
        }}
      >
        <div className="absolute left-1/2 top-[3%] z-20 h-[4%] w-[31%] -translate-x-1/2 rounded-full bg-black" />

        <div className="flex h-full flex-col pt-[7%]">
          <div className="flex items-center justify-between px-[6%] pb-1 text-[10px] font-semibold text-black sm:text-xs">
            <span>9:41</span>
            <span className="text-[9px] opacity-50 sm:text-[10px]">
              ●●● LTE
            </span>
          </div>

          <div className="px-[6%] pb-1 pt-2 text-lg font-bold text-black sm:text-xl">
            Pesanan
          </div>

          <div className="flex-1 overflow-hidden px-[6%] pb-3 pt-1">
            <div className="mb-3 rounded-2xl bg-tint p-3">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ocean sm:h-9 sm:w-9">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-white" />
                </span>
                <div>
                  <p className="text-[11px] font-extrabold text-ink sm:text-[13px]">
                    Sedang Dicuci
                  </p>
                  <p className="text-[9px] text-muted sm:text-[10.5px]">
                    Estimasi selesai 18.00 hari ini
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-ocean" />
                <span className="h-[2px] flex-1 bg-ocean" />
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-mint" />
                <span className="h-[2px] flex-1 bg-line" />
                <span className="h-2 w-2 flex-shrink-0 rounded-full border-2 border-line bg-white" />
                <span className="h-[2px] flex-1 bg-line" />
                <span className="h-2 w-2 flex-shrink-0 rounded-full border-2 border-line bg-white" />
              </div>
              <div className="mt-1.5 flex justify-between text-[7px] text-muted sm:text-[8.5px]">
                <span>Dijemput</span>
                <span>Dicuci</span>
                <span>Selesai</span>
                <span>Diantar</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              {ORDER_ROWS.map((row, i) => (
                <div
                  key={row.title}
                  className={`flex items-center gap-2 px-3 py-2.5 ${
                    i < ORDER_ROWS.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span
                    className={`h-5 w-5 flex-shrink-0 rounded-md sm:h-6 sm:w-6 ${row.accent}`}
                  />
                  <span className="flex-1 truncate text-[9.5px] text-ink sm:text-[11px]">
                    {row.title}
                  </span>
                  <span className="text-[9.5px] font-semibold text-ink sm:text-[11px]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-around border-t border-line bg-white px-2 py-2">
            {TAB_ITEMS.map((tab) => (
              <div
                key={tab.label}
                className="flex flex-col items-center gap-1"
              >
                <span
                  className={`h-3.5 w-3.5 rounded-[5px] ${
                    tab.active ? "bg-ocean" : "bg-line"
                  }`}
                />
                <span
                  className={`text-[7px] font-semibold sm:text-[8px] ${
                    tab.active ? "text-ocean" : "text-muted"
                  }`}
                >
                  {tab.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[1%] left-1/2 h-[0.6%] w-[35%] -translate-x-1/2 rounded-full bg-black/25" />
      </div>
    </div>
  );
}
