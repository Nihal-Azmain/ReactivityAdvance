<script setup lang="ts"> 
import { shallowRef, triggerRef, ref } from 'vue';

const state = ref(
  {count: 1, value: 'appscode'}
)

function updateCount(){
  state.value.count++
  console.log(state.value.count)
}

function updateCount2(){
  state.value = {count: state.value.count+1, value: state.value.value}
  console.log(state.value.count)
}

</script>

<template>
  <div>
    <h2>ShallowRef and triggerRef</h2>
    
    Count: {{ state.count }} <br>
    Value: {{ state.value }} <br>
    <button type="button" @click="updateCount()">Value will not show Increment</button>
    <button type="button" @click="updateCount2()">Value will show Increment</button>
  </div>
</template>
