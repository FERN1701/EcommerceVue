import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'


export const useCompanystore = defineStore('usecompany', ()=> {
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
})