import { component$ } from "@builder.io/qwik";

export const CTA = component$(() => {
  return (
    <section class="py-20 px-6">
      <div class="max-w-5xl mx-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center shadow-2xl shadow-blue-500/20">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Tayyormisiz? Hoziroq boshlang!</h2>
          <p class="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
            Birinchi darsni bepul ko'ring va o'zingiz baho bering. Ro'yxatdan o'tish 1 daqiqa vaqt oladi.
          </p>
          <button class="px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Bepul Ro'yxatdan O'tish
          </button>
        </div>
      </div>
    </section>
  );
});