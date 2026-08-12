<template>
  <div class="cards-section">
    <div class="cards-container">
      <!-- Get Started Card -->
      <NuxtLink
        to="/getting-started/admin-onboarding-getting-started/setting-the-stage"
        class="card get-started-card"
        aria-label="Get Started"
      >
        <div class="card-image card-image-placeholder get-started-placeholder">
          <Icon name="i-lucide-rocket" class="placeholder-icon" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Get Started</h3>
          <p class="card-description">
            Kickstart your journey with DevStride in our 'Getting Started' section. Here, you'll find all the essential resources and guides to set up your account, navigate the interface, and begin managing projects with confidence.
          </p>
          <span class="card-link">
            Start setting up
            <Icon name="i-lucide-arrow-right" class="card-link-arrow" />
          </span>
        </div>
      </NuxtLink>

      <!-- Release Notes Card -->
      <NuxtLink to="/release-notes" class="card release-notes-card" aria-label="Release Notes">
        <div class="card-image card-image-placeholder release-notes-placeholder">
          <Icon name="i-lucide-megaphone" class="placeholder-icon" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Release Notes</h3>
          <p class="card-description">
            Stay informed on the latest updates and enhancements with our release notes. Discover new features, improvements, and fixes in each update to continuously enhance your portfolio management experience.
          </p>
          <span class="card-link">
            See what's new
            <Icon name="i-lucide-arrow-right" class="card-link-arrow" />
          </span>
        </div>
      </NuxtLink>

      <!-- Developer Docs Card -->
      <NuxtLink
        to="/developer-experience/intro/getting-started"
        class="card developer-docs-card"
        aria-label="Developer Docs"
      >
        <div class="card-image card-image-placeholder developer-docs-placeholder">
          <Icon name="i-lucide-code-2" class="placeholder-icon" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Developer Docs</h3>
          <p class="card-description">
            Set up your development environment, learn the ds CLI, and dive into the codebase architecture. Everything you need to start contributing to DevStride.
          </p>
          <span class="card-link">
            Read the docs
            <Icon name="i-lucide-arrow-right" class="card-link-arrow" />
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cards-section {
  padding: 0;
  background: white;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  max-width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* The whole card is the link — reset anchor styling and let the children keep their own colors */
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  z-index: 1;
}

.card:focus-visible {
  outline: 3px solid var(--ds-blue);
  outline-offset: -3px;
}

/* Reduced-motion users still get the shadow cue, just no movement */
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: box-shadow 0.2s;
  }

  .card:hover {
    transform: none;
  }
}

.get-started-card {
  background: var(--ds-blue-soft);
}

.release-notes-card {
  background: var(--ds-red);
}

.developer-docs-card {
  background: var(--ds-navy);
}

.card-image {
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-image-placeholder {
  position: relative;
}

.placeholder-icon {
  width: 120px;
  height: 120px;
  opacity: 0.6;
}

.get-started-placeholder .placeholder-icon {
  color: var(--ds-blue);
}

.release-notes-placeholder .placeholder-icon {
  color: rgba(255, 255, 255, 0.9);
}

.developer-docs-placeholder .placeholder-icon {
  color: var(--ds-blue-light);
}

.card-content {
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.get-started-card .card-title {
  color: var(--ds-ink);
}

.release-notes-card .card-title {
  color: white;
}

.developer-docs-card .card-title {
  color: white;
}

.card-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.get-started-card .card-description {
  color: var(--ds-body);
}

.release-notes-card .card-description {
  color: rgba(255, 255, 255, 0.95);
}

.developer-docs-card .card-description {
  color: rgba(255, 255, 255, 0.85);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--ds-blue-medium);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  font-size: 1rem;
}

.card-link-arrow {
  width: 1em;
  height: 1em;
  transition: transform 0.2s;
}

.card:hover .card-link-arrow {
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .card-link-arrow,
  .card:hover .card-link-arrow {
    transition: none;
    transform: none;
  }
}

.release-notes-card .card-link {
  color: white;
  text-decoration: underline;
}

.developer-docs-card .card-link {
  color: var(--ds-blue-light);
}

/* "Read more" is now a span inside the card-wide link, so it reacts to hovering the whole card */
.card:hover .card-link {
  color: var(--ds-blue-medium-hover);
  text-decoration: underline;
}

.release-notes-card:hover .card-link {
  color: rgba(255, 255, 255, 0.9);
}

.developer-docs-card:hover .card-link {
  color: #7ec9ff;
}

/* Responsive: 2 columns on medium screens */
@media (max-width: 1200px) {
  .cards-container {
    grid-template-columns: 1fr 1fr;
  }

  /* Developer docs spans full width on 2-col layout */
  .developer-docs-card {
    grid-column: span 2;
  }
}

/* Responsive: 1 column on small screens */
@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }

  .developer-docs-card {
    grid-column: span 1;
  }

  .card-image {
    height: 250px;
  }

  .card-content {
    padding: 2rem;
  }
}

@media (max-width: 640px) {
  .card-image {
    height: 200px;
  }

  .card-content {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-description {
    font-size: 0.9375rem;
  }
}
</style>
