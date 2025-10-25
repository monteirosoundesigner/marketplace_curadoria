import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="card bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-light h-48">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-sm">
            -{discount}%
          </div>
        )}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 left-2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
        >
          <Heart
            size={20}
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col h-full">
        {/* Title */}
        <h3
          onClick={() => onViewDetails(product)}
          className="font-semibold text-dark line-clamp-2 hover:text-primary transition-colors mb-2"
        >
          {product.title}
        </h3>

        {/* Category */}
        <p className="text-xs text-gray-500 mb-2">{product.category}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">R$ {product.price.toLocaleString('pt-BR')}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                R$ {product.originalPrice.toLocaleString('pt-BR')}
              </span>
            )}
          </div>
        </div>

        {/* Retailer Badge */}
        <div className="mb-3">
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
            {product.retailer === 'amazon' ? '🟠 Amazon' : product.retailer === 'mercadolivre' ? '🟡 Mercado Livre' : '🟢 Shopee'}
          </span>
        </div>

        {/* Commission Badge */}
        <div className="mb-4 text-xs text-green-600 font-semibold">
          💰 {product.commission}% de comissão
        </div>

        {/* Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="mt-auto btn-primary w-full flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

