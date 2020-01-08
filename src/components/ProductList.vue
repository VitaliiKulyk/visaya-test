<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <div>{index}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
};
</script>


<style scoped>
</style>
