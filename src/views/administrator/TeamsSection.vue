<template>
    <h2>Team Management Section</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias doloremque facilis totam inventore voluptatibus quae. Est obcaecati voluptatibus quos officiis, consectetur, reiciendis vero blanditiis earum eum laboriosam architecto similique!</p>
    <div class="row py-5">
        <div class="col-sm-4">
            <form >
                <p>Please to make sure to fill all required items below.</p>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="label">First Name</div>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <div class="label">last Name</div>
                        <input type="text" name="" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <button type="submit" class="btn btn-sm btn-primary mt-3">submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-sm-8">
            <p>These are the team found in your company.</p>
            <Carousel v-bind="carouselConfig" :items-to-show="4" :items-to-scroll="4"  :infinite="true" :wrap-around="true" class="my-4">
                <Slide >
                    <div class="card">
                        <div class="card-body">
                            hwloo
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation class="my-4" />
                </template>
            </Carousel>
        </div>
    </div>
</template>
<script>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    name: 'TeamsSection',
    components: {
        Carousel, Slide, Pagination, Navigation
    },
       
    const carouselConfig = {
    itemsToShow: 2.5,
    wrapAround: false,
    }
}
</script>