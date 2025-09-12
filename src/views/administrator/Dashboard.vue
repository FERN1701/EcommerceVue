<template>
    <section class="container py">
        <div class="container-fluid">
            <h1>Administrator Dashboard</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque in enim! Quam eligendi aspernatur ipsa molestias harum minima optio iste dolores animi, tenetur, magnam doloribus quia nostrum! Rem, nihil</p>
            <div class="py-5">
                <div class="row g-3">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <h2>{{ecomproducts.length}}</h2>
                                    </div>
                                    <div class="col-8">
                                        <h3><i class="fi fi-sr-box-open-full text-success"></i> Products</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        <h2>{{ ecomteams.length }}</h2>
                                    </div>
                                    <div class="col-8">
                                        <h3><i class="fi fi-sr-hands-together text-success"></i> Teams</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-4"><h2>
                                        {{ companies.length }}
                                    </h2></div>
                                    <div class="col-8"><h3> <i class="fi fi-sr-building text-success fs-2"></i> Companies</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="container py-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                    <h3><i class="fi fi-sr-transaction-euro text-success" style="font-size: 20px;"></i> Transactions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatibus obcaecati corporis mollitia alias voluptates ab,</p>
                </div>
                <div class="col-sm-8">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>@social</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>
<script>
import { ref, watch, onMounted } from 'vue'
export default {
    name: 'Dashboard',
    setup () {
        const ecomproducts = ref([])
        const newecomproducts = ref({ name: '', price: '', description: '' })
        const ecomteams = ref([])
        const companies = ref([])

        onMounted(() => {
            const stored = localStorage.getItem('myProducts')
            if (stored) {
                ecomproducts.value = JSON.parse(stored)
            }

            const TeamStored = localStorage.getItem('my-teams')
            if (TeamStored){
                ecomteams.value = JSON.parse(TeamStored) 
            }

            const storedCompanies = localStorage.getItem('list-companies')
            if (storedCompanies){
                companies.value = JSON.parse(storedCompanies)
            }
        })
        return{
            ecomproducts,
            ecomteams,
            companies
        }
    }
    
}
</script>