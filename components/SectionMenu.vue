<template>
  <section id="cardapio" class="menu">
    <div class="container">
      <div class="sec-header">
        <span class="eyebrow eyebrow--fire">Cardápio</span>
        <h2 class="h2 h2--light">O que tem <em>hoje</em></h2>
        <p class="sec-sub sec-sub--light">Todos os lanches acompanham fritas!</p>
      </div>

      <div v-for="cat in menuCategories" :key="cat.title" class="menu__category">
        <div class="menu__cat-header">
          <span class="menu__cat-emoji">{{ cat.emoji }}</span>
          <h3 class="menu__cat-title">{{ cat.title }}</h3>
          <span v-if="cat.obs" class="menu__cat-obs">{{ cat.obs }}</span>
        </div>
        <div class="menu__grid">
          <div v-for="item in cat.items" :key="item.name" class="menu-card">
            <div class="menu-card__body">
              <div class="menu-card__top">
                <h4 class="menu-card__name">{{ item.name }}</h4>
                <span class="menu-card__price">R$ {{ item.price }}</span>
              </div>
              <p v-if="item.desc" class="menu-card__desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="menu__cta">
        <a :href="whatsappLink" target="_blank" class="btn btn--fire">Fazer Pedido pelo WhatsApp</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { menuCategories } from '~/data/menu.js'
const { whatsappNumber, whatsappMessage } = useRuntimeConfig().public
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
</script>

<style scoped>
.container {
  max-width: 1180px;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 5vw, 3rem);
}

.eyebrow {
  display: block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--fire);
  margin-bottom: 0.6rem;
}
.eyebrow--fire { color: var(--amber); }

.h2 {
  font-size: clamp(1.85rem, 3.5vw, 2.75rem);
  font-weight: 900;
  line-height: 1.15;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
.h2 em { font-style: normal; color: var(--fire); }
.h2--light { color: var(--white); }
.h2--light em { color: var(--gold); }

.sec-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}
.sec-sub { margin-top: 0.75rem; color: var(--text2); font-size: 1rem; }
.sec-sub--light { color: rgba(255,200,100,0.6); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition);
}
.btn--fire {
  background: linear-gradient(135deg, var(--fire-dk) 0%, var(--fire) 50%, var(--fire-lt) 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(255, 107, 0, 0.4);
}
.btn--fire:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 107, 0, 0.6);
  filter: brightness(1.1);
}

.menu {
  padding-block: clamp(4rem, 8vw, 6.5rem);
  background:
    radial-gradient(ellipse at 50% 0%, rgba(255,107,0,0.15) 0%, transparent 60%),
    linear-gradient(180deg, #1a0a02, #0f0802);
}
.menu__category { margin-bottom: 3rem; }
.menu__cat-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255,107,0,0.2);
}
.menu__cat-emoji { font-size: 1.6rem; flex-shrink: 0; }
.menu__cat-title {
  font-size: 1.15rem;
  font-weight: 900;
  color: var(--fire-lt);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.menu__cat-obs {
  font-size: 0.72rem;
  color: var(--amber);
  font-weight: 700;
  letter-spacing: 0.06em;
  background: rgba(255,165,0,0.1);
  border: 1px solid rgba(255,165,0,0.25);
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
}
.menu__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.75rem;
}
.menu-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,107,0,0.12);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  transition: all var(--transition);
}
.menu-card:hover {
  background: rgba(255,107,0,0.06);
  border-color: rgba(255,107,0,0.35);
}
.menu-card__top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.3rem;
}
.menu-card__name {
  font-size: 0.95rem;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1.3;
}
.menu-card__price {
  font-size: 1rem;
  font-weight: 900;
  color: var(--fire);
  white-space: nowrap;
  flex-shrink: 0;
}
.menu-card__desc {
  font-size: 0.8rem;
  color: var(--text2);
  line-height: 1.5;
}
.menu__cta {
  text-align: center;
  margin-top: 2.5rem;
}
</style>
