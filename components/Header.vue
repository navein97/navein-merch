<template>
  <v-app-bar>
    <v-toolbar-title @click="$router.push('/')">
      Shopping Website
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="$router.push('/Cart')" class="text-none" stacked>
      <v-badge :content="cartStore.productsTotal" color="error">
        <button>
          <i class="material-icons mr-2">add_shopping_cart</i>
        </button>
      </v-badge>
    </v-btn>
    <v-btn
      :prepend-icon="
        theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      @click="cartStore.toggleTheme()"
    >
      Toggle Theme
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
</style>