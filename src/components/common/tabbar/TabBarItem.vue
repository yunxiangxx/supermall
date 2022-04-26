<template>
  <div class="tba-bar-item" @click="itemClick">
<!--    图片地址不能写死，搞个插槽 slot  slot外边最好包装一下，免得让替换掉-->
<!--    <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--    <div>首页</div>-->
    <div v-if="!isAction" > <slot name="item-icon"></slot> </div>
    <div  v-else > <slot name="item-icon-active"></slot> </div>
    <div :style="activeStyle" ><slot name="item-text"></slot></div>

  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return{
            // isAction:true
          }
      },
      //计算属性
      computed:{
        isAction(){
          //indexOf  indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isAction ? {color:this.activeColor}:{}
        }
      },
      methods:{
        itemClick(){
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>

  .tba-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    /*line-height: 49px;*/
  }
  .tba-bar-item img{
    vertical-align: middle;
    margin-top: 3px;
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
  }
  /*.active{*/
  /*  color: red;*/
  /*}*/

</style>
