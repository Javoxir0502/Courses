import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="mt-20 px-6 pb-10">
      <div class="max-w-7xl mx-auto p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl text-white">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div class="col-span-1 md:col-span-1">
            <h2 class="text-2xl font-bold mb-4">EDUKA</h2>
            <p class="text-white/60 leading-relaxed">
              Kelajak ko'nikmalarini bugun o'rganing. Eng yaxshi mentorlar va sifatli ta'lim.
            </p>
          </div>
          
          <div>
            <h4 class="font-bold mb-4 text-blue-400">Platforma</h4>
            <ul class="space-y-2 text-white/70">
              <li><a href="#" class="hover:text-white">Kurslar</a></li>
              <li><a href="#" class="hover:text-white">Imtihonlar</a></li>
              <li><a href="#" class="hover:text-white">Sertifikatlar</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4 text-blue-400">Kompaniya</h4>
            <ul class="space-y-2 text-white/70">
              <li><a href="#" class="hover:text-white">Biz haqimizda</a></li>
              <li><a href="#" class="hover:text-white">Vakansiyalar</a></li>
              <li><a href="#" class="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4 text-blue-400">Bog'lanish</h4>
            <p class="text-white/70">Toshkent, O'zbekiston</p>
            <p class="text-white/70">info@eduka.uz</p>
          </div>
        </div>
        
        <div class="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-sm">
          © 2024 Eduka Platform. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
});