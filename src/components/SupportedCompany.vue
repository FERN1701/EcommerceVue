<template>
    <section class="container py-5">
        <div class="container-fluid">
            <div class="d-flex justify-content-center align-items-center flex-column text-center">
                <h1>Supported Companies</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab voluptatibus et? Harum, ut fuga saepe autem unde, deleniti libero ducimus delectus a dolorem nesciunt laborum officia explicabo doloribus repudiandae.</p>
            </div>
        </div>
        <div class="container-fluid">
             <Carousel v-bind="carouselConfig" :items-to-show="4" :items-to-scroll="4"  :infinite="true" :wrap-around="true" class="my-4">
                <Slide v-for="(company, id) in companies" :key="id">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <i :class="company.logo" style="font-size: 100px;"></i>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation class="my-4" />
                </template>
            </Carousel>
        </div>
    </section>
</template>
<script>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    name: 'SupportedCompany',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    props: {
        companies: {
            type: Array,
            required: true
        }
    }
    
}
const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: false,
}
</script>
