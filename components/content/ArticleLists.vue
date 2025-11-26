<template>
  <div class="article-lists-section">
    <div class="article-lists-container">
      <!-- Most Viewed Articles -->
      <div class="article-column">
        <h3 class="column-title">Most Viewed Articles</h3>
        <ul class="article-list">
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/admin-onboarding-getting-started/admin-onboarding-guide">
              Admin Onboarding - Getting Started
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/admin-onboarding-getting-started/basic-terms">
              Basic Terms and Concepts
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/admin-onboarding-getting-started/boards-managing-workflow-and-statuses/setting-up-and-managing-boards/using-cycle-boards">
              Using Cycle Boards
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/automations/setting-up-basic-automations">
              Setting Up Basic Automations
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/admin-onboarding-getting-started/configuring-your-work-model/map-value-workstreams">
              Understanding Workstreams
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Most Read Articles -->
      <div class="article-column">
        <h3 class="column-title">Most Read Articles</h3>
        <ul class="article-list">
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/measure-performance-reports/report-filters-and-options">
              Report Filters and Options
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/workstreams-and-work-items/creating-work-items">
              Creating Items
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/settings/data-model/item-types">
              Item Types
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/admin-onboarding-getting-started/track-progress-gantt-charts/viewing-gantt-charts">
              Viewing Gantt Charts
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/workspace-capabilities/explore-the-workspace">
              Explore the Workspace
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Recently Created Articles -->
      <div class="article-column">
        <h3 class="column-title">Recently Created Articles</h3>
        <ul class="article-list">
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/release-notes/2025-07-02-and-2025-07-07">
              Release Notes: 2025-07-02
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/release-notes/2025-06-16">
              Release Notes: 2025-06-16
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/release-notes/2025-05-29">
              Release Notes: 2025-05-29
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/use-cases/gantt-charts">
              Gantt Charts
            </NuxtLink>
          </li>
          <li>
            <Icon name="i-lucide-chevron-right" class="list-icon" />
            <NuxtLink to="/use-cases/plan-a-sprint">
              Plan a Sprint
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

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
            <a href="https://www.linkedin.com/company/devstride" target="_blank" class="social-link">
              <Icon name="i-lucide-linkedin" class="social-icon" />
            </a>
            <a href="https://www.facebook.com/DevStrideApp" target="_blank" class="social-link">
              <Icon name="i-lucide-facebook" class="social-icon" />
            </a>
            <a href="https://www.instagram.com/devstrideapp/" target="_blank" class="social-link">
              <Icon name="i-lucide-instagram" class="social-icon" />
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

.article-lists-container {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 100%;
}

.article-column {
  color: white;
}

.column-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.article-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-list li {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.list-icon {
  width: 16px;
  height: 16px;
  color: white;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.article-list a {
  color: white;
  text-decoration: none;
  transition: opacity 0.2s;
  line-height: 1.5;
}

.article-list a:hover {
  opacity: 0.8;
  text-decoration: underline;
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
  .article-lists-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .article-lists-container {
    padding: 2rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-section {
    padding: 1rem .5rem 1rem;
  }

  .column-title {
    font-size: 1.25rem;
  }
}
</style>
