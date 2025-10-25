import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import realProducts from '../data/real-products.json';

export default function Home() {
  const [products, setProducts] = useState(realProducts);
  const [filteredProducts, setFilteredProducts] = useState(realProducts);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [sortBy, setSortBy] = useState('relevancia');

  // Filtrar produtos
  useEffect(() => {
    let filtered = products;

    // Filtro por categoria
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filtro por preço
    filtered = filtered.filter(p => 
      parseFloat(p.price) >= priceRange[0] && parseFloat(p.price) <= priceRange[1]
    );

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenação
    switch(sortBy) {
      case 'preco-asc':
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'preco-desc':
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'avaliacao':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'novidade':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange, searchTerm, sortBy]);

  const categories = ['Todos', ...new Set(products.map(p => p.category))];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} adicionado ao carrinho!`);
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        cartCount={cart.length}
      />

      <div className="flex">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceChange={setPriceRange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'Todos' ? 'Todos os Produtos' : selectedCategory}
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredProducts.length} produtos encontrados
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onToggleWishlist={toggleWishlist}
                    isInWishlist={wishlist.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
