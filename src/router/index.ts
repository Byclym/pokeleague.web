import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../views/HomeView.vue'
// import About from '../views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: '/', 
        //     name: 'Home', 
        //     component: Home
        // },
        // {
        //     path: '/about', 
        //     name: 'About', 
        //     component: About
        // }
    ]
})

export default router
