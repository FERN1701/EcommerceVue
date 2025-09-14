import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'

export const useTeamStore = defineStore('teamStore', () => {
        const ecomteams = ref([])
        const newteams = ref({ name: '', position: '', image: null})
        const editTeamIndex = ref(null)
        const updateTeam = ref({ name: '', position: '', image: null})

        onMounted(() => {
            const storedTeams = localStorage.getItem('my-teams')
            if(storedTeams){
                ecomteams.value = JSON.parse(storedTeams)
            }
        }),
        watch(
        ecomteams,
        (val) => localStorage.setItem('my-teams', JSON.stringify(val)),
        { deep: true }
        )
         const handleImageUpload = (event) => {
            const file = event.target.files[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = () => {
            newteams.value.image = reader.result
            }
            reader.readAsDataURL(file)
        }

        const handleEditImageUpload = (event) => {
            const file = event.target.files[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = () => {
            updateTeam.value.image = reader.result
            }
            reader.readAsDataURL(file)
        }
        const addTeams = () => {
            if(newteams.value.name.trim()){
                ecomteams.value.push({...newteams.value})
                console.log('Added teams succefully')
                newteams.value = { name: '', position: '', image: ''}
            }
        }

        const TeamIndexEdit = (index) => {
            editTeamIndex.value = index
            updateTeam.value = { ...ecomteams.value[index] }
        }

        const UpdateTeamDetails = () => {
            if(editTeamIndex !== null){
                ecomteams.value[editTeamIndex.value] = { ...updateTeam.value}
                console.log('updated')
                editTeamIndex.value = null
                updateTeam.value = {name: '', position: '', image: ''}
            }
        }
     
        const deleteTeam = (index) => {
            ecomteams.value.splice(index, 1)
        }
        return{
            addTeams,
            deleteTeam,
            TeamIndexEdit,
            UpdateTeamDetails,
            handleImageUpload,
            handleEditImageUpload,
            newteams,
            ecomteams,
            editTeamIndex,
            updateTeam

        }
})