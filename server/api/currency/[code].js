export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  //params is www.website.com/product/123 (part) the route id

  const { currencyKey } = useRuntimeConfig();
  //using the runtimeConfig from .env file

  //calling both params and api key
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  //1. api call
  const { data } = await $fetch(uri);
  //use await cuz it's async

  //3. get data back
  return data;
});

//this file name has brackets, for you to put a currency there
