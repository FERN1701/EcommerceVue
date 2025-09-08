<template>
    <AdminNav />
    <section class="container py-5">
        <div class="container-fluid">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage your application.</p>
            <div class="row py-3 g-3">
                <div class="col-sm-4">
                    <RouterLink to="/administrator/products" class="RouterLink">
                        <div class="card">
                            <div class="card-body">
                                <div class="row d-flex align-items-center">
                                    <div class="col-sm-4"><h1>{{ecomproducts.length}}</h1></div>
                                    <div class="col-sm-8"><h4><i class="fi fi-sr-box-open-full text-success"></i> Products</h4></div>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-sm-4">
                    <RouterLink to="/administrator/teams" class="RouterLink">
                        <div class="card">
                            <div class="card-body">
                                <div class="row d-flex align-items-center">
                                    <div class="col-sm-4"><h1>12</h1></div>
                                    <div class="col-sm-8"><h4><i class="fi fi-sr-users text-success"></i> Teams</h4></div>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-sm-4">
                    <RouterLink to="/administrator/company" class="RouterLink">
                        <div class="card">
                            <div class="card-body">
                                <div class="row d-flex align-items-center">
                                    <div class="col-sm-4"><h1>09</h1></div>
                                    <div class="col-sm-8"><h4><i class="fi fi-sr-building text-success"></i> Companies</h4></div>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="container-fluid py-5">
             <router-view />
        </div>
    </section>
</template>
<script>
import AdminNav from '@/components/administrator/AdminNav.vue';
import Team from '@/components/Team.vue'
import Products from '@/views/administrator/Products.vue'
import { onMounted, ref } from 'vue'
export default {
    name: 'AdminLayout',
    components: {
        AdminNav,
        Team,
		Products,
	},
    setup () {
        const ecomproducts = ref([])
        const newecomproducts = ref({ name: '', price: '', description: '' })

         onMounted(() => {
        const stored = localStorage.getItem('myProducts')
        if (stored) ecomproducts.value = JSON.parse(stored)
        })
        return{
            ecomproducts
        }
    }

}
</script>
<style>
.RouterLink {
    text-decoration: none;
    color: inherit;
}
</style>