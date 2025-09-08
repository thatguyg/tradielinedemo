'use client';
import { useState } from 'react';
import Link from 'next/link';

function Stat({label,value,sub}){return <div className='bg-gray-50 rounded-xl p-4 border border-gray-200'><div className='text-sm text-gray-500'>{label}</div><div className='text-2xl font-bold'>{value}</div>{sub&&<div className='text-xs text-gray-500 mt-1'>{sub}</div>}</div>}

export default function Portal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tab, setTab] = useState('dashboard');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login for demo purposes
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Portal Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="container flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="font-bold text-2xl text-gray-900">TradieLine</div>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Portal</span>
            </div>
            <Link href="/" className="text-gray-600 hover:text-gray-900">← Back to Main Site</Link>
          </div>
        </header>

        {/* Login Section */}
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="max-w-md w-full">
            <div className="card">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                <p className="text-gray-600">Sign in to your TradieLine portal</p>
                <div className="mt-2 text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                  🌐 This would be portal.tradeline.com.au in production
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link href="#" className="text-sm text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary py-3"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/#trial" className="text-blue-600 hover:text-blue-500 font-medium">
                    Start your free trial
                  </Link>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">Demo Login - Enter any email and password</p>
                  <div className="flex justify-center space-x-4 text-xs text-gray-400">
                    <span>🔒 Secure Login</span>
                    <span>📱 Mobile Friendly</span>
                    <span>⚡ Fast Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Footer */}
        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="container text-center">
            <p className="text-sm text-gray-500">
              &copy; 2025 TradieLine Portal. Secure business management for tradies.
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // Dashboard (logged in state)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portal Header - Logged In */}
      <header className="bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-2xl text-gray-900">TradieLine</div>
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Portal</span>
            <span className="text-sm text-gray-500">Welcome back, Ben's Plumbing</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Main Site</Link>
            <button 
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className='container py-6 grid grid-cols-12 gap-4'>
        <aside className='col-span-12 md:col-span-3 lg:col-span-2'>
          <div className='card'>
            {['dashboard','numbers','reviews','billing','settings'].map(t=>(
              <button 
                key={t} 
                onClick={()=>setTab(t)} 
                className={`w-full text-left px-3 py-2 rounded-xl mb-1 hover:bg-gray-50 ${tab===t?'bg-gray-100 font-semibold':''}`}
              >
                {t[0].toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
        </aside>
        
        <main className='col-span-12 md:col-span-9 lg:col-span-10 space-y-4'>
          {tab==='dashboard'&&(
            <div className='card'>
              <h2 className='font-bold text-xl mb-3'>Today at a glance</h2>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
                <Stat label='Leads today' value={7}/>
                <Stat label='Leads (7d)' value={42}/>
                <Stat label='Answer rate' value={'94%'}/>
                <Stat label='Avg response' value={'2m 13s'}/>
                <Stat label='New reviews (30d)' value={18}/>
              </div>
            </div>
          )}
          {tab==='numbers'&&(
            <div className='card'>
              <h2 className='font-bold text-xl mb-3'>Virtual numbers</h2>
              <p className='text-sm text-gray-600'>Provision AU numbers via Twilio; route to your mobiles; label by Website/GBP/Ads.</p>
            </div>
          )}
          {tab==='reviews'&&(
            <div className='card'>
              <h2 className='font-bold text-xl mb-3'>Reviews</h2>
              <p className='text-sm text-gray-600'>Connect Google/Facebook (phase 2). For now, store links & import CSV.</p>
            </div>
          )}
          {tab==='billing'&&(
            <div className='card'>
              <h2 className='font-bold text-xl mb-3'>Billing</h2>
              <form method='post' action='/api/stripe-portal'>
                <button className='btn btn-primary'>Open Stripe Customer Portal</button>
              </form>
            </div>
          )}
          {tab==='settings'&&(
            <div className='card'>
              <h2 className='font-bold text-xl mb-3'>Business profile</h2>
              <form className='grid md:grid-cols-2 gap-3 text-sm'>
                <label className='grid gap-1'>
                  <span>Business name</span>
                  <input className='border rounded-lg px-2 py-1' defaultValue={`Ben's Plumbing`}/>
                </label>
                <label className='grid gap-1'>
                  <span>Notification email</span>
                  <input className='border rounded-lg px-2 py-1' defaultValue='jobs@bensplumbing.com.au'/>
                </label>
                <label className='grid gap-1 md:col-span-2'>
                  <span>Missed-call SMS template</span>
                  <textarea 
                    className='border rounded-lg px-2 py-1' 
                    rows={3} 
                    defaultValue={`Hey, it's Ben's Plumbing. Sorry we missed you – reply with your suburb + job + preferred time.`}
                  ></textarea>
                </label>
                <div className='md:col-span-2'>
                  <button className='btn btn-primary'>Save changes</button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}