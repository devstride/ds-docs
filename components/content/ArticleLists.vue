<template>
  <div class="article-lists-section">
    <!-- Footer -->
    <div class="footer-section">
      <div class="footer-content">
        <div class="footer-column footer-brand">
          <img src="/ds-logo.png" alt="DevStride" class="footer-logo" />
        </div>

        <div class="footer-column">
          <h4 class="footer-heading">Location</h4>
          <p class="footer-text">
            200 NE Missouri Rd, Ste. 200<br />
            Lee's Summit, MO 64086
          </p>
        </div>

        <div class="footer-column">
          <h4 class="footer-heading">Contact</h4>
          <p class="footer-text">
            <a href="tel:+14172991119" class="footer-link">(417) 299-1119</a><br />
            <a href="mailto:info@devstride.com" class="footer-link">info@devstride.com</a>
          </p>
        </div>

        <div class="footer-column footer-social">
          <h4 class="footer-heading">Follow Us</h4>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/phildreynolds/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              aria-label="Phil Reynolds on LinkedIn"
            >
              <Icon name="i-lucide-linkedin" class="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.article-lists-section {
  background: white;
}

.footer-section {
  background: linear-gradient(135deg, #1a1f5c 0%, #0f1340 100%);
  padding: 1rem .5rem 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
  color: white;
}

.footer-logo-text {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.05em;
}

.footer-brand {
  display: flex;
  align-items: center;
}

.footer-logo {
  max-width: 180px;
  height: auto;
}

.footer-heading {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.footer-text {
  font-size: 0.9375rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

.footer-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: white;
  text-decoration: underline;
}

.footer-link-plain {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.875rem;
  word-break: break-all;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  text-decoration: none;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
  color: white;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-section {
    padding: 1rem .5rem 1rem;
  }
}
</style>
