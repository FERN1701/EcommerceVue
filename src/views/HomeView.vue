<template>
    <section class=" banner">
        <div class="container-fluid">
            <div class="d-flex justify-content-center align-items-center flex-column" style="height: 80vh;">
                <h1 class="display-1">Welcome to Shoppe</h1>
                <p class="lead">Your one-stop shop for all things fashion.</p>
                <button class="btn btn-danger"><i class="fi fi-sr-box-open-full"></i> Shop Now</button>
            </div>
        </div>
    </section>
    <section class="containe py-5">
        <div class="container-fluid">
            <div class="d-flex justify-content-center align-items-center text-center flex-column" style="width: 80%; margin: auto;">
                <h3>These are the fresh item we select for you</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus necessitatibus possimus dolores labore est officiis ut maxime rerum dignissimos, distinctio at explicabo suscipit porro aliquid. Ab mollitia pariatur illo.</p>
            </div>
            <div class="d-flex justify-content-center">
                <ProductsList />
            </div>
        </div>
    </section>
    <Footer />
</template>

<script>
import ProductsList from  '../components/ProductsList.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'HomeView',
    components: {
        ProductsList,
        Footer
    }
}
</script>

<style>
.banner {
    background-image: url('../assets/banner/banner.png');
    background-size: cover;
    background-position: center;
    height: 80vh;
}
</style>
