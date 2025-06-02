<template>
    <nav class="navbar">
      <div class="nav-container container">
        <div class="logo">
        <img src="/logo.png" alt="Mago Media Logo" class="logo-img" />
        <span>Mago Media</span>
        </div>
  
        <button class="menu-toggle" @click="toggleMenu">
          <span :class="{ open: isMenuOpen }"></span>
        </button>
  
        <ul :class="['nav-links', { open: isMenuOpen }]">
          <li v-for="(link, index) in links" :key="index">
            <a
              href="#"
              @click.prevent="navigate(link.id)"
              :class="{ active: activeSection === link.id }"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
    
  import { useScrollTo } from '@/composables/useScrollTo'
  
  const isMenuOpen = ref(false)
  const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
  
  const links = [
    { label: 'Home', id: 'hero' },
    { label: 'News', id: 'news' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Development', id: 'development' },
    { label: 'Equipment', id: 'equipment' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ]
  
  const activeSection = ref(null)

const { navigate } = useScrollTo(40) // pass custom offset if needed
  
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
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(12px);
    background-color: #f1edf8;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
  
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    transition: color 0.3s ease;
    position: relative;
  }
  
  .nav-links li a:hover {
    color: var(--primary-color);
  }
  
  .nav-links li a.active {
    color: var(--primary-color);
  }
  
  .nav-links li a.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
    border-radius: 1px;
  }
  
  /* Mobile styles */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
  }
  
  .menu-toggle span {
    display: block;
    width: 24px;
    height: 3px;
    background: var(--text-color);
    border-radius: 3px;
    position: relative;
    transition: 0.3s;
  }
  
  .menu-toggle span::before,
  .menu-toggle span::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    background: var(--text-color);
    border-radius: 3px;
    transition: 0.3s;
  }
  
  .menu-toggle span::before {
    transform: translateY(-8px);
  }
  
  .menu-toggle span::after {
    transform: translateY(8px);
  }
  
  .menu-toggle span.open {
    background: transparent;
  }
  
  .menu-toggle span.open::before {
    transform: rotate(45deg);
  }
  
  .menu-toggle span.open::after {
    transform: rotate(-45deg);
  }
  
  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  
    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.95);
      padding: 1rem 0;
      display: none;
    }
  
    .nav-links.open {
      display: flex;
    }
  
    .nav-links li {
      margin: 0.5rem 0;
      text-align: center;
    }
  }
  .logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.logo-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}
  </style>
  