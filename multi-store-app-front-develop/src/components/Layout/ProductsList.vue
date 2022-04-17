<template>
<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
<p>{{ error }}</p>
</base-dialog>
<section>
    <div v-if="isLoading">
        <base-spinner></base-spinner>
    </div>
    <ul v-else-if="thereIsProducts">
       <product-item
          v-for="product in products"
          :key="product._id"
          :id="product._id"
          :description="product.description"
          :price="product.price"
          :count="product.rate"
          :categoryId="product.categoryId"
          :commerceId="product.commerceId"
          :createdAt="product.createdAt"
          :updatedAt="product.updatedAt"
        ></product-item>
    </ul>
    <h3 v-else>No Products found.</h3>
</section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

let error:any = ref(null);
const isLoading = ref(false);
const thereIsProducts = computed(() => !isLoading.value && products);

/* const products = [{
    _id: '',
    title: '',
    description: '',
    price: 0,
    count: 0,
    categoryId: '',
    commerceId: '',
    createdAt: new Date(),
    updatedAt: new Date()

}]; */

const products = [{
    _id: '1',
    title: 'Lavadora Automatica',
    description: 'Lavadora de 300rpm con opcion de secado',
    price: 200,
    count: 2,
    categoryId: '1',
    commerceId: '3',
    createdAt: '12/11/2021',
    updatedAt: '12/11/2021'

},
{
    _id: '2',
    title: 'Reloj Smartwatch',
    description: 'Capaz de tomarte el pulso, medir el ritmo cardiaco, saber cuantos pasos has dado, cuantos kilometros has recorrido, ademas puedes ver notificaciones de whatsapp',
    price: 500,
    count: 1,
    categoryId: '5',
    commerceId: '1',
    createdAt: '24/10/2020',
    updatedAt: '30/11/2021'

}, {
    _id: '3',
    title: 'Cargador',
    description: 'Ya no se que mas poner aca',
    price: 20,
    count: 100,
    categoryId: '10',
    commerceId: '15',
    createdAt: '06/06/2020',
    updatedAt: '20/12/2021'

}];

function handleError () {
    error = null;
}
</script>
