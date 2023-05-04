import { createRouter, createWebHistory } from 'vue-router'

import BattleTest from '../views/Test/BattleTestView.vue'
import Evolve from '../views/Test/EvolveView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/test/battle',
            name: 'BattleTest',
            component: BattleTest,
        },
        {
            path: '/test/evolve',
            name: 'Evolve',
            component: Evolve,
        }
    ]
})

export default router
