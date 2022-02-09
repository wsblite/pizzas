<template>
<ul>
   <li @click="handleActiveSize(index)"
   :class="{
       active: activeSize === index,
       disabled: !availableSizes.includes(item),
      }"
      v-for="(item,index) in sizesItems" :key="item"
   >{{ item }} см.</li>
</ul>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props:['availableSizes'],
    setup(props) {
        const sizesItems = [26,30,40];
        const activeSize = ref(0);

        const handleActiveSize = (index) => {
            activeSize.value = index;
        };

        if(sizesItems[0] !==props.availableSizes[0]) {
            activeSize.value = sizesItems.findIndex(
                (item) => item === props.availableSizes[0]
            );
          }
          return {
              sizesItems,
              activeSize,
              handleActiveSize

          };
        },
    };

</script>

<style>

</style>