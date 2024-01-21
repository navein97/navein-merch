<template>
  <div>
    <Head>
      <Title>Navein's Merch | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
      <!-- override value from nuxt.config.ts -->
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
// {id} = [id].vue
// params = route parameters
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// //fetch the product
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    fatal: true,
    //the fatal: true property within the error object signifies that the error is considered critical and should not be handled within the current code block. It indicates that the application cannot continue with its normal execution flow.
  });
}

definePageMeta({
  layout: "products",
}); //function that has argument
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
