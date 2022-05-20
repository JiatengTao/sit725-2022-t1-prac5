<template>
  <div>
    <Header />
    <router-view id="mainBody"/>
  </div>
</template>

<style>
#Aside{
  display: flex;
}
#mainBody{
  flex: 1;
}
</style>

<script>
import Header from "@/components/Header";
export default {
  created() {
    this.$store.state.ifFrameShow=false
  },
  name: "app",
  components: {
    Header
  }
}
</script>
