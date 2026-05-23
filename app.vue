<template>
  <div class="site">
    <AppHeader />
    <SectionHero />
    <SectionAbout />
    <SectionMenu />
    <SectionHours />
    <SectionOrder />
    <AppFooter />
  </div>
</template>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: 'Montserrat', 'Lato', system-ui, sans-serif;
  background: #0f0a04;
  color: #f0e8d8;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
a { text-decoration: none; color: inherit; }
img, svg { display: block; }
address { font-style: normal; }
input, select, textarea, button { font-family: inherit; font-size: inherit; }

:root {
  --fire:      #FF6B00;
  --fire-dk:   #CC4400;
  --fire-lt:   #FF9500;
  --amber:     #FFA500;
  --gold:      #FFD700;
  --dark:      #0f0a04;
  --dark2:     #1a0f05;
  --dark3:     #251505;
  --coal:      #2a1a08;
  --text:      #f0e8d8;
  --text2:     #c8a878;
  --white:     #FFFFFF;
  --radius:    12px;
  --shadow:    0 4px 24px rgba(0,0,0,0.40);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.60);
  --transition: 0.28s ease;
}
</style>
