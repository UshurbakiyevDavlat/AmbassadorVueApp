<template>
  <div class="container">
    <main>
      <div class="py-5 text-center">
        <h2>Success</h2>
        <p class="lead">Your purchase has been completed!</p>
      </div>
    </main>
  </div>
</template>

<script>

import {post} from "axios";

export default {
  name: "Success",
  async mounted() {
    const route = useRoute();

    const {data} = await post('/orders/confirm', {
      source: route.query.source
    });

    console.log(data);
  }
}
</script>
