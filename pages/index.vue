<template>
  <div class="home-content">
    <h2>Express Yourself with Unique Styles at Merch Mania</h2>
    <p>{{ homeText }}</p>
    <section class="features">
      <img
        src="https://cdn.solar-guitars.com/wp-content/uploads/2019/09/Merch-banner-v2.jpeg"
        alt="Home image"
      />
      <ul>
        <li>
          Exclusive Designs: Stand out from the crowd with one-of-a-kind pieces
          you won't find anywhere else.
        </li>
        <li>
          Premium Quality: Our merch is crafted with top-notch materials and
          attention to detail, ensuring comfort and durability.
        </li>
        <li>
          Endless Variety: Explore our wide range of styles, colors, and designs
          to match any mood or occasion.
        </li>
        <li>
          Express Yourself: Whether you're a streetwear aficionado, a pop
          culture fanatic, or a self-proclaimed fashion rebel, we have the
          perfect pieces to help you showcase your personality.
        </li>
      </ul>
      <img
        src="https://cdn.solar-guitars.com/wp-content/uploads/2019/09/Merch-banner-v2.jpeg"
        alt="Home image"
      />
      <ul>
        <li>
          Exclusive Designs: Stand out from the crowd with one-of-a-kind pieces
          you won't find anywhere else.
        </li>
        <li>
          Premium Quality: Our merch is crafted with top-notch materials and
          attention to detail, ensuring comfort and durability.
        </li>
        <li>
          Endless Variety: Explore our wide range of styles, colors, and designs
          to match any mood or occasion.
        </li>
        <li>
          Express Yourself: Whether you're a streetwear aficionado, a pop
          culture fanatic, or a self-proclaimed fashion rebel, we have the
          perfect pieces to help you showcase your personality.
        </li>
      </ul>
      <img
        src="https://cdn.solar-guitars.com/wp-content/uploads/2019/09/Merch-banner-v2.jpeg"
        alt="Home image"
      />
    </section>

    <section class="cta">
      <h3>Ready to Unleash Your Style?</h3>
      <button @click="products">Shop Now</button>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
const products = () => clearError({ redirect: "/products" });
const homeText = ref(
  "Unleash your individuality with our incredible collection of streetwear and accessories! From bold graphic tees to comfy hoodies, statement jewelry to eye-catching bags, we've got everything you need to curate a look that speaks your truth. Explore our curated collection and find pieces that express your unique vibe."
);
</script>

<style scoped>
/* Base styles for a visually appealing layout */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #fff; /* Light background for a clean look */
  color: #333; /* Darker text for readability */
}

/* Home content styles */
.home-content {
  text-align: center; /* Centered for visual impact */
  font-size: 1.2rem;
  line-height: 1.6;
}

.home-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-transform: uppercase; /* Bolder heading */
}

.home-content p {
  margin-bottom: 30px;
}

/* Features section styles */
.features {
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Arrange elements vertically */
  align-items: center; /* Center elements horizontally */
  margin-bottom: 40px;
}

.features img {
  width: 100%; /* Full width */
  margin-bottom: 20px; /* Spacing below image */
  margin-top: 20px;
}

.features ul {
  text-align: left; /* Align feature list to the left */
  margin-bottom: 40px;
}

/* CTA section styles */
.cta {
  text-align: center;
}

.cta h3 {
  margin-bottom: 15px;
}

.cta button {
  padding: 10px 20px;
  background-color: #e53935; /* Red for a bold, attention-grabbing look */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
