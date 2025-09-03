<template>
<section class="container py-5">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6 d-flex align-items-center">
                <div class="row">
                    <div class="col-6 d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 class="fw-bold number_spacing" style="font-size: 100px;">04</h1>
                        <h3 class="spacing">In Service</h3>
                    </div>
                    <div class="col-6 d-flex flex-column justify-content-center align-items-center ">
                        <h3>Of dedicated delivery services</h3>
                    </div>
                    <div class="col-12">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ut, voluptates nihil magni qui dignissimos at accusantium accusamus repellat pariatur architecto asperiores obcaecati. Ipsa laudantium, sequi doloribus impedit perspiciatis eligendi?</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="d-flex flex-column justify-column-center align-items-center ">
                            <img :src="package1" alt="" class="img-fluid m-3" width="180px">
                            <img :src="package2" alt="" class="img-fluid" width="180px">
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex justify-content-center align-items-center">
                        <img :src="package3" alt="" class="img-fluid" width="180px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import package1 from '../assets/package/box.png'
import package2 from '../assets/package/package.png'
import package3 from '../assets/package/food-delivery.png'
export default {
    name: 'AboutUs',
    data () {
        return {
            package1,
            package2,
            package3
        }
    }
}
</script>
<style>
.spacing {
    letter-spacing: 5px;
    font-weight: bold;
}
.number_spacing {
    letter-spacing: 5px;
}
</style>
