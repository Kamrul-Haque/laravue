import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';
import Example2 from './components/Example2';
import Bookables from './Bookable/Bookables'

const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "home",
    },
    {
        path: "/second",
        component: Example2,
        name: "second",
    },
    {
        path: "/bookable",
        component: Bookables,
        name: "bookable",
    },
];

const router = new VueRouter({
    routes,
    base: "/laravue/public/",
    mode: 'history'
});

export default router;
