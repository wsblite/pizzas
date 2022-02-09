<template>
  <div class="categories">
    <ul>
  <li @click="hadleChangeActiveItem(null)"
  :class="{active:hadleActiveItem === null}">Все</li>

    <li :class="{active:hadleActiveItem === index}"
     @click="hadleChangeActiveItem(index)"
     v-for="(item,index) in categoriesItems" :key="item">{{ item }}</li>
    </ul>
</div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core';
export default {
  setup() {
    const store = useStore();
    const hadleActiveItem = computed(() => store.state.category);
    const categoriesItems =[
     'Мясные',
     'Вегетарианская',
     'Гриль',
     'Острые',
     'Закрытые',
     ];

    const hadleChangeActiveItem = (index) => {
      store.dispatch('setCategory',index);
      };
      return { categoriesItems, hadleActiveItem, hadleChangeActiveItem };
    
  },
};
</script>

<style>

</style>