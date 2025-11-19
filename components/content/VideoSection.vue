<template>
  <div class="video-section">
    <div class="video-container">
      <h2 class="video-title">About us</h2>
      <div class="video-wrapper">
        <div class="video-placeholder">
          <div class="video-background">
            <div class="video-logo-text">DevStride</div>
            <a href="https://www.youtube.com/watch?v=vZ5bDP1ugak" target="_blank" class="play-button">
              <Icon name="i-lucide-play" class="play-icon" />
            </a>
          </div>
          <div class="video-footer">
            <span class="video-url">www.devstride.com</span>
          </div>
        </div>
      </div>
      <p class="video-caption">
        Agile Project Management for Cross-Functional Teams.
      </p>
      <a href="https://www.youtube.com/@devstride" target="_blank" class="more-videos-button">
        More videos
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.video-section {
  padding: 4rem 2rem;
  background: white;
}

.video-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.video-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
}

.video-wrapper {
  margin-bottom: 1.5rem;
}

.video-placeholder {
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.video-background {
  background: linear-gradient(135deg, #1a1f5c 0%, #0f1340 100%);
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
}

.video-logo-text {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  opacity: 0.9;
  letter-spacing: -0.05em;
}

.play-button {
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(255, 76, 76, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  border: 4px solid rgba(255, 255, 255, 0.3);
}

.play-button:hover {
  background: rgba(255, 76, 76, 1);
  transform: scale(1.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.play-icon {
  width: 32px;
  height: 32px;
  color: white;
  margin-left: 4px;
}

.video-footer {
  background: #1a1f5c;
  padding: 0.75rem;
  text-align: center;
}

.video-url {
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
}

.video-caption {
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.more-videos-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.more-videos-button:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
  .video-section {
    padding: 3rem 1.5rem;
  }

  .video-title {
    font-size: 1.75rem;
  }

  .video-background {
    min-height: 300px;
  }

  .video-logo-text {
    font-size: 3rem;
  }

  .play-button {
    width: 60px;
    height: 60px;
  }

  .play-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
