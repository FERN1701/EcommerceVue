<template>
   <div class="row py-3 d-flex justify-content-center">
    <div class="col-6 col-md-4 g-4" v-for="(product, index) in ecomproducts" :key="index">
        <div class="card">
            <div class="card-header d-flex justify-content-center align-items-center">
                <img :src="product.image" alt="" class="img-fluid" width="80px">
            </div>
            <div class="card-body">
                <div class="d-flex flex-column">
                    <h5>{{ product.name }}</h5>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <h6>${{ product.price }}</h6><button class="btn btn-danger"><i class="fi fi-sr-shopping-cart-add"></i></button>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import image1 from '../assets/products/products.png'
export default {
    name: 'ProductsList',
    setup () {

        const ecomproducts = ref([])

        onMounted(()=>{
            const Storedproducts = localStorage.getItem('myProducts')
            if (Storedproducts) {
                ecomproducts.value = JSON.parse(Storedproducts)
            }
        })
        return {
            ecomproducts
        }
    }
}
</script>
<style>
.card {
    transition: transform 0.2s;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card:hover {
    transform: scale(1.05);
}
</style>