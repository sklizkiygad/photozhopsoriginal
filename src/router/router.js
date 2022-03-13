import Photoshops from "@/pages/Photoshops";
import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import Models from "@/pages/Models";
import Adult from "@/pages/Adult";

const routes=[
    {
        path:'/',
        component:Main
    },
    {
        path:'/ourworks',
        component:Photoshops
    },
    {
        path:'/models',
        component:Models
    },
    {
        path:'/adult',
        component:Adult
    },

]

const router=createRouter({
    routes,

    history:createWebHistory(process.env.BASE_URL)
})

export default router;