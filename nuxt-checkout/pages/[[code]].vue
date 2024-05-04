<template>
  <div class="container">
    <main>
      <div class="py-5 text-center">
        <h2>Welcome</h2>
        <p class="lead">{{ data?.user.first_name }} {{ data?.user.last_name }} has invited you to buy these products!</p>
      </div>

      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Products</span>
          </h4>
          <ul class="list-group mb-3">
            <template v-for="product in data?.products">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">{{ product.title }}</h6>
                  <small class="text-muted">{{ product.description }}</small>
                </div>
                <span class="text-muted">${{ product.price }}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Quantity</h6>
                </div>
                <input v-model="data.quantities[product.id]" class="text-muted form-control quantity" type="number" min="0"/>
              </li>
            </template>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${{ total() }}</strong>
            </li>
          </ul>
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Personal Info</h4>
          <form class="needs-validation" @submit.prevent="submit">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input v-model="inputModel.first_name" type="text" class="form-control" id="firstName" placeholder="First Name"
                       required>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input v-model="inputModel.last_name" type="text" class="form-control" id="lastName" placeholder=""
                       required>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <input v-model="inputModel.email" type="email" class="form-control" id="email" placeholder="you@example.com">
              </div>

              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input v-model="inputModel.address" type="text" class="form-control" id="address" placeholder="1234 Main St"
                       required>
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">Country</label>
                <input v-model="inputModel.country" type="text" class="form-control" id="country" placeholder="Country">
              </div>

              <div class="col-md-4">
                <label for="city" class="form-label">City</label>
                <input v-model="inputModel.city" type="text" class="form-control" id="city" placeholder="City">
              </div>

              <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input v-model="inputModel.zip" type="text" class="form-control" id="zip" placeholder="Zip">
              </div>
            </div>

            <hr class="my-4">

            <button class="w-100 btn btn-primary btn-lg" type="submit">Checkout</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import axios from "axios";
  import {reactive} from "vue";
  const route = useRoute();

  const {data} = useAsyncData(async () => {
    const {data} = await axios.get(`/links/${route.params.code}`);

    const user = data.user;
    const products = data.products;
    let quantities: any[] = [];

    products.forEach((p: any) => {
      quantities[p.id] = 0;
    });

    return {
      user,
      products,
      quantities
    }
   })

  const inputModel = reactive(
      {
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        country: '',
        city: '',
        zip: '',
      }
  )

  const stripe = await useClientStripe();

    const submit = async () =>  {
      const response = await axios.post('/orders', {
        first_name: inputModel.first_name,
        last_name: inputModel.last_name,
        email: inputModel.email,
        address: inputModel.address,
        country: inputModel.country,
        city: inputModel.city,
        zip: inputModel.zip,
        code: route.params.code,
        products: data.value?.products.map((p: any) => ({
          product_id: p.id,
          quantity: data.value.quantities[p.id]
        }))
      })

      await stripe.redirectToCheckout({
        sessionId: response.id
      })
    }

    const total = () => {
      return data.value?.products.reduce((s: number, p: any) => {
        return s + p.price * data.value.quantities[p.id];
      }, 0);
  }
</script>

<style scoped>
.quantity {
  width: 65px;
}
</style>
