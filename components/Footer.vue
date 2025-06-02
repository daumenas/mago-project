<template>
    <footer class="footer">
      <div class="footer-container">
        <p>&copy; {{ new Date().getFullYear() }} Your Media Company</p>
        <div class="social-icons">
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
.footer {
  background: #f3f0fb; /* lighter background */
  color: #333;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-container p {
  font-size: 0.95rem;
  color: #555;
}

.social-icons a {
  margin: 0 0.75rem;
  font-size: 1.6rem;
  color: var(--primary-color, #6a0dad);
  transition: color 0.3s, transform 0.2s;
}

.social-icons a:hover {
  color: #4e2392;
  transform: scale(1.1);
}

  </style>
  