<template>
    <div class="card w-100 m-3 shadow border-0">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ content }}</p>
            <span>${{ price }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: { "title": String, "content": String, "price": Number}
}
</script>
