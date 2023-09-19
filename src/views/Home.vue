<template>
  <div class="home">
  </div>
</template>

<script lang="ts" setup>
import { getList } from '../utils/api'
getList().then(res => {
  // console.log(res)
})
</script>
