<template>
    <AdminNav />
    <section class="container">
        <div class="container-fluid py-5">
             <router-view/>
        </div>
    </section>
</template>
<script>
import AdminNav from '@/components/administrator/AdminNav.vue';
import Team from '@/components/Team.vue'
import Products from '@/views/administrator/Products.vue'
import { onMounted, ref } from 'vue'
import Dashboard from '@/views/administrator/Dashboard.vue'
export default {
    name: 'AdminLayout',
    components: {
        AdminNav,
        Team,
		Products,
		Dashboard,
	},
    

}
</script>
<style>
.RouterLink {
    text-decoration: none;
    color: inherit;
}
</style>