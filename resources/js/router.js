import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';
import Example2 from './components/Example2';
import Bookables from './Bookable/Bookables';
import BookableCreate from './Bookable/BookableCreate';

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
    {
        path: "/bookable-create",
        component: BookableCreate,
        name: "bookable.create",
    },
];

const router = new VueRouter({
    routes,
    base: "/laravue/public/",
    mode: 'history'
});

export default router;
