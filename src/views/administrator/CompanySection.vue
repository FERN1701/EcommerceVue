<template>
    <div class="">
        <h1>Company Section ({{companies.length}})</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in aspernatur illum</p>
    </div>
    <div class="row py-5">
        <div class="col-sm-6 mb-3">
            <p>Please input the right detail of the company .</p>
            <form v-if="companyIndex !== null" @submit.prevent="UpdateCompany">
                <div class="row">
                    <div class="col-sm-6">
                    <label for="">Company Icon</label>
                    <input type="text" v-model="companyUpdate.icon" id="" class="form-control">
                </div>
                <div class="col-sm-6">
                    <label for="">Company Name</label>
                    <input type="text"  v-model="companyUpdate.name" id="" class="form-control">
                </div>
                <div class="col-sm-6">
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </div>
                </div>
            </form>
            <form v-else @submit.prevent="addCompanies">
                <div class="row">
                    <div class="col-sm-6">
                    <label for="">Company Icon</label>
                    <input type="text" v-model="newCompanies.icon" id="" class="form-control">
                </div>
                <div class="col-sm-6">
                    <label for="">Company Name</label>
                    <input type="text"  v-model="newCompanies.name" id="" class="form-control">
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
                    <tbody v-if="companies.length !=0">
                        <tr v-for="(company, index) in companies" :key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td class="d-flex align-items-center"><i :class="[company.icon, 'fs-1 me-2']"></i>{{ company.name }}</td>
                            <td>
                                <a @click="companyIndexEdit(index)" class="btn btn-sm btn-primary me-1">Edit</a>
                                <a @click="deleteCompanies(index)" class="btn btn-sm btn-danger">Delete</a>
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
<script>
import { ref, watch, onMounted} from 'vue'
export default {
    name: 'CompanySection',
    setup (){
        const companies = ref([])
        const newCompanies = ref({ icon: '', name: ''})
        const companyIndex = ref(null)
        const companyUpdate = ref({ icon: '', name: ''})

        onMounted(() => {
            const storedCompanies = localStorage.getItem('list-companies')
            if (storedCompanies){
                companies.value = JSON.parse(storedCompanies)
            }
        })

        watch(
            companies,
            (val) => localStorage.setItem('list-companies', JSON.stringify(val)),
            { deep: true}
        )

        const addCompanies = () =>{
            if(newCompanies.value.icon.trim()){
                companies.value.push({...newCompanies.value})
                console.log('Company Added Successfully')
                newCompanies.value = {icon: '', name: ''}
            }
        }

        const companyIndexEdit = (index) =>{
            companyIndex.value = index
            companyUpdate.value = {...companies.value[index]}
        }

        const UpdateCompany = () =>{
            if(companyIndex!== null){
                companies.value[companyIndex.value] = {...companyUpdate.value}
                console.log('updated')
                companyIndex.value = null
                companyUpdate.value = { icon: '', name: ''}
            }
        }

        const deleteCompanies = (index) => {
            companies.value.splice(index,1)
        }
       
        return{
            companies,
            newCompanies,
            companyIndex,
            companyUpdate,
            addCompanies,
            companyIndexEdit,
            UpdateCompany,
            deleteCompanies

        }
    }
}
</script>
<style >
    #icons{
    font-size: 30px;
    }
</style>
