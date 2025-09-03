<template>
    <section class="banner_small">
        <div class="container py-5">
            <h1>About Shoppe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores cum dolore veritatis rem! Alias tempora libero eius voluptatibus! Alias, laudantium officiis. Ab aliquam quia deserunt sint, cumque expedita eius?</p>
        </div>
    </section>
    <Footer />
</template>
<script>
import Footer from '@/components/Footer.vue'

export default {
    name: 'AboutView',
    components: {
        Footer
    }
}
</script>
<style>
.banner_small {
    background-image: url('../assets/banner/banner.png');
    background-size: cover;
    background-position: center;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>