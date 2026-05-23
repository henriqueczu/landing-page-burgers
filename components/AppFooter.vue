<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <img src="/logo.png" alt="Fogo Burguer" class="footer__logo-img" />
      </div>
      <p class="footer__tagline">Burgers artesanais feitos no fogo</p>
      <nav class="footer__links">
        <a href="#sobre">Sobre</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#horarios">Horários</a>
        <a href="https://instagram.com/fogoburguer" target="_blank">Instagram</a>
      </nav>
      <p class="footer__addr">Av. Fernão Dias Paes Leme, 2530 — Várzea Paulista, SP</p>
      <p class="footer__copy">© {{ new Date().getFullYear() }} Fogo Burguer. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 1180px;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 5vw, 3rem);
}

.footer {
  background: #050300;
  padding-block: clamp(2rem, 4vw, 3.5rem);
  border-top: 1px solid rgba(255,107,0,0.15);
}
.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
  text-align: center;
}
.footer__logo-img {
  height: 70px;
  width: auto;
  filter: drop-shadow(0 0 12px rgba(255,107,0,0.3));
  opacity: 0.85;
}
.footer__tagline {
  color: rgba(200,168,120,0.5);
  font-size: 0.88rem;
  font-style: italic;
}
.footer__links {
  display: flex;
  gap: 2rem;
}
.footer__links a {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
  transition: color var(--transition);
}
.footer__links a:hover { color: var(--fire); }
.footer__addr {
  font-size: 0.8rem;
  color: rgba(200,168,120,0.4);
}
.footer__copy {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.15);
}

@media (max-width: 540px) {
  .footer__links { flex-wrap: wrap; gap: 1.25rem; justify-content: center; }
}
</style>
