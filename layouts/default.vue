<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold text-2xl">Navein's Website</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/" class="btn">Home </NuxtLink></li>
          <li><NuxtLink to="/about" class="btn">About </NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products </NuxtLink></li>
        </ul>
      </nav>
    </header>
    <!-- Output page content -->
    <div class="container mx-auto p-4">
      <slot />
      <!-- when it sees <slot/> inside a layouts folder, it'll notice that issa page content -->
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: aquamarine;
}
</style>
