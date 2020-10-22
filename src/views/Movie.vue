<template>
  <div id="movie">
    <ul>
      <li v-for="obj in movieList" :key="obj.id"  class="movie-list" @click="goDetails(obj.id)">
        <img class="movie-img" :src="obj.images.medium" alt="">
        <div class="movie-info" >
          <h3>{{obj.title}}</h3>
          <p>上映年份 ： {{obj.year}}</p>
          <p>演员：<span v-for="item in obj.casts" :key="item.id">{{item.name}}</span></p>
        </div>
      </li>
    </ul>
    <img class="movie-loading" v-show="isshow" src="@/assets/image/loading.gif" alt="">
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  data () {
    return {
       movieList:[],
       isshow:false
    }
  },
   methods: {
      getList(){
        this.isshow = true
        axios.get(`https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/top250?start=${this.movieList.length}&count=10`).then(res=>{
          console.log(res)
          this.isshow=false
          this.movieList=[...this.movieList,...res.data.subjects]
          

        }).catch(err=>{
          console.log(err)
        })
      },
      goDetails(id){
        this.$router.push('/moviedetails/'+id)
      }
    },
    created () {
      this.getList();
      window.onscroll = ()=>{
        // 页面可视区域的高度
        let height=document.documentElement.clientHeight;
        // 滚动条滚出去的高度
        let top=document.documentElement.scrollTop;
        // 页面可滚动高度
        let tall=document.documentElement.scrollHeight;
       // console.log(height,top,tall)
        if (tall < height+top+1) {
          this.getList()
        }

      }

    }
  }


</script>

<style lang='scss'  scoped>
  #movie{
    background: #ffffff;
    .movie-list{
      display: flex;
      padding: .2rem  .4rem;
      position: relative;

      &::after{
        content: '';
        display: block;
        border-bottom: 1px solid #ccc;
        position: absolute;
        left: .4rem;
        right: .4rem;
        bottom: 0;
        transform: scaleY(0.5);
      }
      .movie-img{
        width: 2rem;
      }
      .movie-info{
        flex: 1;
        padding-left: .2rem;
      }
    }
    .movie-loading{
      width: 1.5rem;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%)
    }
  }
</style>