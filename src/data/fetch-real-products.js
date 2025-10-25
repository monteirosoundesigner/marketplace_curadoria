// Script para buscar produtos reais de APIs públicas
// Usando FakeStore API (produtos reais de e-commerce)

async function fetchRealProducts() {
  try {
    // Buscar produtos da FakeStore API
    const response = await fetch('https://fakestoreapi.com/products?limit=50');
    const products = await response.json();
    
    // Transformar dados para nosso formato
    const realProducts = products.map((product, index) => ({
      id: product.id,
      name: product.title,
      price: product.price,
      originalPrice: product.price * 1.2, // Simular desconto
      image: product.image,
      category: product.category,
      rating: product.rating?.rate || 4.5,
      reviews: Math.floor(Math.random() * 500) + 50,
      description: product.description,
      retailer: ['Amazon', 'Mercado Livre', 'Shopee'][index % 3],
      commission: [5, 8, 12][index % 3], // Comissão por retailer
      inStock: true,
      affiliate_url: `https://example.com/product/${product.id}`
    }));
    
    return realProducts;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

// Exportar para uso
export { fetchRealProducts };
