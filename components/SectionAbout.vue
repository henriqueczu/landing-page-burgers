<template>
  <section id="sobre" class="about">
    <div class="container about__grid">
      <div class="about__visual">
        <div class="about__grill">
          <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Grill body -->
            <ellipse cx="100" cy="100" rx="80" ry="60" fill="#2a1a0a" stroke="#8B4513" stroke-width="3"/>
            <!-- Grill grates -->
            <line x1="30" y1="100" x2="170" y2="100" stroke="#c8822a" stroke-width="2.5"/>
            <line x1="30" y1="115" x2="170" y2="115" stroke="#c8822a" stroke-width="2.5"/>
            <line x1="30" y1="85" x2="170" y2="85" stroke="#c8822a" stroke-width="2.5"/>
            <line x1="55" y1="70" x2="55" y2="148" stroke="#c8822a" stroke-width="2.5"/>
            <line x1="80" y1="55" x2="80" y2="155" stroke="#c8822a" stroke-width="2.5"/>
            <line x1="100" y1="50" x2="100" y2="158" stroke="#c8822a" stroke-width="2.5"/>
            <line x1="120" y1="55" x2="120" y2="155" stroke="#c8822a" stroke-width="2.5"/>
            <line x1="145" y1="70" x2="145" y2="148" stroke="#c8822a" stroke-width="2.5"/>
            <!-- Burger patty on grill -->
            <ellipse cx="100" cy="90" rx="45" ry="20" fill="#8B3A00" stroke="#c8822a" stroke-width="1.5"/>
            <ellipse cx="100" cy="87" rx="45" ry="20" fill="#a04020" />
            <!-- Grill rim -->
            <ellipse cx="100" cy="65" rx="80" ry="18" fill="none" stroke="#8B4513" stroke-width="4"/>
            <!-- Legs -->
            <line x1="70" y1="155" x2="60" y2="175" stroke="#5a3010" stroke-width="5" stroke-linecap="round"/>
            <line x1="130" y1="155" x2="140" y2="175" stroke="#5a3010" stroke-width="5" stroke-linecap="round"/>
            <!-- Fire flames -->
            <path d="M85 88 Q82 75 88 68 Q86 78 92 72 Q89 82 96 75 Q93 86 85 88Z" fill="#FF6B00" opacity="0.9"/>
            <path d="M110 88 Q107 72 114 65 Q111 78 118 70 Q114 83 120 76 Q116 87 110 88Z" fill="#FF8C00" opacity="0.9"/>
            <path d="M98 90 Q94 73 100 63 Q97 76 104 68 Q100 82 106 73 Q102 87 98 90Z" fill="#FFA500" opacity="0.8"/>
          </svg>
        </div>
      </div>
      <div class="about__copy">
        <span class="eyebrow">Quem Somos</span>
        <h2 class="h2">Feito com <em>fogo</em><br>e muito amor</h2>
        <p>O Fogo Burguer é uma hamburgueria artesanal onde cada lanche é preparado com ingredientes selecionados, muito carinho e fogo de verdade. Nossas receitas são únicas, criadas para quem aprecia um burger de verdade.</p>
        <p>Venha nos visitar e descubra por que somos o point dos amantes de burger artesanal.</p>
        <div class="about__badges">
          <div v-for="b in badges" :key="b.label" class="about__badge">
            <span class="about__badge-icon">{{ b.icon }}</span>
            <span>{{ b.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { badges } from '~/data/menu.js'
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

.h2 {
  font-size: clamp(1.85rem, 3.5vw, 2.75rem);
  font-weight: 900;
  line-height: 1.15;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
.h2 em { font-style: normal; color: var(--fire); }

.about {
  padding-block: clamp(4rem, 8vw, 6.5rem);
  background: var(--dark2);
  border-top: 1px solid rgba(255,107,0,0.1);
}
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: clamp(3rem, 6vw, 5rem);
  align-items: center;
}
.about__visual {
  display: flex;
  align-items: center;
  justify-content: center;
}
.about__grill {
  width: 100%;
  max-width: 280px;
  filter: drop-shadow(0 20px 40px rgba(255,107,0,0.3));
  animation: float 5s ease-in-out infinite;
}
.about__grill svg { width: 100%; height: auto; }
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.about__copy :deep(.h2) { margin-bottom: 1.5rem; }
.about__copy p {
  color: var(--text2);
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.8;
}
.about__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}
.about__badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1.5px solid rgba(255,107,0,0.25);
  border-radius: 25px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text);
  transition: all var(--transition);
  background: rgba(255,107,0,0.05);
}
.about__badge:hover {
  border-color: var(--fire);
  color: var(--fire);
  background: rgba(255,107,0,0.1);
}
.about__badge-icon { font-size: 1.1rem; }

@media (max-width: 900px) {
  .about__grid { grid-template-columns: 1fr; text-align: center; }
  .about__visual { order: -1; }
  .about__grill { max-width: 200px; }
  .about__badges { justify-content: center; }
}
</style>
