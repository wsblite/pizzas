<template>
  <div ref="sortRef" @click="handleClickPopur" class="sort">
    <div class="sort__label">
    <svg :class="{active:showPopup}"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
        fill="#2C2C2C"
        />
    </svg>
    <b>Сортировка по:</b>
    <span>{{sortPopupItems[activeItem]}}</span>
    </div>
    <div v-if="showPopup" class="sort__popup">
    <ul>
        <li @click="handleActiveItems(index)"
        :class=" {active: activeItem === index}" v-for="(item,index) in sortPopupItems" :key="item" >{{item}}</li>
    </ul>
    </div>
</div>
</template>
 
<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
export default {
    setup() {
        const sortPopupItems=['популярности','цене','алфавиту'];
        const showPopup = ref(false);
        const activeItem = ref(0)
        const sortRef = ref (null)


        const handleClickPopur =() =>{
            showPopup.value = !showPopup.value
        }

        const handleActiveItems=(index) => {
            activeItem.value = index
        };

        onMounted(() => {
            document.body.addEventListener('click',(event) =>  {
            if (!event.path.includes(sortRef.value)) {
              showPopup.value=false;
            }   
            })
        })

        return {showPopup,handleClickPopur,sortPopupItems,handleActiveItems,activeItem,sortRef}
    }

}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.sort {
  position: relative;
  &__label {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
      transform: rotate(180deg);
      transition: 0.2s;
      &.active {
        transform: rotate(0);
      }
    }

    b {
      margin-right: 8px;
    }

    span {
      color: $orange;
      border-bottom: 1px dashed $orange;
      cursor: pointer;
    }
  }

  &__popup {
    position: absolute;
    right: 0;
    margin-top: 15px;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0;
    width: 160px;

    ul {
      overflow: hidden;
      li {
        padding: 12px 20px;
        cursor: pointer;

        &.active,
        &:hover {
          background: rgba(254, 95, 30, 0.05);
        }

        &.active {
          font-weight: bold;
          color: $orange;
        }
      }
    }
  }
}


</style>