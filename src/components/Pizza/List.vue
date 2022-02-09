<template>
<div v-for="pizza in pizzas" :key="pizza.id" >
  <Item :pizza="pizza" />
</div>
</template>

<script>
import Item  from './Item.vue' 
export default {
props:["pizzas"],
components:{Item},
};

</script>

<style>

</style>