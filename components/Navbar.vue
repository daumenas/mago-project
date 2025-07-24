<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <img src="/logo.png" alt="Mago Media Logo" />
        <span class="brand-text">Mago Media</span>
      </div>

      <button class="menu-toggle" @click="toggleMenu">
        <div :class="['menu-icon', { open: isMenuOpen }]"></div>
      </button>

      <ul :class="['nav-links', { open: isMenuOpen }]">
        <li v-for="(link, index) in links" :key="index">
          <a href="#" @click.prevent="navigate(link.id)" :class="{ active: activeSection === link.id }">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useScrollTo } from '@/composables/useScrollTo'

const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)

const links = [
  { label: 'Home', id: 'hero' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Development', id: 'development' },
  { label: 'Equipment', id: 'equipment' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' }
]

const activeSection = ref(null)
const { navigate } = useScrollTo(40)

const updateActiveSection = () => {
  const scrollY = window.scrollY
  for (const link of links) {
    const section = document.getElementById(link.id)
    if (section) {
      const top = section.offsetTop - 120
      if (scrollY >= top) {
        activeSection.value = link.id
      }
    }
  }
}

onMounted(() => window.addEventListener('scroll', updateActiveSection))
onUnmounted(() => window.removeEventListener('scroll', updateActiveSection))
</script>


<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: background 0.3s ease;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 36px;
  margin-right: 0.5rem;
}

.brand-text {
  color: #caaeff;
  font-weight: 700;
  font-size: 1.25rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links li a {
  text-decoration: none;
  color: #caaeff;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-links li a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color, #a05cff);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.menu-icon {
  width: 24px;
  height: 2px;
  background-color: #caaeff;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: #caaeff;
  transition: all 0.3s ease-in-out;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  top: 8px;
}

.menu-icon.open {
  background: transparent;
}

.menu-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-icon.open::after {
  transform: rotate(-45deg);
  top: 0;
}

@media (max-width: 1024px) {
  .menu-toggle {
    display: block;
    margin-right: 100px;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(30, 0, 60, 0.97);
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
    display: none;
  }

  .nav-links.open {
    margin-top: 0;
    display: flex;
  }

  .nav-links li {
    margin: 1rem 0;
  }

  .nav-links li a {
    font-size: 1.2rem;
    color: #caaeff;
  }
}
</style>

