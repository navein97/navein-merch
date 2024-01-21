export default defineEventHandler(async (event) => {
  //   //handle query params
  //   const { name } = useQuery(event);

  //   //handle post data
  //   const { age } = await useBody(event);
  //   //use await keyword before it otherwise we wont get the actual value here.

  //1. api call
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_i6fGS98NcWp5NcWWL9LLfoPD5zJJVKOFKOyYQfvG"
  );

  //3. get data back
  return data;
});

// cloud >> backend >> cloud >> frontend
