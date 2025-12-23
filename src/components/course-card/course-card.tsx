import { component$ } from '@builder.io/qwik';

interface CourseProps {
  title: string;
  author: string;
  price: string;
  image: string;
}

export const CourseCard = component$((props: CourseProps) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={props.image} alt={props.title} class="w-full h-48 object-cover" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
        <p class="mb-3 font-normal text-gray-700">Muallif: {props.author}</p>
        <div class="flex items-center justify-between">
          <span class="text-xl font-bold text-blue-600">{props.price}</span>
          <button class="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Batafsil
          </button>
        </div>
      </div>
    </div>
  );
});