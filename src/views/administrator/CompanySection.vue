<template>
    <div class="">
        <h1>Company Section ({{companystore.companies.length}})</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in aspernatur illum</p>
    </div>
    <div class="row py-5">
        <div class="col-sm-6 mb-3">
            <p>Please input the right detail of the company .</p>
            <form v-if="companystore.companyIndex !== null" @submit.prevent="companystore.UpdateCompany">
                <div class="row">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <i :class="[companystore.companyUpdate.icon]" style="font-size: 150px;"></i>
                    </div>
                    <div class="col-sm-6">
                        <label for="">Company Icon</label>
                        <input type="text" v-model="companystore.companyUpdate.icon" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <label for="">Company Name</label>
                        <input type="text"  v-model="companystore.companyUpdate.name" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    </div>
                </div>
            </form>
            <form v-else @submit.prevent="companystore.addCompanies">
                <div class="row">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <i :class="[companystore.newCompanies.icon]"  style="font-size: 150px;"></i>
                    </div>
                    <div class="col-sm-6">
                    <label for="">Company Icon</label>
                    <input type="text" v-model="companystore.newCompanies.icon" id="" class="form-control">
                </div>
                <div class="col-sm-6">
                    <label for="">Company Name</label>
                    <input type="text"  v-model="companystore.newCompanies.name" id="" class="form-control">
                </div>
                <div class="col-sm-6">
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </div>
                </div>
            </form>
        </div>
        <div class="col-sm-6">
            <p>These are the list of Support companies in ecommerce</p>
            <div class="py-3 table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="companystore.companies.length !=0">
                        <tr v-for="(company, index) in companystore.companies" :key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td class="d-flex align-items-center"><i :class="[company.icon, 'fs-1 me-2']"></i>{{ company.name }}</td>
                            <td>
                                <a @click="companystore.companyIndexEdit(index)" class="btn btn-sm btn-primary me-1">Edit</a>
                                <a @click="companystore.deleteCompanies(index)" class="btn btn-sm btn-danger">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="4">No data found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCompanystore } from '../../stores/companyStore'
const companystore = useCompanystore()
</script>
<style >
    #icons{
    font-size: 30px;
    }
</style>
