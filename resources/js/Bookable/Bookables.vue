<template>
    <div>
        <div v-if="loading">Data Loading...</div>
        <div v-else>
            <div class="row">
                <bookable-item :title="bookable.title" :content="bookable.content" :price="bookable.price" v-for="(bookable, index) in bookables" :key="index" class="col-md-3"></bookable-item>
            </div>
        </div>
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
            bookables: null,
            loading: false,
            // columns: 2
        }
    },
    // computed: {
    //     rows(){
    //         return this.bookables ? Math.ceil(this.bookables.length / this.columns) : 0;
    //     }
    // },
    created() {
        this.loading = true;

        // setTimeout(() => {
        //     this.bookables = [
        //         {
        //             title: "Expensive Villa",
        //             content: "A Very Expensive Villa",
        //             price: 20000
        //         },
        //         {
        //             title: "Cheap Villa",
        //             content: "A Very Cheap Villa",
        //             price: 2500
        //         },
        //         {
        //             title: "Standard Villa",
        //             content: "A Standard Villa",
        //             price: 5000
        //         },
        //         {
        //             title: "Standard Villa 2",
        //             content: "Standard Villa 2",
        //             price: 7000
        //         }
        //     ];

        // this.loading = false;
        // }, 2000)

        const request = axios.get("/laravue/public/api/bookables").then(response => {
            this.bookables = response.data;
            this.loading = false;
        });
        console.log(request);
    },
}
</script>
