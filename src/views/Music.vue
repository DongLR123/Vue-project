<template>
  <div id="music">
    <img v-for="obj in list" :key="obj.id" :src="obj.bg" alt="" @click="goDetails(obj.id)">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      list:[]
    }
  },
  created () {
    axios.get('/data/musiclist.json').then(res => {
           console.log(res)
           this.list = res.data.albums
      }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    goDetails(id){
      this.$router.push({
        name:'MusicDetails',
        query:{
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    #music{
      img{
        width: 50%
      }
    }
</style>