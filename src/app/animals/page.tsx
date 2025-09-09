import Link from 'next/link'

// TODO: Fetch animals from Supabase
const animals = [
  { id: 'baron', name: 'Барон', age: '3 года', gender: 'мальчик', status: 'ready', tags: ['Активный', 'Умный', 'Крупный'], description: 'Благородный и умный пес, который обожает долгие прогулки и уже научился играть с мячиком.', image: '🐕' },
  { id: 'lada', name: 'Лада', age: '2 года', gender: 'девочка', status: 'adapting', tags: ['Ласковая', 'Спокойная', 'Средняя'], description: 'Нежная и ласковая девочка, которая каждый день открывает для себя радости мирной жизни.', image: '🐕‍🦺' },
  { id: 'rex', name: 'Рекс', age: '5 лет', gender: 'мальчик', status: 'special', tags: ['Мудрый', 'Спокойный', 'Крупный'], description: 'Мудрый и спокойный пес, который будет идеальным компаньоном для тихих семей.', image: '🦮' },
  { id: 'maya', name: 'Майя', age: '1 год', gender: 'девочка', status: 'ready', tags: ['Игривая', 'Энергичная', 'Маленькая'], description: 'Молодая и жизнерадостная собачка, которая готова стать лучшим другом для активной семьи.', image: '🐶' },
  { id: 'graf', name: 'Граф', age: '4 года', gender: 'мальчик', status: 'adapting', tags: ['Благородный', 'Осторожный', 'Средний'], description: 'Элегантный пес с аристократическими манерами. Постепенно учится доверять людям.', image: '🐕‍🦺' },
  { id: 'bella', name: 'Белла', age: '3 года', gender: 'девочка', status: 'ready', tags: ['Дружелюбная', 'Общительная', 'Средняя'], description: 'Социальная и дружелюбная собака, которая легко находит общий язык с людьми и другими животными.', image: '🐕' },
];

const statusStyles: { [key: string]: string } = {
  ready: 'bg-green-100 text-green-800',
  adapting: 'bg-yellow-100 text-yellow-800',
  special: 'bg-purple-100 text-purple-800',
};

const statusText: { [key: string]: string } = {
  ready: '🟢 Готов к семье',
  adapting: '🟡 Адаптируется',
  special: '🟣 Особые потребности',
};

const Select = ({ label, options }: { label: string, options: string[] }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary">
      {options.map(option => <option key={option}>{option}</option>)}
    </select>
  </div>
);

const AnimalCard = ({ animal }: { animal: typeof animals[0] }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-5xl relative">
      {animal.image}
      <div className={`absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-full text-white ${statusStyles[animal.status]}`}>
        {statusText[animal.status]}
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{animal.name}</h3>
          <p className="text-sm text-gray-500">{`${animal.age}, ${animal.gender}`}</p>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"></path></svg>
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {animal.tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">{tag}</span>
        ))}
      </div>
      <p className="text-sm text-gray-700 mb-4 h-10">{animal.description}</p>
      <div className="flex gap-3">
        <Link href={`/animals/${animal.id}`} className="flex-1 text-center px-4 py-2 bg-primary text-white font-semibold rounded-full hover:bg-opacity-90 transition">
          Узнать больше
        </Link>
        <button className="flex-1 text-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition">
          В избранное
        </button>
      </div>
    </div>
  </div>
);

export default function AnimalsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Главная</Link>
            <span>/</span>
            <span>Наши животные</span>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">Найдено: {animals.length} животных</p>
            <button className="px-4 py-2 text-sm font-medium text-secondary border border-secondary rounded-md hover:bg-secondary hover:text-white transition">
              Фильтры
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Select label="Статус" options={['Все статусы', 'Готов к семье', 'Адаптируется', 'Особые потребности']} />
            <Select label="Возраст" options={['Любой возраст', 'Щенок', 'Молодой', 'Взрослый', 'Пожилой']} />
            <Select label="Размер" options={['Любой размер', 'Маленький', 'Средний', 'Крупный']} />
            <Select label="Пол" options={['Любой', 'Мальчик', 'Девочка']} />
          </div>
        </div>
      </section>

      {/* Animals Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map(animal => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 border border-gray-200 rounded-md cursor-not-allowed">
              ← Предыдущая
            </button>
            <button className="px-4 py-2 text-sm font-medium text-secondary bg-white border-2 border-secondary rounded-md shadow-sm">
              1
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Следующая →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
