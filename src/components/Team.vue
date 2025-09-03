<template>
    <section class="container py-5">
        <div class="container-fluid">
            <div class="d-flex flex-column justify-content-center align-items-center" style="width: 80%; margin: auto; text-align: center;">
                <h1>Our Dedicated Teams</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellendus! Nisi voluptate ipsam esse aliquid doloremque maiores eveniet reiciendis? Consequuntur quis atque nobis rerum architecto aspernatur, soluta voluptatum similique illum.</p>
            </div>
        </div>
        <div class="container-fluid py-5">
            <div class="row g-3">

                <div v-for="(team, id) in teamMembers" :key="id" class="col-6 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <img :src="team.profile" alt="" class="img-fluid">
                                </div>
                                <div class="col-sm-8">
                                    <h5 class="card-title">{{ team.name }}</h5>
                                    <p class="card-text">Role: {{ team.role }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
</template>
<script>
import Team from '@/components/Team.vue'
import TeamMates from '../assets/user/programmer.png'
export default {
    name: 'Team',
    data () {
        return {
            teamMembers: [
                { id: 1, profile:TeamMates, name: 'Team Member 1', role: 'Developer' },
                { id: 2, profile:TeamMates, name: 'Team Member 2', role: 'Designer' },
                { id: 3, profile:TeamMates, name: 'Team Member 3', role: 'Product Manager' },
                { id: 4, profile:TeamMates, name: 'Team Member 4', role: 'QA Engineer' },
                { id: 5, profile:TeamMates, name: 'Team Member 5', role: 'DevOps Engineer' },
                { id: 6, profile:TeamMates, name: 'Team Member 6', role: 'Business Analyst' }
            ]
        }
    }
}
</script>