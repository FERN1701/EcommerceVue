<template>
    <h1>Products Section</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione perspiciatis ducimus assumenda laborum iste, vitae quasi reprehenderit aperiam cumque natus eveniet iure beatae, dignissimos modi molestias vel ex provident facilis.</p>
    
    <div class="row py-3">
        <div class="col-sm-6">
            <form v-if="listproducts.editProductIndex !==null" @submit.prevent="listproducts.updateProduct">
                <p>Now editing</p>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="productName">Product Image</label>
                            <input type="file" class="form-control" @change="listproducts.handleEditImageUpload" >
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="productName">Product Name</label>
                            <input type="text" class="form-control" id="productName" v-model="listproducts.editProjectdetails.name" placeholder="Enter product name">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="productPrice">Product Price</label>
                            <input type="text" class="form-control" id="productPrice" v-model="listproducts.editProjectdetails.price" placeholder="Enter product price">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="productDescription">Product Description</label>
                            <textarea class="form-control" id="productDescription" rows="3" v-model="listproducts.editProjectdetails.description" placeholder="Enter product description"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-4">
                       <button type="submit" class="btn btn-success mt-3">Edit Project</button>
                    </div>
                </div>
                
            </form>
            <form v-else @submit.prevent="listproducts.addProducts">
                <p>Please fill out all areas of forms</p>
                <div class="py-2" v-if="listproducts.newecomproducts.name || listproducts.newecomproducts.image || listproducts.newecomproducts.price">
                    <div class="card py">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <img :src="listproducts.newecomproducts.image" alt="" class="img-fluid" width="100px">
                            </div>
                            <div class="col-sm-8">
                                <div class="d-flex justify-content-between">
                                    <h6>Product Name : {{listproducts.newecomproducts.name}}</h6>
                                    <p>Price: {{listproducts.newecomproducts.price}}</p>
                                </div>
                                <p>Description: <br> {{listproducts.newecomproducts.description}} <br>
                                
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
                            <input type="file" class="form-control" @change="listproducts.handleImageUpload" >
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="productName">Product Name</label>
                            <input type="text" class="form-control" id="productName" v-model="listproducts.newecomproducts.name" placeholder="Enter product name">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="productPrice">Product Price</label>
                            <input type="text" class="form-control" id="productPrice" v-model="listproducts.newecomproducts.price" placeholder="Enter product price">
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for="productDescription">Product Description</label>
                            <textarea class="form-control" id="productDescription" rows="3" v-model="listproducts.newecomproducts.description" placeholder="Enter product description"></textarea>
                        </div>
                    </div>
                    <div class="col-sm-4">
                       <button type="submit" class="btn btn-primary mt-3">Add Project</button>
                    </div>
                </div>
                
            </form>
        </div>
        <div class="col-sm-6">
            <h6>Total Products ( {{ listproducts.ecomproducts.length}} )</h6>
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
                    
                    <tr v-if="listproducts.ecomproducts.length === 0">
                        <td colspan="4" class="text-center">No items stored</td>
                    </tr>
                    <tr v-else v-for="(product, index) in listproducts.ecomproducts" :key="index">
                        <th scope="row">{{index + 1}}</th>
                        <td> <img :src="product.image" alt="" width="30px"> {{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td class="">
                            <a class="btn btn-sm btn-primary me-2" @click="listproducts.editProducts(index)">Edit</a>
                            <a  class="btn btn-sm btn-danger" @click="listproducts.deleteProduct(index)">Delete</a>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import Products from '@/views/administrator/Products.vue'
import { productStore } from '../../stores/productStore'
const listproducts = productStore()
</script>