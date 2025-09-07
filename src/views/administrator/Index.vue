<template>
    <AdminNav />
    <section class="container py-5">
        <div class="container-fluid">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. Here you can manage your application.</p>
            <div class="row py-3 g-3">
                <div class="col-sm-4">
                    <div class="card ">
                        <div class="card-body">
                            <div class="row d-flex align-items-center">
                                <div class="col-sm-4"><h1>04</h1></div>
                                <div class="col-sm-8"><h4> <i class="fi fi-sr-box-open-full text-success"></i> Products</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row d-flex align-items-center">
                                <div class="col-sm-4"><h1>08</h1></div>
                                <div class="col-sm-8"><h4><i class="fi fi-sr-hands-together text-success"></i> Teams</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row d-flex align-items-center">
                                <div class="col-sm-4"><h1>09</h1></div>
                                <div class="col-sm-8"><h4><i class="fi fi-sr-building text-success"></i> Companies</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import AdminNav from '@/components/administrator/AdminNav.vue';
export default {
    name: 'Index',
    components: {
        AdminNav
    }
}
</script>