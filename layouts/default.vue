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
      <slot name="page-content" />
      <!-- when it sees <slot/> inside a layouts folder, it'll notice that it's a page content -->
    </div>
  </div>

  <router-view v-slot="{Component}">
    <transition name="route" mode="out-in">
      <slot name="page-content">
        <component :is="Component" />
      </slot>
    </transition>
  </router-view>
</template>

<style scoped>
.router-link-exact-active {
  color: aquamarine;
}

/* route transition */
.route-enter-from{
  opacity: 0;
  transform: translate(100px)
}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translate(-100px)
}
.route-leave-active{
  transition: all 0.3s ease-in;
}
</style>
