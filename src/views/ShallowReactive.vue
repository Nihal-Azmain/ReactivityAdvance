<script setup lang="ts"> 
import { shallowReactive, isReactive } from 'vue';


const state = shallowReactive({
  count: 1, 
  nested:{
    value: 5,
  }
})

console.log({isStateReactive: isReactive(state)})
console.log({isCountReactive: isReactive(state.count)})
console.log({isNestedReactive: isReactive(state.nested)})
console.log({isNestedValueReactive: isReactive(state.nested.value)})

function updateCount(){
  state.count ++
  state.nested.value += 5
  console.log(state.count)
  console.log(state.nested.value)
}

function updateCount2(){
  console.log(state.nested.value)
}

</script>

<template>
  <div>
    <h2>Shallow Reactive</h2>
  </div>
  <div>

    Count: {{ state.count }} <br>
    Value: {{ state.nested.value }} <br>
    <button type="button" @click="updateCount()">Value will not show Increment</button>
    <button type="button" @click="updateCount2()">Value will show Increment</button>
  </div>
</template>
