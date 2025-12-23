import { component$, useSignal } from '@builder.io/qwik';

export const Navbar = component$(() => {
  const isMobileMenuOpen = useSignal(false);

  return (
    <nav class="fixed top-0 w-full z-[100] px-4 py-5">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-8 py-3 
                  bg-slate-900/40 backdrop-blur-2xl border border-white/10 
                  rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
        
        {/* 1. Logo: Jiddiy va minimalist */}
        <div class="flex items-center gap-2 group cursor-pointer">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span class="text-white font-bold text-xl">A</span>
          </div>
          <span class="text-xl font-semibold tracking-tight text-white uppercase">
            Academia<span class="text-blue-500">.</span>
          </span>
        </div>

        {/* 2. Desktop Navigation: Toza va spacing to'g'ri berilgan */}
        <ul class="hidden lg:flex items-center gap-10 text-[15px] font-medium text-slate-300">
          <li>
            <a href="#" class="hover:text-white transition-all duration-300 relative group">
              Kurslar
              <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-all duration-300">Mentorlar</a>
          </li>
          <li class="relative group">
            <button class="flex items-center gap-1 hover:text-white transition-all">
              Yo'nalishlar
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown (Jiddiy uslubda) */}
            <div class="absolute top-full left-0 mt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-2xl">
              <a href="#" class="block px-4 py-2 hover:bg-white/5 rounded-lg text-sm text-slate-400 hover:text-white">Dasturlash</a>
              <a href="#" class="block px-4 py-2 hover:bg-white/5 rounded-lg text-sm text-slate-400 hover:text-white">Biznes</a>
              <a href="#" class="block px-4 py-2 hover:bg-white/5 rounded-lg text-sm text-slate-400 hover:text-white">Marketing</a>
            </div>
          </li>
          <li>
            <a href="#" class="hover:text-white transition-all duration-300">Narxlar</a>
          </li>
        </ul>

        {/* 3. Actions: Qidiruv va Kirish */}
        <div class="hidden md:flex items-center gap-6">
          <div class="relative group">
            <input 
              type="text" 
              placeholder="Qidirish..." 
              class="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500/50 w-32 focus:w-48 transition-all duration-300" 
            />
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 absolute right-3 top-2.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <button class="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
            Kirish
          </button>
          <button class="bg-white text-slate-900 px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-500 hover:text-white transition-all duration-300">
            Ro'yxatdan o'tish
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          class="lg:hidden text-white" 
          onClick$={() => (isMobileMenuOpen.value = !isMobileMenuOpen.value)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen.value && (
        <div class="absolute top-24 left-4 right-4 bg-slate-900 border border-white/10 p-6 rounded-2xl lg:hidden animate-in fade-in zoom-in duration-300">
          <ul class="flex flex-col gap-6 text-white font-medium">
            <li><a href="#">Kurslar</a></li>
            <li><a href="#">Mentorlar</a></li>
            <li><a href="#">Yo'nalishlar</a></li>
            <hr class="border-white/5" />
            <button class="w-full bg-blue-600 py-3 rounded-xl font-bold">Boshlash</button>
          </ul>
        </div>
      )}
    </nav>
  );
});