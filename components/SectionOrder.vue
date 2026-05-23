<template>
  <section id="pedir" class="order">
    <div class="container">
      <div class="sec-header">
        <span class="eyebrow">Peça Agora</span>
        <h2 class="h2">Escolha como <em>receber</em></h2>
      </div>
      <div class="order__grid">
        <a :href="whatsappLink" target="_blank" class="order-card order-card--whatsapp">
          <div class="order-card__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </div>
          <h3 class="order-card__title">WhatsApp</h3>
          <p class="order-card__desc">Fale direto com a gente e faça seu pedido</p>
          <span class="order-card__btn">Pedir pelo WhatsApp</span>
        </a>
        <a href="https://www.ifood.com.br" target="_blank" class="order-card order-card--ifood">
          <div class="order-card__icon order-card__icon--ifood">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          </div>
          <h3 class="order-card__title">iFood</h3>
          <p class="order-card__desc">Delivery pelo aplicativo, rápido e prático</p>
          <span class="order-card__btn">Pedir pelo iFood</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
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

.h2 {
  font-size: clamp(1.85rem, 3.5vw, 2.75rem);
  font-weight: 900;
  line-height: 1.15;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
.h2 em { font-style: normal; color: var(--fire); }

.sec-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.order {
  padding-block: clamp(4rem, 8vw, 6.5rem);
  background:
    radial-gradient(ellipse at 50% 50%, rgba(255,107,0,0.08) 0%, transparent 70%),
    var(--dark);
}
.order__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin-inline: auto;
}
.order-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 16px;
  gap: 1rem;
  transition: all var(--transition);
  cursor: pointer;
}
.order-card--whatsapp {
  background: linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.05));
  border: 2px solid rgba(37,211,102,0.25);
}
.order-card--whatsapp:hover {
  border-color: rgba(37,211,102,0.6);
  background: linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.08));
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(37,211,102,0.15);
}
.order-card--ifood {
  background: linear-gradient(135deg, rgba(234,43,43,0.1), rgba(234,43,43,0.05));
  border: 2px solid rgba(234,43,43,0.25);
}
.order-card--ifood:hover {
  border-color: rgba(234,43,43,0.5);
  background: linear-gradient(135deg, rgba(234,43,43,0.15), rgba(234,43,43,0.08));
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(234,43,43,0.15);
}
.order-card__icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(37,211,102,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #25D366;
}
.order-card__icon--ifood {
  background: rgba(234,43,43,0.15);
  color: #EA2B2B;
}
.order-card__title {
  font-size: 1.4rem;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.order-card__desc {
  font-size: 0.92rem;
  color: var(--text2);
  line-height: 1.6;
}
.order-card--whatsapp .order-card__btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  background: #25D366;
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 0.5rem;
  transition: all var(--transition);
}
.order-card--whatsapp:hover .order-card__btn {
  background: #1fba58;
  box-shadow: 0 4px 15px rgba(37,211,102,0.4);
}
.order-card--ifood .order-card__btn {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  background: #EA2B2B;
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 0.5rem;
  transition: all var(--transition);
}
.order-card--ifood:hover .order-card__btn {
  background: #c81f1f;
  box-shadow: 0 4px 15px rgba(234,43,43,0.4);
}
</style>
