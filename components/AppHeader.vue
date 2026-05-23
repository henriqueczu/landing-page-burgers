<template>
  <header class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <div class="nav__inner">
      <a href="#inicio" class="nav__brand">
        <img src="/logo.png" alt="Fogo Burguer" class="nav__logo-img" />
      </a>
      <nav class="nav__desktop">
        <a href="#sobre" class="nav__link">Sobre</a>
        <a href="#cardapio" class="nav__link">Cardápio</a>
        <a href="#horarios" class="nav__link">Horários</a>
        <a href="#pedir" class="nav__link">Pedir</a>
      </nav>
      <a :href="whatsappLink" target="_blank" class="nav__cta">Pedir pelo WhatsApp</a>
      <button class="nav__burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span /><span /><span />
      </button>
    </div>
    <div class="nav__mobile" :class="{ open: menuOpen }">
      <a href="#sobre" @click="menuOpen = false">Sobre</a>
      <a href="#cardapio" @click="menuOpen = false">Cardápio</a>
      <a href="#horarios" @click="menuOpen = false">Horários</a>
      <a href="#pedir" @click="menuOpen = false">Pedir</a>
      <a :href="whatsappLink" target="_blank" class="mobile-cta" @click="menuOpen = false">Pedir pelo WhatsApp</a>
    </div>
  </header>
</template>

<script setup>
const { isScrolled, menuOpen } = useNav()
const { whatsappNumber, whatsappMessage } = useRuntimeConfig().public
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
</script>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  padding-block: 1rem;
  transition: background var(--transition), box-shadow var(--transition), padding var(--transition);
}
.nav--scrolled {
  background: rgba(15, 10, 4, 0.97);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.8), 0 1px 0 rgba(255,107,0,0.2);
  padding-block: 0.65rem;
}
.nav__inner {
  max-width: 1180px;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 5vw, 3rem);
  display: flex;
  align-items: center;
  gap: 2rem;
}
.nav__brand { flex-shrink: 0; }
.nav__logo-img {
  height: 48px;
  width: auto;
  filter: drop-shadow(0 0 8px rgba(255,107,0,0.4));
  transition: filter var(--transition);
}
.nav__logo-img:hover {
  filter: drop-shadow(0 0 14px rgba(255,107,0,0.7));
}

.nav__desktop {
  display: flex;
  gap: 2rem;
  margin-left: auto;
}
.nav__link {
  color: rgba(255,255,255,0.7);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color var(--transition);
  position: relative;
}
.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--fire);
  transition: width var(--transition);
}
.nav__link:hover { color: var(--fire-lt); }
.nav__link:hover::after { width: 100%; }

.nav__cta {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1.2rem;
  background: linear-gradient(135deg, var(--fire-dk), var(--fire));
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all var(--transition);
  flex-shrink: 0;
  box-shadow: 0 2px 12px rgba(255,107,0,0.3);
}
.nav__cta:hover {
  filter: brightness(1.15);
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(255,107,0,0.5);
}

.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.nav__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--fire-lt);
  border-radius: 2px;
  transition: all var(--transition);
  transform-origin: center;
}
.nav__burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav__burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.nav__burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.nav__mobile {
  display: none;
  flex-direction: column;
  background: rgba(15,10,4,0.98);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease;
  border-top: 1px solid rgba(255,107,0,0.15);
}
.nav__mobile.open { max-height: 400px; }
.nav__mobile a {
  display: block;
  padding: 1rem 2rem;
  color: rgba(255,255,255,0.8);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.9rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: color var(--transition);
}
.nav__mobile a:hover { color: var(--fire); }
.nav__mobile .mobile-cta {
  background: linear-gradient(135deg, var(--fire-dk), var(--fire));
  color: white;
  text-align: center;
  margin: 1rem 1.5rem;
  border-radius: 6px;
  border-bottom: none;
}

@media (max-width: 768px) {
  .nav__desktop { display: none; }
  .nav__cta { display: none; }
  .nav__burger { display: flex; }
  .nav__mobile { display: flex; }
}
</style>
