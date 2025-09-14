import { ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const productStore = defineStore('useproduct', () => {
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
})