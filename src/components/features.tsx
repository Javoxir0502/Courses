import { component$ } from "@builder.io/qwik";

export const Features = component$(() => {
  const items = [
    { title: "Sifatli Video", desc: "4K formatdagi darslar va tushunarli tushuntirishlar.", icon: "🎥" },
    { title: "Amaliy Loyihalar", desc: "Har bir kurs oxirida real loyiha yaratasiz.", icon: "💻" },
    { title: "Sertifikat", desc: "Kursni tugatganingizdan so'ng xalqaro sertifikat.", icon: "🎓" },
  ];

  return (
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">Bizning Afzalliklarimiz</h2>
          <div class="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(item => (
            <div class="p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all">
              <div class="text-4xl mb-6">{item.icon}</div>
              <h4 class="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p class="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});