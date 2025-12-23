import { component$ } from "@builder.io/qwik";

export const Stats = component$(() => {
  const stats = [
    { label: "O'quvchilar", value: "15,000+" },
    { label: "Kurslar", value: "120+" },
    { label: "Mentorlar", value: "45+" },
    { label: "Reyting", value: "4.9/5" },
  ];

  return (
    <div class="py-12 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div class="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl text-center group hover:border-blue-500/50 transition-colors">
            <h3 class="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
              {stat.value}
            </h3>
            <p class="text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
});