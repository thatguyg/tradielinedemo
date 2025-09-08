import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="font-bold text-2xl text-gray-900">TradieLine</div>
          <nav className="flex items-center gap-6">
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <Link href="/portal" className="btn btn-primary">Portal Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Never Miss a Call.<br />Win More Jobs.<br />Get More Reviews.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            TradieLine answers your calls, captures job details, and gets you 5-star reviews — all while you're on the tools.
          </p>
          <Link href="#trial" className="btn btn-primary text-lg px-8 py-4 inline-block">
            Start Free Trial
          </Link>
          <div className="mt-12 bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="text-gray-600 text-sm mb-4">📞 Tradie on the tools, missing a phone call → phone answers itself</p>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <span className="text-sm text-gray-500">[Hero illustration placeholder: Tradie working, phone ringing, AI system answering]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Missing calls = missed money.</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">80% of customers call someone else if you don't answer.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">Tradies lose thousands every year in missed work.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">Your reviews are the new word of mouth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Three steps to more jobs:</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Call comes in</h3>
              <p className="text-gray-600">We answer if you're busy on the tools</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer gets quick text</h3>
              <p className="text-gray-600">They send job details via SMS</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold mb-3">You get the lead</h3>
              <p className="text-gray-600">Plus a ready-to-go review request</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="#trial" className="btn btn-primary text-lg px-8 py-4">Get Started Free</Link>
          </div>
        </div>
      </section>

      {/* Benefits/Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Everything You Need to Grow</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Never miss a job</h3>
              <p className="text-gray-600">Every call answered, every lead captured</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Win more reviews</h3>
              <p className="text-gray-600">Auto-send review links after every job</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Simple dashboard</h3>
              <p className="text-gray-600">All your leads in one place</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Set & forget</h3>
              <p className="text-gray-600">Automated, no fiddling required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Simple Plans. No lock-in.</h2>
          <p className="text-xl text-center text-gray-600 mb-12">All plans include free setup + 14-day trial</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <h3 className="text-2xl font-bold mb-4">Solo Tradie</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$149<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Unlimited call answering</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> SMS lead capture</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Review automation</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Lead dashboard</li>
              </ul>
              <Link href="#trial" className="btn btn-primary w-full">Claim Free Trial</Link>
            </div>
            <div className="card text-center border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4">Crew</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$249<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Everything in Solo</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Multiple team members</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Advanced reporting</li>
                <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Priority support</li>
              </ul>
              <Link href="#trial" className="btn btn-primary w-full">Claim Free Trial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Loved by Tradies Everywhere</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card text-center mb-8">
              <div className="text-6xl mb-4">"</div>
              <p className="text-xl text-gray-800 mb-6">Since using TradieLine I've stopped losing jobs when I'm on the tools. The system just works - customers get their answers and I get more leads.</p>
              <p className="font-semibold">— Demo Customer, Ben's Plumbing</p>
              <div className="flex justify-center mt-4">
                <div className="flex text-yellow-400">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <span className="text-sm">🔒 Stripe Secure Payments</span>
              <span className="text-sm">⭐ Google Reviews Integration</span>
              <span className="text-sm">📱 SMS via Twilio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">TradieLine</div>
              <p className="text-gray-400">Never miss a call. Win more jobs. Get more reviews.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#pricing">Pricing</Link></li>
                <li><Link href="#features">Features</Link></li>
                <li><Link href="/portal">Portal Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#faq">FAQ</Link></li>
                <li><Link href="#contact">Contact</Link></li>
                <li><Link href="#help">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#terms">Terms</Link></li>
                <li><Link href="#privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TradieLine. All rights reserved.</p>
            <p className="text-sm mt-2">TradieLine is not affiliated with Google. Review features powered by your own Google Business Profile.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}