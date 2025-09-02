<template>
   <div class="row py-3 d-flex justify-content-center">
    <div class="col-sm-2 g-4" v-for="(product, id) in products" :key="id">
        <div class="card">
            <div class="card-header d-flex justify-content-center align-items-center">
                <img :src="product.itemImage" alt="" class="img-fluid" width="40px">
            </div>
            <div class="card-body">
                <div class="d-flex flex-column">
                    <h5>{{ product.name }}</h5>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <h6>${{ product.price.toFixed(2) }}</h6><button class="btn btn-danger"><i class="fi fi-sr-shopping-cart-add"></i></button>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import image1 from '../assets/products/products.png'
export default {
    name: 'ProductsList',
    data () {
        return {
            products: [
                {
                    id: 1,
                    name: 'Package 1',
                    itemImage: image1,
                    price: 900
                },
                {
                    id: 2,
                    name: 'Package 2',
                    itemImage: image1,
                    price: 190
                },
                {
                    id: 3,
                    name: 'Package 3',
                    itemImage: image1,
                    price: 780
                },
                {
                    id: 4,
                    name: 'Package 4',
                    itemImage: image1,
                    price: 460
                },
                {
                    id: 5,
                    name: 'Package 5',
                    itemImage: image1,
                    price: 100
                },
                {
                    id: 6,
                    name: 'Package 6',
                    itemImage: image1,
                    price: 100
                },
                {
                    id: 7,
                    name: 'Package 7',
                    itemImage: image1,
                    price: 800
                },
                {
                    id: 8,
                    name: 'Package 8',
                    itemImage: image1,
                    price: 880
                }
            ],
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