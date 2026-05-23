<template>
  <section id="inicio" class="hero">
    <div class="hero__fire hero__fire--1" />
    <div class="hero__fire hero__fire--2" />
    <div class="hero__fire hero__fire--3" />
    <div class="hero__overlay" />
    <div class="hero__content">
      <div class="hero__logo">
        <img src="/logo.png" alt="Fogo Burguer — Hamburgueria Artesanal" class="hero__logo-img" />
      </div>
      <p class="hero__sub">Burgers artesanais feitos<br>com amor e fogo de verdade.</p>
      <div class="hero__actions">
        <a :href="whatsappLink" target="_blank" class="btn btn--fire">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Pedir Agora
        </a>
        <a href="#cardapio" class="btn btn--outline">Ver Cardápio</a>
      </div>
    </div>
    <div class="hero__embers">
      <span v-for="i in 12" :key="i" class="ember" :style="emberStyle(i)" />
    </div>
  </section>
</template>

<script setup>
const { whatsappNumber, whatsappMessage } = useRuntimeConfig().public
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

const emberStyle = (i) => ({
  left: `${(i * 83) % 100}%`,
  animationDelay: `${(i * 0.7) % 4}s`,
  animationDuration: `${3 + (i * 0.4) % 3}s`,
  width: `${4 + (i % 3) * 2}px`,
  height: `${4 + (i % 3) * 2}px`,
})
</script>

<style scoped>
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
.btn--outline {
  background: transparent;
  color: var(--gold);
  border-color: var(--gold);
}
.btn--outline:hover {
  background: rgba(255, 215, 0, 0.12);
  transform: translateY(-2px);
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  padding-inline: clamp(1.25rem, 5vw, 3rem);
  padding-bottom: 3rem;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 100%, rgba(255,107,0,0.25) 0%, transparent 60%),
    radial-gradient(ellipse at 30% 50%, rgba(204,68,0,0.15) 0%, transparent 40%),
    linear-gradient(180deg, #0f0a04 0%, #1a0a02 50%, #0a0500 100%);
}

.hero__fire {
  position: absolute;
  bottom: 0;
  border-radius: 50% 50% 30% 30% / 60% 60% 40% 40%;
  filter: blur(40px);
  animation: flicker 4s ease-in-out infinite alternate;
  pointer-events: none;
}
.hero__fire--1 {
  width: 400px;
  height: 300px;
  left: 10%;
  background: radial-gradient(ellipse, rgba(255,80,0,0.35) 0%, transparent 70%);
  animation-delay: 0s;
}
.hero__fire--2 {
  width: 600px;
  height: 400px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(ellipse, rgba(255,140,0,0.25) 0%, transparent 70%);
  animation-delay: 1.5s;
}
.hero__fire--3 {
  width: 350px;
  height: 250px;
  right: 10%;
  background: radial-gradient(ellipse, rgba(255,60,0,0.3) 0%, transparent 70%);
  animation-delay: 0.8s;
}
@keyframes flicker {
  0%   { transform: scale(1) translateY(0); opacity: 0.8; }
  25%  { transform: scale(1.05) translateY(-10px); opacity: 1; }
  50%  { transform: scale(0.97) translateY(5px); opacity: 0.85; }
  75%  { transform: scale(1.08) translateY(-8px); opacity: 0.95; }
  100% { transform: scale(1.02) translateY(-3px); opacity: 0.9; }
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15,10,4,0.6) 0%, transparent 40%, rgba(15,10,4,0.3) 100%);
  pointer-events: none;
}

.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.2rem;
  background: rgba(255, 107, 0, 0.15);
  border: 1px solid rgba(255, 107, 0, 0.35);
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--amber);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}
.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--fire);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  flex-shrink: 0;
  box-shadow: 0 0 6px var(--fire);
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 6px var(--fire); }
  50% { opacity: 0.6; transform: scale(0.8); box-shadow: 0 0 2px var(--fire); }
}

.hero__logo { margin-bottom: 1.5rem; }
.hero__logo-img {
  width: 100%;
  max-width: 520px;
  height: auto;
  filter: drop-shadow(0 0 40px rgba(255, 107, 0, 0.45)) drop-shadow(0 8px 30px rgba(0,0,0,0.7));
  animation: float 5s ease-in-out infinite;
  margin-inline: auto;
}

.hero__sub {
  font-size: 1.1rem;
  color: rgba(240, 200, 130, 0.8);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
}

.hero__embers {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.ember {
  position: absolute;
  bottom: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, #FFD700, #FF6B00);
  animation: riseEmber linear infinite;
  opacity: 0;
}
@keyframes riseEmber {
  0%   { bottom: -10px; opacity: 0; transform: translateX(0) scale(1); }
  10%  { opacity: 1; }
  80%  { opacity: 0.6; }
  100% { bottom: 110%; opacity: 0; transform: translateX(30px) scale(0.3); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@media (max-width: 540px) {
  .hero__actions { flex-direction: column; align-items: center; }
  .hero__actions .btn { width: 100%; max-width: 320px; }
}
</style>
