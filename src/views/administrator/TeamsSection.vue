<template>
    <h2>Team Management Section ({{ ecomteams.length }})</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias doloremque facilis totam inventore voluptatibus quae. Est obcaecati voluptatibus quos officiis, consectetur, reiciendis vero blanditiis earum eum laboriosam architecto similique!</p>
    <div class="row py-5">
        <div class="col-sm-4">
            <form v-if="editTeamIndex !== null" @submit.prevent="UpdateTeamDetails" >
                <p>Now on Editing mode</p>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="label">Full Name</div>
                        <input type="text" v-model="updateTeam.name" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <div class="label">Position</div>
                        <input type="text" v-model="updateTeam.position" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <button type="submit" class="btn btn-sm btn-primary mt-3">Modify</button>
                    </div>
                </div>
            </form>
            <form v-else @submit.prevent ="addTeams" >
                <p>Please to make sure to fill all required items below.</p>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="label">Full Name</div>
                        <input type="text" v-model="newteams.name" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <div class="label">Position</div>
                        <input type="text" v-model="newteams.position" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <button type="submit" class="btn btn-sm btn-primary mt-3">submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-sm-8">
            <p>These are the team found in your company.</p>
            <div class="py-1" v-if="ecomteams.length != 0">
                <Carousel v-bind="carouselConfig" :items-to-show="4" :items-to-scroll="4"  :infinite="true" :wrap-around="true" class="my-4 h-100">
                <Slide class="me-4" v-for="(team, index) in ecomteams" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">
                                    <img  alt="" class="img-fluid">
                                </div>
                                <div class="col-8">
                                    <h5>{{team.name}}</h5>
                                    <p>{{team.position}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a @click="TeamIndexEdit(index)" class="btn btn-sm btn-primary me-2">Edit</a>
                            <a  class="btn btn-sm btn-danger" @click="deleteTeam(index)">Delete</a>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation class="my-4" />
                </template>
            </Carousel>
            </div>
            <div class="py-1" v-else>
                No Item Found
            </div>
            
        </div>
    </div>
</template>
<script>
import 'vue3-carousel/carousel.css'
import delivery from '../../assets/package/delivery.png'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref, onMounted, watch } from 'vue'
import Products from '@/views/administrator/Products.vue'
import Team from '@/components/Team.vue'
export default {
    name: 'TeamsSection',
    components: {
        Carousel, 
        Slide, 
        Pagination, 
        Navigation,
    	Products,
		Team,
	},

    setup () {
        const ecomteams = ref([])
        const newteams = ref({ name: '', position: ''})
        const editTeamIndex = ref(null)
        const updateTeam = ref({ name: '', position: ''})

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

        const addTeams = () => {
            if(newteams.value.name.trim()){
                ecomteams.value.push({...newteams.value})
                console.log('Added teams succefully')
                newteams.value = { name: '', position: ''}
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
                updateTeam.value = {name: '', position: ''}
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
            newteams,
            ecomteams,
            editTeamIndex,
            updateTeam

        }
    }
}

</script>