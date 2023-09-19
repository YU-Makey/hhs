<template></template>
<script setup lang="ts">
import { loginApi } from "@/api";

loginApi({
  username: "admin",
  password: "123456",
}).then((res:any) => {
  console.log(res);
});
</script>
<style lang="scss" scoped></style>
