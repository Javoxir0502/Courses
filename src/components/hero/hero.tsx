import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
  return (
    <section class="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      <div class="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Matn qismi */}
        <div class="lg:w-1/2 text-left z-10">
          <span class="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Yangi davr ta'limi
          </span>
          <h1 class="text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
            Kelajakni <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Bugun Quramiz
            </span>
          </h1>
          <p class="text-lg text-slate-400 mb-10 max-w-xl">
            Siz uchun eng kerakli va zamonaviy texnologiyalarni mutaxassislardan o'rganing. 
            Kurslarimiz amaliy loyihalarga asoslangan.
          </p>
          <div class="flex flex-wrap gap-4">
            <button class="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25">
              Kurslarni ko'rish
            </button>
            <button class="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
              Demo dars
            </button>
          </div>
        </div>

        {/* Vizual qism (Glassmorphism Card) */}
        <div class="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div class="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div class="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
             <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white">JS</div>
                <div>
                  <h4 class="text-white font-bold">JavaScript Masterclass</h4>
                  <p class="text-white/40 text-sm">24 ta dars • 12 soat</p>
                </div>
             </div>
             <div class="space-y-4">
                <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div class="w-3/4 h-full bg-blue-500"></div>
                </div>
                <div class="flex justify-between text-xs text-white/60">
                  <span>Progress: 75%</span>
                  <span>Dars 18/24</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
});