import Image from 'next/image'

export default function Home() {
  return (
    <div className='dark:bg-stone-900 min-h-screen'>
    <nav className='flex justify-between p-6'>
      <Image src="/logo.svg" alt="barkin" width={63} height={51} className='dark:invert' />
      <ul className='flex text-white font-medium space-x-4'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Preços</a></li>
      </ul>
    </nav>
    <main className='flex'>
    <div className="flex flex-col items-start p-24 w-2/5 dark:text-white space-y-4">
        <h1 className='text-4xl font-bold prose dark:prose-invert'>Tenha a segurança sob controle</h1>
        <p>Tenha automação 24h na sua empresa trazendo segurança onde você precisa</p>
        <button className='bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded'>Comece a usar</button>
    </div>
    <Image src="/parking.jpg" alt="estacionamento" width={700} height={430} />
    </main>
    </div>
  )
}
