import { useState, useMemo } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Zap, TrendingUp, Award } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 20000],
    retailer: [],
    minRating: 0,
  });
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');

  const filteredProducts = useMemo(() => {
    let result = products;

    // Search filter
    if (searchQuery) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category.length > 0) {
      result = result.filter(p => filters.category.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    // Retailer filter
    if (filters.retailer.length > 0) {
      result = result.filter(p => filters.retailer.includes(p.retailer));
    }

    // Rating filter
    if (filters.minRating > 0) {
      result = result.filter(p => p.rating >= filters.minRating);
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [searchQuery, filters, sortBy]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} adicionado ao carrinho!`);
  };

  const handleViewDetails = (product) => {
    alert(`Detalhes: ${product.title}\nPreço: R$ ${product.price}\nComissão: ${product.commission}%`);
  };

  return (
    <div className="min-h-screen bg-light">
      <Header onSearch={setSearchQuery} cartCount={cart.length} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-dark to-secondary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={32} className="text-primary" />
            <h2 className="text-4xl font-bold">Bem-vindo ao MarketHub</h2>
          </div>
          <p className="text-xl text-gray-200 mb-6">
            Marketplace de curadoria com os melhores produtos de Amazon, Mercado Livre e Shopee
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white bg-opacity-10 p-4 rounded-lg">
              <TrendingUp className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Maior Comissão</p>
                <p className="text-sm text-gray-300">Até 30% de comissão</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white bg-opacity-10 p-4 rounded-lg">
              <Award className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Produtos Verificados</p>
                <p className="text-sm text-gray-300">Todos os itens são autênticos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white bg-opacity-10 p-4 rounded-lg">
              <Zap className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Entrega Rápida</p>
                <p className="text-sm text-gray-300">Direto dos melhores varejistas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar onFilterChange={setFilters} categories={categories} />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-dark">
                {filteredProducts.length} produtos encontrados
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="relevance">Mais Relevantes</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="rating">Melhor Avaliação</option>
                <option value="newest">Mais Novos</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">Nenhum produto encontrado</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({
                      category: [],
                      priceRange: [0, 20000],
                      retailer: [],
                      minRating: 0,
                    });
                  }}
                  className="btn-primary"
                >
                  Limpar Busca
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Sobre MarketHub</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-primary">Carreiras</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comprador</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Como Comprar</a></li>
                <li><a href="#" className="hover:text-primary">Frete</a></li>
                <li><a href="#" className="hover:text-primary">Devoluções</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Seller</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Seja um Seller</a></li>
                <li><a href="#" className="hover:text-primary">Dashboard</a></li>
                <li><a href="#" className="hover:text-primary">Comissões</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Suporte</a></li>
                <li><a href="#" className="hover:text-primary">Email</a></li>
                <li><a href="#" className="hover:text-primary">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 MarketHub. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

