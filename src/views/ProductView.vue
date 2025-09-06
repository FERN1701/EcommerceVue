<template>
    <Nav />
    <section class="small_banner">
        <div class="container">
            <h1>Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam quas accusamus similique dignissimos porro molestias quibusdam voluptatibus! Voluptatibus quidem excepturi eveniet culpa atque, odit autem quaerat officiis unde commodi.</p>
        </div>
    </section>
    <div class="section py-5">
        <div class="container">
            <ProductsList />
        </div>
    </div>
    <Footer />
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import Footer from '@/components/Footer.vue';
import Nav from '../components/PublicNav.vue'
export default {
    name: 'ProductView',
    components: {
        ProductsList,
        Footer,
        Nav
    }
}
</script>


<style>
.small_banner{
    background-image: url('../assets/banner/banner.png');
    background-size: cover;
    background-position: center;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>