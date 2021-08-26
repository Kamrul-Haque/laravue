<template>
    <div>
        <nav class="navbar navbar-light bg-white shadow-sm sticky-top">
            <div class="container">
                <router-link class="navbar-brand" :to="{ name: 'home' }">Home</router-link>
                <ul class="nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'second' }">Second</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'bookable' }">Bookables</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'bookable.create' }">Create Bookable</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container py-4">
            <router-view></router-view>
        </div>
    </div>
</template>
