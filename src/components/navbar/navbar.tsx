import { component$ } from '@builder.io/qwik';

export const Navbar = component$(() => {
  return (
    <nav class="fixed top-0 w-full z-50 px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 
                  bg-white/10 backdrop-blur-md border border-white/20 
                  rounded-2xl shadow-lg">
        {/* Logo */}
        <div class="text-2xl font-black text-white tracking-tighter">
          ED<span class="text-blue-400">UKA</span>
        </div>

        {/* Links */}
        <ul class="hidden md:flex space-x-8 text-white/90 font-medium">
          <li><a href="#" class="hover:text-blue-400 transition-colors">Kurslar</a></li>
          <li><a href="#" class="hover:text-blue-400 transition-colors">Mentorlar</a></li>
          <li><a href="#" class="hover:text-blue-400 transition-colors">Biz haqimizda</a></li>
        </ul>

        {/* Action Button */}
        <div class="flex items-center gap-4">
          <button class="text-white font-medium hover:text-blue-400 transition-colors">Kirish</button>
          <button class="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl 
                         font-semibold transition-all shadow-lg shadow-blue-500/30">
            Boshlash
          </button>
        </div>
      </div>
    </nav>
  );
});