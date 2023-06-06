import Link from 'next/link';

export default function Home() {
  return (
    <main className='h-screen w-screen bg-black flex justify-center items-center text-white'>
      <div className='w-3/4 text-center'>
        <h1 className='text-6xl font-semibold mb-5'>
          SNXTL Template <span className='animate-pulse'>🔥</span>
        </h1>
        <p className='mb-5 text-2xl'>
          Blending Next.js, Tailwind CSS, TypeScript, and Sanity.
        </p>
        <Link href='/admin' className='text-red-500 text-2xl'>
          Jump to your sanity studio 🏃‍♂️
        </Link>
      </div>
    </main>
  );
}
