# 🚀 Guia de Deploy - MarketHub

## Deploy na Plataforma Manus

### Opção 1: Deploy Automático (Recomendado)

1. **Acesse o Dashboard da Manus**
   - Vá para https://manus.im/dashboard
   - Faça login com sua conta

2. **Crie um novo projeto**
   - Clique em "Novo Projeto"
   - Selecione "Marketplace de Curadoria"
   - Escolha o template "React + Vite"

3. **Configure a URL Amigável**
   - Nome do projeto: `markethub` ou seu domínio
   - URL será: `markethub.manus.space` ou seu domínio customizado

4. **Deploy**
   - Clique em "Publicar"
   - Aguarde a compilação (2-3 minutos)
   - Seu marketplace estará online!

### Opção 2: Deploy Manual (Git)

```bash
# 1. Inicializar repositório Git
cd /home/ubuntu/marketplace_curadoria
git init
git add .
git commit -m "Initial commit: MarketHub marketplace"

# 2. Conectar ao repositório remoto
git remote add origin <seu-repo-url>
git push -u origin main

# 3. Conectar à Manus
# Vá para https://manus.im/dashboard
# Selecione "Conectar GitHub"
# Autorize o acesso
# Selecione este repositório
# Clique em "Deploy"
```

### Opção 3: Deploy via Docker

```bash
# 1. Criar Dockerfile
cat > Dockerfile << 'DOCKER'
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
DOCKER

# 2. Build e push
docker build -t markethub:latest .
docker push seu-registry/markethub:latest

# 3. Deploy no Manus
# Vá para https://manus.im/dashboard
# Selecione "Deploy Docker"
# Cole a imagem: seu-registry/markethub:latest
```

## Configuração de Domínio Customizado

### Usar seu próprio domínio

1. **No painel da Manus:**
   - Vá para Configurações → Domínios
   - Clique em "Adicionar Domínio Customizado"
   - Digite seu domínio (ex: markethub.com.br)

2. **No seu registrador de domínio:**
   - Vá para DNS
   - Adicione um registro CNAME:
     ```
     Nome: @
     Tipo: CNAME
     Valor: markethub.manus.space
     ```

3. **Aguarde propagação (até 24 horas)**

## Variáveis de Ambiente

Adicione no painel da Manus → Configurações → Variáveis de Ambiente:

```
VITE_APP_TITLE=MarketHub - Marketplace de Curadoria
VITE_APP_DESCRIPTION=Marketplace de curadoria com produtos de Amazon, Mercado Livre e Shopee
VITE_AFFILIATE_API_KEY=sua-chave-api
VITE_ANALYTICS_ID=seu-google-analytics-id
```

## Monitoramento

### Acessar Logs

```bash
# Via CLI Manus
manus logs markethub

# Via Dashboard
# Vá para seu projeto → Logs
```

### Métricas

- Acesse: https://seu-dominio.com/metrics
- Visualize: Requisições, Erros, Performance

## Troubleshooting

### Problema: Página em branco

**Solução:**
```bash
# Limpar cache
rm -rf dist/
npm run build

# Fazer re-deploy
git push origin main
```

### Problema: Produtos não aparecem

**Solução:**
- Verificar se `src/data/products.js` está correto
- Recompilar: `npm run build`
- Fazer re-deploy

### Problema: Filtros não funcionam

**Solução:**
- Verificar console do navegador (F12)
- Limpar cache do navegador (Ctrl+Shift+Del)
- Fazer hard refresh (Ctrl+F5)

## Performance

### Otimizações já implementadas

- ✅ Code splitting automático
- ✅ CSS minificado
- ✅ Imagens otimizadas
- ✅ Lazy loading
- ✅ Gzip compression

### Métricas esperadas

- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## Backup e Recuperação

### Backup automático

A Manus faz backup automático a cada deploy.

### Recuperar versão anterior

```bash
# Via Dashboard
# Vá para seu projeto → Histórico de Deployments
# Clique em "Restaurar" na versão desejada
```

## Próximos Passos

1. **Integrar APIs reais**
   - Amazon Product Advertising API
   - Mercado Livre API
   - Shopee API

2. **Adicionar sistema de pagamento**
   - Stripe
   - PagSeguro
   - PayPal

3. **Implementar autenticação**
   - OAuth com Google
   - OAuth com GitHub
   - Email/Senha

4. **Adicionar banco de dados**
   - MongoDB
   - PostgreSQL
   - Firebase

5. **Analytics avançado**
   - Google Analytics 4
   - Mixpanel
   - Amplitude

---

**Precisa de ajuda?** Contate: lmonteiromkt@gmail.com
