<template>
  <main>
    <Pxheader :links="links" />
    <router-view class="contaner px-5 m:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import Pxheader from '@/components/Pxheader'

export default {
  name: 'App',
  components: { Pxheader },

  data() {
    return {
      links: [
        {
          title: 'BTC',
          to: { name: 'coin-detail', params: { id: 'bitcoin' } }
        },
        {
          title: 'ETH',
          to: { name: 'coin-detail', params: { id: 'ethereum' } }
        },
        {
          title: 'XRP',
          to: { name: 'coin-detail', params: { id: 'xrp' } }
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
