# 🚀 Deploy na Vercel - MarketHub

## Opção 1: Deploy Automático (Recomendado)

### Passo 1: Preparar o Repositório GitHub
```bash
cd /home/ubuntu/marketplace_curadoria

# Inicializar Git
git init
git add .
git commit -m "Initial commit: MarketHub marketplace"

# Criar repositório no GitHub
# 1. Vá para https://github.com/new
# 2. Crie um repositório chamado "marketplace_curadoria"
# 3. Copie o comando git remote add

git remote add origin https://github.com/SEU_USER/marketplace_curadoria.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy na Vercel
1. Vá para https://vercel.com/signup
2. Clique em "Sign up with GitHub"
3. Autorize o acesso ao GitHub
4. Clique em "New Project"
5. Selecione "marketplace_curadoria"
6. Clique em "Import"
7. Vercel detectará automaticamente:
   - Framework: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
8. Clique em "Deploy"

### Passo 3: Aguardar Deploy
- Vercel fará o build automaticamente
- Você receberá uma URL como: `markethub-abc123.vercel.app`
- O deploy leva 2-3 minutos

---

## Opção 2: Deploy via Vercel CLI

### Passo 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Passo 2: Login na Vercel
```bash
vercel login
```

### Passo 3: Deploy
```bash
cd /home/ubuntu/marketplace_curadoria
vercel
```

### Passo 4: Responder às Perguntas
```
? Set up and deploy "~/marketplace_curadoria"? [Y/n] Y
? Which scope do you want to deploy to? [Your Name]
? Link to existing project? [y/N] N
? What's your project's name? markethub
? In which directory is your code located? ./
? Want to modify these settings before deploying? [y/N] N
```

---

## Opção 3: Deploy via Git Push

### Passo 1: Conectar GitHub à Vercel
1. Vá para https://vercel.com/dashboard
2. Clique em "Settings"
3. Vá para "Git"
4. Conecte seu GitHub

### Passo 2: Criar Projeto
1. Clique em "New Project"
2. Selecione seu repositório
3. Clique em "Import"

### Passo 3: Push para Deploy
```bash
git push origin main
```

Vercel fará deploy automaticamente a cada push!

---

## ✅ Após o Deploy

### Acessar seu Marketplace
- URL padrão: `markethub-abc123.vercel.app`
- URL customizada: Configure em Settings → Domains

### Configurar Domínio Customizado
1. Vá para seu projeto na Vercel
2. Clique em "Settings" → "Domains"
3. Adicione seu domínio (ex: markethub.com.br)
4. Siga as instruções para configurar DNS

### Variáveis de Ambiente
1. Vá para "Settings" → "Environment Variables"
2. Adicione:
   ```
   NODE_ENV=production
   PORT=3000
   ```

---

## 🐛 Troubleshooting

### Problema: Build falha
```bash
# Limpe cache e tente novamente
vercel env pull
npm install
npm run build
vercel --prod
```

### Problema: Página em branco
1. Verifique os logs: `vercel logs`
2. Limpe cache do navegador (Ctrl+Shift+Del)
3. Faça hard refresh (Ctrl+F5)

### Problema: Assets não carregam
1. Verifique se `dist/` foi criado
2. Verifique se `vercel.json` está correto
3. Faça re-deploy: `vercel --prod`

---

## 📊 Monitorar Deploy

### Ver Logs
```bash
vercel logs markethub
```

### Ver Status
```bash
vercel status
```

### Listar Deployments
```bash
vercel list
```

---

## 🎯 Próximos Passos

1. **Teste o marketplace**
   - Busque por produtos
   - Use os filtros
   - Adicione ao carrinho

2. **Configure domínio customizado**
   - Compre um domínio (GoDaddy, Namecheap, etc)
   - Configure DNS na Vercel

3. **Integre APIs reais**
   - Amazon Product Advertising API
   - Mercado Livre API
   - Shopee API

4. **Adicione analytics**
   - Google Analytics
   - Vercel Analytics

---

## 📞 Suporte

- **Documentação Vercel**: https://vercel.com/docs
- **Email**: lmonteiromkt@gmail.com

---

**Seu marketplace estará online em minutos!** 🚀
