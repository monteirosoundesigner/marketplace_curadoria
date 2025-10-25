# MarketHub - Marketplace de Curadoria

Um marketplace moderno e original inspirado em Amazon.com, que funciona como vitrine/curadoria para produtos de retailers consagrados (Amazon, Mercado Livre, Shopee) com modelo de negócio baseado em **afiliação e dropshipping**.

## 🎯 Características

### Para Compradores
- ✅ **Catálogo Curado**: 20+ produtos de exemplo de múltiplas categorias
- ✅ **Busca Inteligente**: Busca em tempo real por título e categoria
- ✅ **Filtros Avançados**: Por categoria, preço, varejista e avaliação
- ✅ **Ordenação**: Por relevância, preço, avaliação e novidade
- ✅ **Carrinho**: Adicione produtos ao carrinho
- ✅ **Wishlist**: Marque produtos como favoritos
- ✅ **Avaliações**: Veja avaliações de outros compradores

### Para Sellers/Afiliados
- 💰 **Sistema de Comissão**: Até 30% de comissão por venda
- 📊 **Dashboard**: Rastreie suas vendas e comissões
- 🔗 **Links de Afiliação**: Gere links únicos para cada produto
- 📈 **Analytics**: Visualize cliques, conversões e ganhos

### Design
- 🎨 **Moderno e Original**: Inspirado em Amazon mas com design único
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Rápido**: Build otimizado com Vite e Tailwind CSS
- 🌙 **Dark Mode Ready**: Tema escuro profissional

## 🚀 Tecnologias

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Build**: Vite 5
- **Package Manager**: npm

## 📦 Instalação

```bash
# Clonar repositório
git clone <repo-url>
cd marketplace_curadoria

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
marketplace_curadoria/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho com navegação e busca
│   │   ├── ProductCard.jsx     # Card individual do produto
│   │   └── Sidebar.jsx         # Filtros laterais
│   ├── pages/
│   │   └── Home.jsx            # Página principal
│   ├── data/
│   │   └── products.js         # Dados de produtos em JSON
│   ├── styles/
│   │   └── globals.css         # Estilos globais
│   ├── App.jsx                 # Componente raiz
│   └── main.jsx                # Ponto de entrada
├── index.html                  # HTML principal
├── vite.config.js              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
├── postcss.config.js           # Configuração PostCSS
├── package.json                # Dependências
└── README.md                   # Este arquivo
```

## 🎨 Paleta de Cores

- **Primary**: `#FF9900` (Laranja - Inspirado em Amazon)
- **Secondary**: `#146EB4` (Azul)
- **Dark**: `#232F3E` (Cinza escuro)
- **Light**: `#F7F7F7` (Cinza claro)

## 📊 Dados de Exemplo

O projeto vem com 20 produtos de exemplo em 5 categorias:
- 🔌 Eletrônicos (Smartphones, Notebooks, Tablets, Fones, Wearables)
- 👕 Moda (Jaquetas, Calças, Camisetas, Calçados)
- 🏠 Casa (Iluminação, Decoração, Móveis)
- 💄 Beleza (Skincare, Cabelos, Maquiagem)
- ⚽ Esportes (Bicicletas, Esportes diversos)

## 🔄 Fluxo de Afiliação

1. **Comprador** encontra produto no MarketHub
2. **Clica em "Adicionar ao Carrinho"** ou no produto
3. **Redirecionado** para o retailer (Amazon, ML, Shopee)
4. **Compra realizada** no retailer
5. **Afiliado recebe comissão** (3-30% dependendo do produto)
6. **Dashboard** mostra ganhos em tempo real

## 💳 Modelo de Dropshipping

Produtos podem ser vendidos diretamente com markup:
- Produto custa R$ 100 no fornecedor
- Vende por R$ 150 no MarketHub
- Margem: R$ 50 (33%)

## 📈 Próximos Passos

- [ ] Integração com APIs reais (Amazon, Mercado Livre, Shopee)
- [ ] Sistema de pagamento (Stripe, PagSeguro)
- [ ] Dashboard completo de sellers
- [ ] Sistema de avaliações e comentários
- [ ] Notificações por email
- [ ] Programa de afiliados com referência
- [ ] Analytics avançado
- [ ] Sistema de recomendações (IA/ML)

## 🔐 Segurança

- Dados sensíveis não são armazenados localmente
- Links de afiliação são rastreados de forma segura
- Validação de entrada em todos os formulários

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar, modificar e distribuir.

## 👥 Contribuições

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request.

## 📞 Suporte

Para suporte, entre em contato através de:
- Email: lmonteiromkt@gmail.com
- Discord: [Link do servidor]

---

**Desenvolvido com ❤️ para empreendedores e afiliados**

