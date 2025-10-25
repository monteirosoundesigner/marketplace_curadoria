import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';

export default function Header({ onSearch, cartCount }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-dark text-white shadow-lg">
      {/* Top bar */}
      <div className="bg-dark border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">⚡</div>
            <h1 className="text-2xl font-bold">MarketHub</h1>
          </div>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l-lg text-dark focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-yellow-600 px-6 py-2 rounded-r-lg font-semibold transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Right menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
              <User size={20} />
              <span>Conta</span>
            </button>
            <button className="relative hover:text-primary transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden px-4 pb-3">
          <div className="flex">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 rounded-l-lg text-dark text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-yellow-600 px-4 py-2 rounded-r-lg transition-colors"
            >
              <Search size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation */}
      <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block bg-dark border-t border-gray-700`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row gap-4">
          <a href="#" className="hover:text-primary transition-colors">Eletrônicos</a>
          <a href="#" className="hover:text-primary transition-colors">Moda</a>
          <a href="#" className="hover:text-primary transition-colors">Casa</a>
          <a href="#" className="hover:text-primary transition-colors">Beleza</a>
          <a href="#" className="hover:text-primary transition-colors">Esportes</a>
          <a href="#" className="hover:text-primary transition-colors ml-auto">Seja um Seller</a>
        </div>
      </nav>
    </header>
  );
}

