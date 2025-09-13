<template>
    <h1>Products Section</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione perspiciatis ducimus assumenda laborum iste, vitae quasi reprehenderit aperiam cumque natus eveniet iure beatae, dignissimos modi molestias vel ex provident facilis.</p>
    
    <div class="row py-3">
        <div class="col-sm-6">
            <form v-if="editProductIndex !==null" @submit.prevent="updateProduct">
                <p>Now editing</p>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="productName">Product Image</label>
                            <input type="file" class="form-control" @change="handleEditImageUpload" >
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="productName">Product Name</label>
                            <input type="text" class="form-control" id="productName" v-model="editProjectdetails.name" placeholder="Enter product name">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="productPrice">Product Price</label>
                            <input type="text" class="form-control" id="productPrice" v-model="editProjectdetails.price" placeholder="Enter product price">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="productDescription">Product Description</label>
                            <textarea class="form-control" id="productDescription" rows="3" v-model="editProjectdetails.description" placeholder="Enter product description"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-4">
                       <button type="submit" class="btn btn-success mt-3">Edit Project</button>
                    </div>
                </div>
                
            </form>
            <form v-else @submit.prevent="addProducts">
                <p>Please fill out all areas of forms</p>
                <div class="py-2" v-if="newecomproducts.name || newecomproducts.image || newecomproducts.price">
                    <div class="card py">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <img :src="newecomproducts.image" alt="" class="img-fluid" width="100px">
                            </div>
                            <div class="col-sm-8">
                                <div class="d-flex justify-content-between">
                                    <h6>Product Name : {{newecomproducts.name}}</h6>
                                    <p>Price: {{newecomproducts.price}}</p>
                                </div>
                                <p>Description: <br> {{newecomproducts.description}} <br>
                                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                </div>
                
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="productName">Product Image</label>
                            <input type="file" class="form-control" @change="handleImageUpload" >
                        </div>
                    </div>
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
            <h6>Total Products ( {{ ecomproducts.length}} )</h6>
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
                        <td> <img :src="product.image" alt="" width="30px"> {{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td class="">
                            <a class="btn btn-sm btn-primary me-2" @click="editProducts(index)">Edit</a>
                            <a  class="btn btn-sm btn-danger" @click="deleteProduct(index)">Delete</a>
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
        const newecomproducts = ref({ image: '', name: '', price: '', description: '' })
        const editProductIndex = ref(null)
        const editProjectdetails = ref({image: '', name: '', price: '', description: ''})
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
                newecomproducts.value = { image: '', name: '',price: '', description: '' }
            }
        }

        const handleImageUpload = (event) => {
            const file = event.target.files[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = () => {
            newecomproducts.value.image = reader.result
            }
            reader.readAsDataURL(file)
        }

        const handleEditImageUpload = (event) => {
            const file = event.target.files[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = () => {
            editProjectdetails.value.image = reader.result
            }
            reader.readAsDataURL(file)
        }

        const deleteProduct = (index) => {
            ecomproducts.value.splice(index,1)
        }

        const editProducts = (index) => {
            console.log(index)
            editProductIndex.value = index
            editProjectdetails.value = { ...ecomproducts.value[index] }

        }
        const updateProduct = () =>{
            if(editProductIndex.value !== null){
                ecomproducts.value[editProductIndex.value] = {...editProjectdetails.value}
                editProductIndex.value = null
                editProjectdetails.value = { image: '', name: '', price: '', description: ''}
            }
        }
        return { handleEditImageUpload, handleImageUpload, ecomproducts,editProductIndex , editProjectdetails, newecomproducts, addProducts,updateProduct, deleteProduct, editProducts}
    }
}
</script>