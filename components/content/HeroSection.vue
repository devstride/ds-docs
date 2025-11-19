<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">
        <slot name="title" />
      </h1>
      <p class="hero-description">
        <slot name="description" />
      </p>
      <div class="button-container">
        <NuxtLink to="/admin-onboarding-getting-started/setting-the-stage" class="documentation-button">
          Documentation
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1a1f5c 0%, #0f1340 100%);
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.documentation-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}

.documentation-button:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-section {
    min-height: 400px;
    padding: 3rem 1.5rem;
  }
}
</style>
