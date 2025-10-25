import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar({ onFilterChange, categories }) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    retailer: true,
    rating: true,
  });

  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 20000],
    retailer: [],
    minRating: 0,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category];
    
    const newFilters = { ...filters, category: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRetailerChange = (retailer) => {
    const newRetailers = filters.retailer.includes(retailer)
      ? filters.retailer.filter(r => r !== retailer)
      : [...filters.retailer, retailer];
    
    const newFilters = { ...filters, retailer: newRetailers };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    const newFilters = { ...filters, priceRange: [0, newPrice] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating) => {
    const newFilters = { ...filters, minRating: rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <aside className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 h-fit sticky top-24">
      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full font-semibold text-dark mb-3 hover:text-primary"
        >
          Categoria
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.category ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat.name)}
                  onChange={() => handleCategoryChange(cat.name)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">{cat.icon} {cat.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full font-semibold text-dark mb-3 hover:text-primary"
        >
          Preço
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.price && (
          <div>
            <input
              type="range"
              min="0"
              max="20000"
              step="100"
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>R$ 0</span>
              <span>R$ {filters.priceRange[1].toLocaleString('pt-BR')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Retailer Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('retailer')}
          className="flex items-center justify-between w-full font-semibold text-dark mb-3 hover:text-primary"
        >
          Varejista
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.retailer ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.retailer && (
          <div className="space-y-2">
            {['amazon', 'mercadolivre', 'shopee'].map(retailer => (
              <label key={retailer} className="flex items-center gap-2 cursor-pointer hover:text-primary">
                <input
                  type="checkbox"
                  checked={filters.retailer.includes(retailer)}
                  onChange={() => handleRetailerChange(retailer)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">
                  {retailer === 'amazon' ? '🟠 Amazon' : retailer === 'mercadolivre' ? '🟡 Mercado Livre' : '🟢 Shopee'}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full font-semibold text-dark mb-3 hover:text-primary"
        >
          Avaliação
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.rating ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.rating && (
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                onClick={() => handleRatingChange(rating)}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${
                  filters.minRating === rating
                    ? 'bg-primary text-dark font-semibold'
                    : 'hover:bg-light'
                }`}
              >
                {'⭐'.repeat(rating)} {rating}+ estrelas
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setFilters({
            category: [],
            priceRange: [0, 20000],
            retailer: [],
            minRating: 0,
          });
          onFilterChange({
            category: [],
            priceRange: [0, 20000],
            retailer: [],
            minRating: 0,
          });
        }}
        className="w-full btn-outline text-center"
      >
        Limpar Filtros
      </button>
    </aside>
  );
}

