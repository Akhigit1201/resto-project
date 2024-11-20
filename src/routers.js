import HomeComponent from './components/HomeComponent.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AddRest from './components/AddRest.vue'
import UpdateRest from './components/UpdateRest.vue'


const routes = [

    {
        name: 'HomeComponent',
        component: HomeComponent,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'AddRest',
        component:AddRest,
        path:'/add'
    },
    {
        name:'UpdateRest',
        component:UpdateRest,
        path:'/update'   
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;