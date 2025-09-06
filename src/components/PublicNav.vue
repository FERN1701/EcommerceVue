<template>
    <nav class="navbar  sticky-top navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ecommerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/administrator">Admin</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/products">Products</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About Us</RouterLink>
        </li>
      </ul>
      <div class="cart me-5">
        <i class="fi fi-sr-cart-shopping-fast text-primary fs-4"></i>
         <span class="position-absolute top-5 start-99 translate-middle badge rounded-pill bg-danger">08<span class="visually-hidden">unread messages</span></span>
      </div>
    </div>
  </div>
</nav>
</template>