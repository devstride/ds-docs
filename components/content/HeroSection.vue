<template>
  <div class="hero-section">
    <!-- The depth layer: a faint dot lattice over the navy, masked so it is strongest
         under the headline and dissolves toward the edges. Ported from the marketing hero. -->
    <div class="hero-texture" aria-hidden="true" />
    <div class="hero-content">
      <h1 class="hero-title">
        <slot name="title" />
      </h1>
      <div class="hero-description">
        <slot name="description" />
      </div>
      <div class="button-container">
        <NuxtLink to="/getting-started/admin-onboarding-getting-started/setting-the-stage" class="documentation-button">
          Documentation
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Brand tokens live in assets/css/brand.css, mirrored from the marketing site. */
.hero-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  font-family: var(--ds-font);
  color: #fff;
  /* Soft blue glow top-right, green bottom-left, then a floor shade so the navy
     falls off toward the bottom edge and the hero reads as lit from above. */
  background:
    radial-gradient(68% 55% at 88% -15%, rgba(0, 153, 255, 0.12), transparent 60%),
    radial-gradient(60% 50% at 4% 118%, rgba(0, 206, 132, 0.09), transparent 60%),
    radial-gradient(120% 72% at 50% 114%, rgba(2, 2, 18, 0.62), transparent 70%),
    var(--ds-hero);
}

/* Breathing aurora: two soft glow blobs that slowly drift (transform only, GPU-cheap) */
.hero-section::before,
.hero-section::after {
  content: '';
  position: absolute;
  z-index: 0;
  pointer-events: none;
  filter: blur(30px);
  will-change: transform;
}

.hero-section::before {
  top: -25%;
  right: -8%;
  width: 58%;
  height: 85%;
  background: radial-gradient(circle, rgba(0, 153, 255, 0.22), transparent 62%);
  animation: auroraA 15s ease-in-out infinite alternate;
}

.hero-section::after {
  bottom: -30%;
  left: -10%;
  width: 60%;
  height: 85%;
  background: radial-gradient(circle, rgba(0, 206, 132, 0.16), transparent 62%);
  animation: auroraB 19s ease-in-out infinite alternate;
}

@keyframes auroraA {
  from { transform: translate(0, 0) scale(1); }
  to { transform: translate(-7%, 5%) scale(1.15); }
}

@keyframes auroraB {
  from { transform: translate(0, 0) scale(1.05); }
  to { transform: translate(8%, -5%) scale(1.2); }
}

.hero-texture {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(255, 255, 255, 0.14) 1.2px, transparent 1.2px);
  background-size: 24px 24px;
  -webkit-mask-image: radial-gradient(120% 95% at 50% 0%, #000 30%, transparent 85%);
  mask-image: radial-gradient(120% 95% at 50% 0%, #000 30%, transparent 85%);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
}

.hero-title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 1rem;
}

/* Emphasised words in the title pick up the blue -> green brand gradient, with the
   same slow sheen the marketing site uses. Write them as *emphasis* in index.md.
   Slot content is rendered by the markdown parser, so it carries the parent's
   scope id — :deep() is what reaches it from a scoped block. */
.hero-title :deep(em) {
  font-style: normal;
  background: var(--ds-highlight);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: hlsheen 7s ease-in-out infinite alternate;
}

@keyframes hlsheen {
  from { background-position: 0% center; }
  to { background-position: 100% center; }
}

.hero-description {
  font-size: 1.1875rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.76);
  max-width: 48ch;
  margin: 0 auto 2.5rem;
}

.hero-description :deep(p) {
  margin: 0;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.documentation-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  /* The headline gradient runs blue -> green as a progression, and the CTA is
     where that progression lands, so it takes the end stop. A second gradient
     next to the headline's read as too busy. Navy text, not white: white on this
     green is ~1.9:1 and fails AA, while navy clears ~10:1. */
  background: var(--ds-green-bright);
  color: var(--ds-navy);
  border-radius: 10px;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 214, 140, 0.24);
  transition: transform 0.1s ease, box-shadow 0.18s ease, background 0.15s ease;
}

.documentation-button:hover {
  background: #1ae49c;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 12px 28px rgba(0, 214, 140, 0.34);
}

/* White ring, not blue — a blue focus ring on a blue button against navy is
   effectively invisible. */
.documentation-button:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

/* Reduced-motion users get the same hero, held still */
@media (prefers-reduced-motion: reduce) {
  .hero-section::before,
  .hero-section::after,
  .hero-title :deep(em) {
    animation: none;
  }

  .documentation-button {
    transition: box-shadow 0.18s ease;
  }

  .documentation-button:hover {
    transform: none;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 400px;
    padding: 3rem 1.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}
</style>
