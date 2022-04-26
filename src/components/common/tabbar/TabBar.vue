<template>
  <div id="tab-bar">
<!--    插槽 只关注自已 tab-bar  -->
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>

  #tab-bar{
    display: flex;
    background: #e9e9e9;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100,100,100,.4);
  }

</style>
