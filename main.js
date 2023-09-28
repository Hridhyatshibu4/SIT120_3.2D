// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your components for each route
import LoginPortfolio from './components/LoginPortfolio.vue'
import ResumePortfolio from './components/ResumePortfolio.vue'
import BlogPortfolio from './components/BlogPortfolio.vue'

const routes = [
  { path: '/', component: LoginPortfolio },
  { path: '/resume-portfolio', component: ResumePortfolio },
  { path: '/blog-portfolio', component: BlogPortfolio }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router) // Use Vue Router

app.mount('#app')
