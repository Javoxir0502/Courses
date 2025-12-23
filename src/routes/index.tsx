import { component$ } from '@builder.io/qwik';
import { Navbar } from '~/components/navbar/navbar';
import { Hero } from '~/components/hero/hero';
import { Footer } from '~/components/footer/footer';
import { Features } from '~/components/features';
import { Stats } from '~/components/stats';
import { CTA } from '~/components/CTA';


export default component$(() => {
  return (
    <div class="min-h-screen bg-[#020617] selection:bg-blue-500/30">
      {/* Orqa fon effektlari */}
      <div class="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main class="relative z-10">
        <Hero />
        <Stats />
        
        {/* Kurslar ro'yxati shu yerga qo'shiladi */}
        <div id="courses" class="py-20">
           <div class="text-center mb-16">
              <h2 class="text-4xl font-bold text-white mb-4">Ommabop Kurslar</h2>
              <p class="text-slate-400">Eng ko'p o'rganilayotgan yo'nalishlar</p>
           </div>
           {/* CourseCard laringiz shu yerda grid ichida bo'ladi */}
        </div>

        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
});