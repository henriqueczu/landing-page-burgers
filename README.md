# 🔥 Fogo Burguer — Landing Page

Landing page para hamburgueria artesanal, construída com **Nuxt 3**. Projeto criado para testar o [Claude Code](https://claude.ai/code) como ferramenta de desenvolvimento.

---

## 📸 Sobre o projeto

Landing page completa para a **Fogo Burguer**, com visual dark e tema de brasa/fogo. A página apresenta o restaurante, exibe o cardápio com preços, horários de funcionamento e integração direta com WhatsApp e iFood para pedidos.

---

## ✨ Seções

| Seção | Descrição |
|---|---|
| **Hero** | Banner principal com animações de brasa e partículas de ember |
| **Sobre** | Apresentação do restaurante com ilustração SVG de churrasqueira |
| **Cardápio** | Hambúrguers, porções e bebidas com preços |
| **Horários** | Dias e horários de funcionamento + localização |
| **Pedidos** | Links diretos para WhatsApp e iFood |
| **Footer** | Rodapé com informações de contato |

---

## 🛠️ Tecnologias

- [Nuxt 3](https://nuxt.com/) — framework Vue.js
- Vue 3 (Composition API com `<script setup>`)
- CSS puro com variáveis customizadas (sem Tailwind, sem UI lib)
- Animações CSS (flicker de fogo, floating, ember rising)

---

## 🚀 Como rodar

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
```

O projeto roda em `http://localhost:3000` por padrão.

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz com as variáveis abaixo:

```env
NUXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NUXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Quero fazer um pedido.
```

> O número deve estar no formato internacional, sem `+` ou espaços (ex: `5511999999999`).

---

## 📁 Estrutura

```
landing-page-burgers/
├── components/
│   ├── AppHeader.vue       # Navbar fixa com menu responsivo
│   ├── AppFooter.vue       # Rodapé
│   ├── SectionHero.vue     # Banner com animações de fogo
│   ├── SectionAbout.vue    # Seção sobre o restaurante
│   ├── SectionMenu.vue     # Cardápio dinâmico
│   ├── SectionHours.vue    # Horários e localização
│   └── SectionOrder.vue    # Cards de pedido (WhatsApp / iFood)
├── composables/
│   └── useNav.js           # Estado do header (scroll + menu mobile)
├── data/
│   └── menu.js             # Categorias e itens do cardápio
├── public/
│   └── logo.png
└── app.vue                 # Root com CSS global e variáveis de design
```

---
