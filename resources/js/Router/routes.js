const routes = [
    {
        path:'',
        component: () => import('../Pages/Dashboard.vue'),
        name:'dashboard'
    },
    {
        path:'/billing',
        component: () => import('../Pages/Billing.vue'),
        name:'billing'
    },
    {
        path:'/case-management',
        component: () => import('../Pages/CaseManagement.vue'),
        name:'CaseManagement'
    },
    {
        path:'/case-management/single-case',
        component: () => import('../Pages/SingleCase.vue'),
        name:'SingleCase'
    },
]

export default routes;