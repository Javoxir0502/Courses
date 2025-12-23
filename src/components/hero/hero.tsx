import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
  return (
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* 1. Orqa fon effektlari (Chuqur va nozik) */}
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 -left-64 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] opacity-30"></div>
        {/* Nozik "Grid" chiziqlari - texnik his beradi */}
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Matn va CTAlar */}
          <div>
            {/* Kichik Badge */}
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Yangi mavsum: Dasturlash 2.0
            </div>

            <h1 class="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Kelajak kasblarini <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400">
                Professional o'rganing.
              </span>
            </h1>
            
            <p class="text-lg text-slate-400 leading-relaxed max-w-xl mb-10">
              Nazariyadan ko'ra amaliyotga asoslangan, industriya yetakchilari tomonidan tayyorlangan premium kurslar platformasi. O'z karyerangizni keyingi bosqichga olib chiqing.
            </p>

            {/* Buttons */}
            <div class="flex flex-wrap items-center gap-4 mb-12">
              <button class="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                Kurslarni boshlash
              </button>
              <button class="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                 Sillabusni ko'rish
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>

            {/* Trust Signals (Logotiplar) */}
            <div>
              <p class="text-sm text-slate-500 font-medium mb-4 uppercase tracking-widest">Bizning bitiruvchilar ishlaydigan kompaniyalar:</p>
              <div class="flex flex-wrap gap-8 opacity-40 grayscale">
                 {/* Placeholder SVGs - O'zingiznikiga almashtiring */}
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" class="h-6 invert" alt="Google" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" class="h-6 invert" alt="IBM" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" class="h-6 invert" alt="Microsoft" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Murakkab Glass Vizualizatsiyasi */}
          <div class="relative hidden lg:block">
            {/* Asosiy "Engine" bloki */}
            <div class="relative z-10 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-1 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
               {/* Ichki Terminal Ko'rinishi */}
               <div class="bg-[#0A0F1C] rounded-[22px] overflow-hidden border border-white/5 h-[500px] relative">
                  {/* Header */}
                  <div class="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                     <div class="flex gap-1.5">
                        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                     </div>
                     <span class="text-xs text-slate-500 ml-4 font-mono">academia-engine — -bash — 80x24</span>
                  </div>
                  {/* Code Content (Fake) */}
                  <div class="p-6 font-mono text-sm text-slate-300/80 space-y-2">
                     <p><span class="text-blue-400">❯</span> <span class="text-green-400">npm</span> install academia-core</p>
                     <p class="text-slate-500">Downloading packages...</p>
                     <div class="h-1 w-64 bg-slate-800 rounded overflow-hidden my-2">
                        <div class="h-full bg-blue-500 w-3/4 animate-pulse"></div>
                     </div>
                     <p><span class="text-blue-400">❯</span> <span class="text-green-400">qwik</span> dev</p>
                     <p class="text-green-300 mt-4">✓ Ready in 248ms</p>
                     <p>  ➜ Local:   <span class="text-blue-400 underline">http://localhost:5173/</span></p>
                     <p class="mt-6 text-slate-500">// O'quv jarayoni analitikasi yuklanmoqda...</p>
                  </div>

                  {/* Floating Element 1 (Progress Chart) */}
                  <div class="absolute top-20 -right-12 w-64 bg-slate-800/60 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-[bounce_6s_ease-in-out_infinite]">
                     <h4 class="text-white text-sm font-bold mb-2">Haftalik Progress</h4>
                     <div class="flex items-end gap-2 h-24">
                        <div class="w-1/5 bg-blue-500/50 h-[40%] rounded-t-md"></div>
                        <div class="w-1/5 bg-blue-500/70 h-[60%] rounded-t-md"></div>
                        <div class="w-1/5 bg-blue-500/40 h-[30%] rounded-t-md"></div>
                        <div class="w-1/5 bg-blue-500/90 h-[80%] rounded-t-md relative">
                           <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">+15%</div>
                        </div>
                        <div class="w-1/5 bg-blue-500/60 h-[50%] rounded-t-md"></div>
                     </div>
                  </div>

                  {/* Floating Element 2 (Certificate Notification) */}
                  <div class="absolute bottom-12 -left-8 bg-slate-800/70 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center gap-4 shadow-xl animate-[bounce_7s_ease-in-out_infinite_reverse]">
                     <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     </div>
                     <div>
                        <h5 class="text-white text-sm font-bold">Sertifikat tayyor!</h5>
                        <p class="text-slate-400 text-xs">Frontend React kursi</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* Vizual orqasidagi glow */}
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
});