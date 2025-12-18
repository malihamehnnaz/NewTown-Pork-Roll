import { Phone, Mail, Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900">
        {/* Top Bar */}
        <div className="bg-npr-red text-white py-2 px-4 text-center text-sm font-medium">
          <a href="https://maps.app.goo.gl/D1t7ksgwHjSS6iV38" target="_blank" rel="noopener noreferrer" className="hover:underline">
            207 King St, Newtown NSW 2042
          </a>
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              <div className="flex-shrink-0">
                <Link to="/" aria-label="Newtown Pork Roll">
                  <img src="/logo.png" alt="Newtown Pork Roll" className="h-16 md:h-24 object-contain" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <Link to="/" className="text-gray-800 hover:text-npr-red transition-colors font-bold uppercase text-sm tracking-widest">Home</Link>
                  <Link to="/menu" className="text-gray-800 hover:text-npr-red transition-colors font-bold uppercase text-sm tracking-widest">Menu</Link>
                  <Link to="/about" className="text-gray-800 hover:text-npr-red transition-colors font-bold uppercase text-sm tracking-widest">About</Link>
                  <Link to="/contact" className="text-gray-800 hover:text-npr-red transition-colors font-bold uppercase text-sm tracking-widest">Contact</Link>
                  <a 
                    href="https://www.ubereats.com/au/store/newtown-pork-roll-surry-hills/VB5cvYN2TSSh3vhskY1ORA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer / Contact */}
        <footer className="bg-gray-900 text-white pt-20 pb-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Brand */}
              <div className="space-y-6">
              <img src="/logo.png" alt="Logo" className="h-20 object-contain" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Authentic Vietnamese street food in the heart of Newtown. Tradition, passion, and love in every roll.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-npr-red hover:text-white transition-all">
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.facebook.com/newtownrolls/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-npr-red hover:text-white transition-all">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-npr-red hover:text-white transition-all">
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Menu</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li><Link to="/menu" className="hover:text-npr-red transition-colors">Banh Mi</Link></li>
                  <li><Link to="/menu" className="hover:text-npr-red transition-colors">Spring Rolls</Link></li>
                  <li><Link to="/menu" className="hover:text-npr-red transition-colors">Rice Paper Rolls</Link></li>
                  <li><Link to="/menu" className="hover:text-npr-red transition-colors">Vegetarian</Link></li>
                  <li><Link to="/menu" className="hover:text-npr-red transition-colors">Beverages</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Contact</h4>
                <ul className="space-y-4 text-gray-300 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-npr-red mt-0.5 flex-shrink-0" />
                    <span>207 King St, Newtown NSW 2042</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-npr-red flex-shrink-0" />
                    <a href="tel:0414101111" className="hover:text-white">0414 101 111</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-npr-red flex-shrink-0" />
                    <a href="mailto:newtownporkroll@gmail.com" className="hover:text-white">newtownporkroll@gmail.com</a>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Opening Hours</h4>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex justify-between">
                    <span>Mon - Sun</span>
                    <span className="font-bold text-white">9:00 am - 6:00 pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Public Holidays</span>
                    <span className="text-npr-red font-bold">Open</span>
                  </li>
                </ul>
                <a 
                  href="https://www.ubereats.com/au/store/newtown-pork-roll-surry-hills/VB5cvYN2TSSh3vhskY1ORA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 block w-full bg-npr-red text-white text-center py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors"
                >
                  Order on Uber Eats
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
              <p>© {new Date().getFullYear()} Newtown Pork Roll. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
