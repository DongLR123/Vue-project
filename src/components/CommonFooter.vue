<template>
  <footer class="footer" :style="{backgroundColor: curmenu.bgcolor}">
      <div v-for="obj in menuList" :key="obj.path" @click="changemenu(obj)">
          <router-link :to="obj.path">{{obj.name}}</router-link>
      </div>
      <!-- <router-link to="/">电影</router-link>
      <router-link to="/music">音乐</router-link>
      <router-link to="/book">图书</router-link>
      <router-link to="/photo">图片</router-link> -->
  </footer>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
export default {
    data () {
        return {
         path:this.$route.path,
         menuList:[
              {
                  path:'/',
                  name:'电影',
                  bgcolor:'red'
              },
              {
                  path:'/music',
                  name:'音乐',
                  bgcolor:'green'
              },
              {
                  path:'/book',
                  name:'图书',
                  bgcolor:'blue'
              },
              {
                  path:'/photo',
                  name:'图片',
                  bgcolor:'yellow'
              }
          ]
        }
    },
    computed: {
        ...mapState(['curmenu'])
    },
    methods: {
        ...mapMutations(['setcurmenu']),
        changemenu(obj){
            this.setcurmenu(obj)
        }
    },
    created () {
        this.menuList.forEach((value,index)=>{
            console.log(index)
            if(value.path==this.path){
                this.setcurmenu(value)
            }
        })
    }

}
</script>

<style lang="scss" scoped>
    .footer{
     display: flex;
     width: 100%;
     height: 1rem;
     line-height: 1rem;
     background: red;
     position: fixed;
     left: 0;
     bottom: 0;
      div{
          flex: 1;
          text-align: center;
           a{
          
                color: black;
          
             }
            .router-link-exact-active{
                color: #ffffff
            }
      }
     
 }
</style>