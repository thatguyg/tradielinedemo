'use client';import {useState} from 'react';
function Stat({label,value,sub}){return <div className='bg-gray-50 rounded-xl p-4 border border-gray-200'><div className='text-sm text-gray-500'>{label}</div><div className='text-2xl font-bold'>{value}</div>{sub&&<div className='text-xs text-gray-500 mt-1'>{sub}</div>}</div>}
export default function Portal(){const[tab,setTab]=useState('dashboard');return(<div className='container py-6 grid grid-cols-12 gap-4'>
<aside className='col-span-12 md:col-span-3 lg:col-span-2'><div className='card'>
{['dashboard','numbers','reviews','billing','settings'].map(t=>(<button key={t} onClick={()=>setTab(t)} className={`w-full text-left px-3 py-2 rounded-xl mb-1 hover:bg-gray-50 ${tab===t?'bg-gray-100 font-semibold':''}`}>{t[0].toUpperCase()+t.slice(1)}</button>))}
</div></aside>
<main className='col-span-12 md:col-span-9 lg:col-span-10 space-y-4'>
{tab==='dashboard'&&(<div className='card'><h2 className='font-bold text-xl mb-3'>Today at a glance</h2>
<div className='grid grid-cols-2 md:grid-cols-5 gap-3'><Stat label='Leads today' value={7}/><Stat label='Leads (7d)' value={42}/><Stat label='Answer rate' value={'94%'}/><Stat label='Avg response' value={'2m 13s'}/><Stat label='New reviews (30d)' value={18}/></div></div>)}
{tab==='numbers'&&(<div className='card'><h2 className='font-bold text-xl mb-3'>Virtual numbers</h2><p className='text-sm text-gray-600'>Provision AU numbers via Twilio; route to your mobiles; label by Website/GBP/Ads.</p></div>)}
{tab==='reviews'&&(<div className='card'><h2 className='font-bold text-xl mb-3'>Reviews</h2><p className='text-sm text-gray-600'>Connect Google/Facebook (phase 2). For now, store links & import CSV.</p></div>)}
{tab==='billing'&&(<div className='card'><h2 className='font-bold text-xl mb-3'>Billing</h2><form method='post' action='/api/stripe-portal'><button className='btn btn-primary'>Open Stripe Customer Portal</button></form></div>)}
{tab==='settings'&&(<div className='card'><h2 className='font-bold text-xl mb-3'>Business profile</h2><form className='grid md:grid-cols-2 gap-3 text-sm'>
<label className='grid gap-1'><span>Business name</span><input className='border rounded-lg px-2 py-1' defaultValue={`Ben's Plumbing`}/></label>
<label className='grid gap-1'><span>Notification email</span><input className='border rounded-lg px-2 py-1' defaultValue='jobs@bensplumbing.com.au'/></label>
<label className='grid gap-1 md:col-span-2'><span>Missed-call SMS template</span><textarea className='border rounded-lg px-2 py-1' rows={3} defaultValue={`Hey, it’s Ben’s Plumbing. Sorry we missed you – reply with your suburb + job + preferred time.`}></textarea></label>
<div className='md:col-span-2'><button className='btn btn-primary'>Save changes</button></div></form></div>)}
</main></div>)}