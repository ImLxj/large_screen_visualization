<template>
  <div class="container">
    <my-header></my-header>
    <my-center></my-center>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyCenter from '@/components/MyCenter'
export default {
  name: 'Home',
  components: {
    MyHeader,
    MyCenter
  }
}
</script>
