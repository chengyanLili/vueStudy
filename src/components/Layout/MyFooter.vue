<template>
  <div>
    <p>Copyrights © {{ jzCurrentYear }} RoyalMjz. All Rights Reserved.</p>
  </div>
</template>

<script>
export default {
   name:"MyFooter",
  data: function () {
    var copyright = new Date()
    var update = copyright.getFullYear()
    return {
      jzCurrentYear: update
    }
  
}
};
</script>
</script>

<style scoped>
  p {
    font-size: 1.4rem;
    margin: auto;
    color: #3d3d3d;
  }
</style>
