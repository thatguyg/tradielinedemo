import Link from 'next/link';import './globals.css';
export default function Home(){return(<main className='container py-10 space-y-8'>
<section className='card'><h1 className='text-3xl font-extrabold'>TradieLine</h1>
<p className='text-gray-600'>AI call-handling and review booster for tradies.</p>
<div className='mt-4 flex gap-2'><Link className='btn btn-primary' href='/portal'>Open Portal</Link>
<Link className='btn' href='/docs'>Docs</Link></div></section></main>)}