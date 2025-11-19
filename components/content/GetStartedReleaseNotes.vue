<template>
  <div class="cards-section">
    <div class="cards-container">
      <!-- Get Started Card -->
      <div class="card get-started-card">
        <div class="card-image card-image-placeholder get-started-placeholder">
          <Icon name="i-lucide-rocket" class="placeholder-icon" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Get Started</h3>
          <p class="card-description">
            Get yourself familiar with DevStride in our 'Getting Started' section. Here, you'll find all the essential resources and guides to set up your account, navigate the interface, and begin managing projects with confidence.
          </p>
          <NuxtLink to="/01-admin-onboarding-getting-started/basic-terms" class="card-link">
            Read more
          </NuxtLink>
        </div>
      </div>

      <!-- Release Notes Card -->
      <div class="card release-notes-card">
        <div class="card-image card-image-placeholder release-notes-placeholder">
          <Icon name="i-lucide-megaphone" class="placeholder-icon" />
        </div>
        <div class="card-content">
          <h3 class="card-title">Release Notes</h3>
          <p class="card-description">
            Stay informed on the latest updates and enhancements with our release notes. Discover new features, improvements, and fixes in each update to continuously enhance your portfolio management experience.
          </p>
          <NuxtLink to="/11.release-notes/2025-01-01-01-27" class="card-link">
            Read more
          </NuxtLink>
        </div>
      </div>
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
  grid-template-columns: 1fr 1fr;
  gap: 0;
  max-width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.get-started-card {
  background: #e0f0ff;
}

.release-notes-card {
  background: #ff4444;
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
  color: #3b82f6;
}

.release-notes-placeholder .placeholder-icon {
  color: rgba(255, 255, 255, 0.9);
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
  color: #1f2937;
}

.release-notes-card .card-title {
  color: white;
}

.card-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.get-started-card .card-description {
  color: #4b5563;
}

.release-notes-card .card-description {
  color: rgba(255, 255, 255, 0.95);
}

.card-link {
  display: inline-block;
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  font-size: 1rem;
}

.release-notes-card .card-link {
  color: white;
  text-decoration: underline;
}

.card-link:hover {
  color: #2563eb;
}

.release-notes-card .card-link:hover {
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 968px) {
  .cards-container {
    grid-template-columns: 1fr;
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
