<template>
  <div id="book">
    <Swiper v-if="imgs.length > 0">
       <Slide v-for="(item,index) in imgs" :key="index">
         <img :src="item" alt="">
       </Slide>
   </Swiper>
  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component'
export default {
  data () {
    return {
      imgs:[
        "http://img06.tooopen.com/images/20170106/tooopen_sl_052938813750.jpg",
       "http://img07.tooopen.com/images/20170301/tooopen_sl_125030861162.jpg",
       "http://img02.tooopen.com/images/20160514/tooopen_sl_054336110578.jpg"
      ]
    }
  },
  components: {
     Swiper,
    Slide
  }
}
</script>

<style>

</style>