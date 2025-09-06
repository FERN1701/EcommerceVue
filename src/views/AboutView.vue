<template>
    <Nav />
    <section class="banner_small">
        <div class="container py-5">
            <h1>About Shoppe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur maiores cum dolore veritatis rem! Alias tempora libero eius voluptatibus! Alias, laudantium officiis. Ab aliquam quia deserunt sint, cumque expedita eius?</p>
        </div>
    </section>
    <AboutUs />
    <Team />
    <Supported :companies="companies" />
    <Footer />
</template>
<script>
import Footer from '@/components/Footer.vue'
import AboutUs from '@/components/AboutUs.vue';
import Team from '@/components/Team.vue';
import Supported from '../components/SupportedCompany.vue';
import Nav from '../components/PublicNav.vue'
export default {
    name: 'AboutView',
    components: {
        Footer,
        AboutUs,
        Team,
        Supported,
        Nav   
    },
    data () {
        return {
            companies: [
                {
                    id: 1,
                    name: 'AWS',
                    logo: 'devicon-amazonwebservices-line-wordmark colored'
                },
                {
                    id: 2,
                    name: 'Azure',
                    logo: 'devicon-azure-plain-wordmark colored'
                },
                {
                    id: 3,
                    name: 'Anaconda',
                    logo: 'devicon-anaconda-original-wordmark colored'
                },
                {
                    id: 4,
                    name: 'Anys',
                    logo: 'devicon-ansys-plain-wordmark colored'
                },
                {
                    id: 5,
                    name: 'Apex',
                    logo: 'devicon-apex-original colored'
                },
                {
                    id: 8,
                    name: 'Arch linux',
                    logo: 'devicon-archlinux-plain-wordmark colored'
                },
                {
                    id: 7,
                    name: 'cassandra',
                    logo: 'devicon-nginx-original colore'
                },
                {
                    id: 8,
                    name: 'Firebird',
                    logo: 'devicon-nextjs-original-wordmark colored'
                }
            ]
        }
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