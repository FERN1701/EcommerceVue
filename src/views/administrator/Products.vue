<template>
    <h1>Products Section ({{ecomproducts.length}})</h1>
    <div class="row">
        <div class="col-sm-6">
            <form  @submit.prevent="addProducts">
                
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="productName">Product Name</label>
                            <input type="text" class="form-control" id="productName" v-model="newecomproducts.name" placeholder="Enter product name">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="productPrice">Product Price</label>
                            <input type="text" class="form-control" id="productPrice" v-model="newecomproducts.price" placeholder="Enter product price">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="productDescription">Product Description</label>
                            <textarea class="form-control" id="productDescription" rows="3" v-model="newecomproducts.description" placeholder="Enter product description"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-4">
                       <button type="submit" class="btn btn-primary mt-3">Add Project</button>
                    </div>
                </div>
                
            </form>
        </div>
        <div class="col-sm-6">
            <div class="table-responsive">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-if="ecomproducts.length === 0">
                        <td colspan="4" class="text-center">No items stored</td>
                    </tr>
                    <tr v-else v-for="(product, index) in ecomproducts" :key="index">
                        <th scope="row">{{index + 1}}</th>
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td>
                            <a  class="btn btn-danger" @click="deleteProduct(index)">Delete</a>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import Products from '@/views/administrator/Products.vue'
import { onMounted, ref, watch } from 'vue'
export default {
    name: 'Products',
    setup () {
        const ecomproducts = ref([])
        const newecomproducts = ref({ name: '', price: '', description: '' })

         onMounted(() => {
        const stored = localStorage.getItem('myProducts')
        if (stored) ecomproducts.value = JSON.parse(stored)
        })

        // Save to localStorage
        watch(
        ecomproducts,
        (val) => localStorage.setItem('myProducts', JSON.stringify(val)),
        { deep: true }
        )
        const addProducts = () => {
            if (newecomproducts.value.name.trim()) {
                ecomproducts.value.push({ ...newecomproducts.value })
                console.log('Success')
                newecomproducts.value = { name: '',price: '', description: '' }
            }
        } 
        const deleteProduct = (index) => {
            ecomproducts.value.splice(index,1)
        } 
        return { ecomproducts, newecomproducts, addProducts, deleteProduct}
    }
}
</script>