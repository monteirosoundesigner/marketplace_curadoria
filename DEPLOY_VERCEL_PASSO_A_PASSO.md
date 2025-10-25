# 📋 DEPLOY VERCEL - PASSO A PASSO

## ✅ PASSO 1: CRIAR CONTA GITHUB (Se não tiver)

**URL:** https://github.com/signup

1. Clique em "Sign up"
2. Digite seu email
3. Crie uma senha
4. Escolha um username (ex: seu-nome)
5. Confirme o email
6. Pronto! Você tem uma conta GitHub

---

## ✅ PASSO 2: CRIAR REPOSITÓRIO NO GITHUB

**URL:** https://github.com/new

1. Clique em "Create a new repository"
2. Preencha os campos:
   - **Repository name:** `marketplace_curadoria`
   - **Description:** `MarketHub - Marketplace de Curadoria`
   - **Public:** Selecione (para deploy gratuito)
3. Clique em "Create repository"
4. Você verá uma página com instruções

---

## ✅ PASSO 3: FAZER PUSH DO CÓDIGO PARA GITHUB

Copie e execute EXATAMENTE estes comandos no terminal:

```bash
cd /home/ubuntu/marketplace_curadoria

git remote add origin https://github.com/SEU_USUARIO/marketplace_curadoria.git

git branch -M main

git push -u origin main
```

**IMPORTANTE:** Substitua `SEU_USUARIO` pelo seu username do GitHub!

**Exemplo:**
```bash
git remote add origin https://github.com/joao123/marketplace_curadoria.git
git push -u origin main
```

**O que acontece:**
- Você será pedido para fazer login no GitHub
- Seu código será enviado para o GitHub
- Você verá: "Branch 'main' set up to track remote branch 'main'"

---

## ✅ PASSO 4: FAZER DEPLOY NA VERCEL

**URL:** https://vercel.com/new

1. Clique em "Import Project"
2. Clique em "Import Git Repository"
3. Cole a URL do seu repositório:
   ```
   https://github.com/SEU_USUARIO/marketplace_curadoria
   ```
4. Clique em "Continue"
5. Vercel detectará automaticamente:
   - **Framework:** Other (ou deixar em branco)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Clique em "Deploy"
7. Aguarde 2-3 minutos

---

## ✅ PASSO 5: ACESSAR SEU MARKETPLACE

Após o deploy, você receberá uma URL como:

```
https://marketplace-curadoria-abc123.vercel.app
```

**Clique no link e veja seu marketplace online!** 🎉

---

## 🎯 CONFIGURAR DOMÍNIO CUSTOMIZADO (Opcional)

Se você tiver um domínio próprio (ex: markethub.com.br):

1. No painel da Vercel, vá para seu projeto
2. Clique em "Settings" → "Domains"
3. Clique em "Add Domain"
4. Digite seu domínio
5. Siga as instruções para configurar DNS

---

## 🔑 RESUMO DOS COMANDOS

```bash
# 1. Ir para o diretório
cd /home/ubuntu/marketplace_curadoria

# 2. Adicionar repositório remoto
git remote add origin https://github.com/SEU_USUARIO/marketplace_curadoria.git

# 3. Renomear branch
git branch -M main

# 4. Fazer push
git push -u origin main
```

---

## ❓ DÚVIDAS COMUNS

### P: Onde encontro meu username do GitHub?
**R:** Clique na sua foto no canto superior direito → "Settings" → Você verá seu username

### P: Esqueci minha senha do GitHub?
**R:** Vá para https://github.com/password_reset

### P: Posso usar um domínio customizado?
**R:** Sim! Configure em Settings → Domains na Vercel

### P: Quanto custa?
**R:** Vercel é gratuito para projetos estáticos! (até 100GB/mês)

### P: Posso fazer deploy automático?
**R:** Sim! Após conectar GitHub, cada push faz deploy automático

---

## 📞 SUPORTE

- **Email:** lmonteiromkt@gmail.com
- **Documentação Vercel:** https://vercel.com/docs

---

**Pronto? Comece pelo PASSO 1!** 🚀
