<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="products" class="font-bold text-2xl"
          >Navein's Merch</NuxtLink
        >
      </nav>
    </header>
    <!-- Output page content -->

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/" class="btn2">Home </NuxtLink></li>
        <li><NuxtLink to="/about" class="btn2">About </NuxtLink></li>
        <li><NuxtLink to="/products" class="btn2">Products </NuxtLink></li>
      </ul>
      <ul>
        <button class="btn3 flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
        </button>
      </ul>
    </footer>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: aquamarine;
}

.btn2:hover {
  border-bottom: 3px solid aquamarine;
  padding-bottom: 5px; /* Add bottom padding */
} /* Aquamarine underline on hover */

.btn2 {
  font-size: large;
  font-weight: bold;
}
</style>
