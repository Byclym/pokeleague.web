import { createRouter, createWebHistory } from 'vue-router'

import BattleTest from '../views/Test/BattleTestView.vue'
import NewGame from '../views/Test/NewGameView.vue'
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
            path: '/test/game',
            name: 'NewGame',
            component: NewGame,
        },
        {
            path: '/test/evolve',
            name: 'Evolve',
            component: Evolve,
        }
    ]
})

export default router
