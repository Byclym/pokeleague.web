import { createRouter, createWebHistory } from 'vue-router'

import BattleTest from '../views/Test/BattleTestView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/test/battle',
            name: 'BattleTest',
            component: BattleTest,
        }
    ]
})

export default router
