<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()
const navRef = ref<HTMLElement>()
const accordionKey = ref(0)

// Watch for route changes to trigger re-render and scroll
watch(() => route.path, () => {
  // Force re-render to pick up new defaultOpen state
  accordionKey.value++

  // Wait for accordion to render and expand before scrolling
  nextTick(() => {
    setTimeout(() => {
      scrollToActiveLink()
    }, 100) // Small delay to ensure accordion animation completes
  })
})

// Scroll on initial mount
onMounted(() => {
  nextTick(() => {
    scrollToActiveLink()
  })
})

// Scroll the active link into view
function scrollToActiveLink() {
  if (!navRef.value) return

  // Find the active link (aria-current="page")
  const activeLink = navRef.value.querySelector('[aria-current="page"]')
  if (activeLink) {
    activeLink.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    })
  }
}
</script>

<template>
  <UContentNavigation
    :key="accordionKey"
    ref="navRef"
    highlight
    :navigation="navigation"
    :default-open="true"
    type="multiple"
  />
</template>
