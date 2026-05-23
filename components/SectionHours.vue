<template>
  <section id="horarios" class="info">
    <div class="container info__grid">
      <div class="info__card info__card--hours">
        <div class="info__icon">🕕</div>
        <h3 class="info__title">Horário de Funcionamento</h3>
        <div class="info__schedule">
          <div class="schedule__row">
            <span class="schedule__day">Quarta a Segunda</span>
            <span class="schedule__time">18:30 às 23:00</span>
          </div>
          <div class="schedule__row schedule__row--closed">
            <span class="schedule__day">Terça-feira</span>
            <span class="schedule__time schedule__time--closed">Fechado</span>
          </div>
        </div>
        <div class="info__note">Fechamos a cozinha às 22:30</div>
      </div>

      <div class="info__card info__card--location">
        <div class="info__icon">📍</div>
        <h3 class="info__title">Onde Estamos</h3>
        <address class="info__address">
          Av. Das Avenidas, 99999<br>
          São Paulo – SP
        </address>
        <a
          href="https://maps.google.com/?q=Sao+Paulo+SP"
          target="_blank"
          class="btn btn--outline-dark"
        >
          Ver no Mapa
        </a>
      </div>

      <div class="info__card info__card--social">
        <div class="info__icon">📸</div>
        <h3 class="info__title">Siga a Gente</h3>
        <p class="info__social-desc">Fique por dentro das promoções e novidades do Fogo Burguer</p>
        <a href="https://instagram.com/" target="_blank" class="instagram-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          @fogoburguer
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 1180px;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 5vw, 3rem);
}

.btn--outline-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.6rem;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: transparent;
  color: var(--fire);
  border: 2px solid var(--fire);
  transition: all var(--transition);
  margin-top: 1rem;
}
.btn--outline-dark:hover {
  background: rgba(255, 107, 0, 0.12);
  transform: translateY(-2px);
}

.info {
  padding-block: clamp(4rem, 8vw, 6.5rem);
  background: var(--dark2);
  border-top: 1px solid rgba(255,107,0,0.1);
}
.info__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.info__card {
  background: var(--coal);
  border: 1px solid rgba(255,107,0,0.15);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  transition: all var(--transition);
}
.info__card:hover {
  border-color: rgba(255,107,0,0.4);
  box-shadow: 0 8px 30px rgba(255,107,0,0.1);
}
.info__icon { font-size: 2.2rem; }
.info__title {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--fire-lt);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 0.25rem;
}

.info__schedule { width: 100%; display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem; }
.schedule__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.schedule__row--closed { opacity: 0.5; }
.schedule__day { font-size: 0.88rem; color: var(--text2); font-weight: 600; }
.schedule__time { font-size: 0.9rem; font-weight: 800; color: var(--amber); }
.schedule__time--closed { color: rgba(200,168,120,0.4); }
.info__note {
  font-size: 0.75rem;
  color: rgba(200,168,120,0.4);
  font-style: italic;
  margin-top: 0.25rem;
}

.info__address {
  font-size: 1rem;
  color: var(--text);
  line-height: 1.7;
  margin-top: 0.25rem;
}

.info__social-desc {
  font-size: 0.9rem;
  color: var(--text2);
  line-height: 1.6;
}
.instagram-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  color: white;
  transition: all var(--transition);
  box-shadow: 0 4px 15px rgba(220,39,67,0.3);
}
.instagram-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(220,39,67,0.5);
  filter: brightness(1.1);
}

@media (max-width: 540px) {
  .info__grid { grid-template-columns: 1fr; }
}
</style>
