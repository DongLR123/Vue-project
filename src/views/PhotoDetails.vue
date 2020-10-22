<template>
<v-touch v-on:swipeleft="onSwipeLeft"  v-on:swiperight="onSwipeRight">
  <div v-if="photoList.length>0" id="photo-details" :style="{ backgroundImage:`url(${photoList[index].src})`}"></div>
</v-touch>
</template>

<script>
import {mapState} from 'vuex'
import Vue from 'vue'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

export default {
    data () {
        return {
            index:this.$route.params.index
        }
    },
    methods: {
        onSwipeLeft(){
            if (this.index == this.photoList.length -1 )  return
            this.index++
        },
        onSwipeRight(){
            if (this.index == 0){
                return
            }
            this.index--
        }
    },
    computed: {
        ...mapState(['photoList'])
    }
}
</script>

<style lang="scss" scoped>
    #photo-details{
        background-color: black;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 1rem;
        bottom: 1rem;
        left:0;
        right: 0;
    }
</style>