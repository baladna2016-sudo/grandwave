export default function Footer() {
  return (
    <footer className="py-8 bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* اللوجو */}
          <p className="text-sm font-bold tracking-tight text-white order-2 md:order-1">
            GRANDWAVEWEB<sup className="text- ml-0.5">TM</sup><span className="text-blue-500">.</span>
          </p>

          {/* الحقوق */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-sm order-1 md:order-2">

            <p className="text-slate-300 flex items-center gap-1.5">
              <span className="text-slate-500">©</span> 2026
              <span className="font-bold text-white tracking-widest flex items-center">
                GRANDWAVEWEB
                <sup className="text- ml-0.5 font-normal -top-1 relative">TM</sup>
              </span>
            </p>

            <span className="hidden sm:block w-px h-4 bg-white/15"></span>

            <p className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
              <span>تصميم الموقع بواسطة GRANDWAVEWEB™</span>
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span className="flex items-center gap-1">
                صُنع بـ <span className="text-red-500">❤️</span> في مصر
              </span>
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}