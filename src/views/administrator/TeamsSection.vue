<template>
    <h2>Team Management Section ({{ teamStore.ecomteams.length }})</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias doloremque facilis totam inventore voluptatibus quae. Est obcaecati voluptatibus quos officiis, consectetur, reiciendis vero blanditiis earum eum laboriosam architecto similique!</p>
    <div class="row py-5">
        <div class="col-sm-4">
            <form v-if="teamStore.editTeamIndex !== null" @submit.prevent="teamStore.UpdateTeamDetails" >
                <p>Now on Editing mode: <br>
                    Account: {{teamStore.updateTeam.name}}</p>
                <div class="row">
                     <div class="col-sm-12">
                        <div class="label">Profile</div>
                        <input type="file" accept="image/*" @change="teamStore.handleEditImageUpload" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <div class="label">Full Name</div>
                        <input type="text" v-model="teamStore.updateTeam.name" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <div class="label">Position</div>
                        <input type="text" v-model="teamStore.updateTeam.position" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <button type="submit" class="btn btn-sm btn-primary mt-3">Modify</button>
                    </div>
                </div>
            </form>
            <form v-else @submit.prevent ="teamStore.addTeams" >
                <p>Please to make sure to fill all required items below.</p>
                <div class="py-2 card">
                    <div class="card-body">
                        <div class="row">
                            <div v-if="teamStore.newteams.image || teamStore.newteams.name || teamStore.newteams.position" class="col-12 d-flex justify-content-center align-items-center flex-column">
                                <img v-if="teamStore.newteams.image" :src="teamStore.newteams.image" alt="" width="100px">
                                <img v-else :src="teamImage" alt="" width="100px">
                                <h4 class="mt-3">{{teamStore.newteams.name}}</h4>
                                <b>{{teamStore.newteams.position}}</b>
                            </div>
                             <div v-else class="col-12 d-flex justify-content-center align-items-center flex-column">
                                <img :src="teamImage" alt="" width="100px">
                                <h4 class="mt-3">Name</h4>
                                <b>Position</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="label">Profile</div>
                        <input type="file" accept="image/*" @change="teamStore.handleImageUpload" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <div class="label">Full Name</div>
                        <input type="text" v-model="teamStore.newteams.name" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <div class="label">Position</div>
                        <input type="text" v-model="teamStore.newteams.position" id="" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <button type="submit" class="btn btn-sm btn-primary mt-3">submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-sm-8">
            <p>These are the team found in your company.</p>
            <div class="py-1" v-if="teamStore.ecomteams.length != 0">
                <Carousel v-bind="carouselConfig" :items-to-show="4" :items-to-scroll="4"  :infinite="true" :wrap-around="true" class="my-4 h-100">
                <Slide class="me-4" v-for="(team, index) in teamStore.ecomteams" :key="index">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">
                                    <img :src="team.image" alt="" class="img-fluid">
                                </div>
                                <div class="col-8">
                                    <h5>{{team.name}}</h5>
                                    <p>{{team.position}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <a @click="teamStore.TeamIndexEdit(index)" class="btn btn-sm btn-primary me-2">Edit</a>
                            <a  class="btn btn-sm btn-danger" @click="teamStore.deleteTeam(index)">Delete</a>
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
<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref, onMounted, watch } from 'vue'
import Products from '@/views/administrator/Products.vue'
import Team from '@/components/Team.vue'
import { useTeamStore } from '../../stores/teamStore'
import Imageuser from '../../assets/user/programmer.png'
const teamStore = useTeamStore()
const teamImage = ref(Imageuser)
</script>