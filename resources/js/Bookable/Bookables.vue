<template>
    <div>
        <bookable-item :title="item1.title" content="Content" :price="item1.price"></bookable-item>
        <bookable-item title="Item 2" content="Content 2" :price="1000"></bookable-item>
    </div>
</template>

<script>
import BookableItem from './BookableItem'

export default {
    components: {
        BookableItem,
    },
    data() {
        return {
            item1: {
                title: "Cheap Villa",
                price: 100
            }
        }
    },
    created() {
        setTimeout(()=>{
            this.item1.title = "Expensive Villa",
            this.item1.price = 20000;
        }, 3000)
    },
}
</script>
