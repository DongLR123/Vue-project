<template>
  <header class="header" :style="{backgroundColor:curmenu.bgcolor}">
    <span class="gofirst" @click="gofirst">首页</span>
    {{curmenu.name}}
  </header>

</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed: {
      ...mapState(['curmenu'])
    },
    methods: {
      ...mapMutations(['setcurmenu']),
      gofirst(){
        this.setcurmenu({
          name:'电影',
          bgcolor:'red',
          
        }),
        this.$router.push('/')
      }
    }
}
</script>

 <style lang="scss" scoped>//scoped 只对当前组件生效
 .header{
     width: 100%;
     height:1rem;
     text-align: center;
     line-height: 1rem;
     background: red;
     position: fixed;
     top: 0;
     left: 0;
     z-index: 1;
     .gofirst{
       position: absolute;
       left: .2rem;
     }
 }
</style>