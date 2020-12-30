<template>
   <div class="address">
     <div class="address-center">
       <div class="table-menu">
          <div tabindex="1" onclick="true" class="table item-1" @click="handeleClick(1)" >国内.港澳台</div>
          <div tabindex="1" class="table " @click="handeleClick(2)">海外 </div>
          <div tabindex="1" class="table item-2" @click="handeleClick(3)" ><i><img src="../assets/syimg/sy1.png" alt=""></i> 特价</div>
      </div>
               
      <keep-alive>
        <component :is="currentComponent">
        </component>
      </keep-alive>
  </div>
</div>
</template>

<script>

import TaBle1 from '../components/TaBle1.vue'
import TaBle2 from '../components/TaBle2.vue'
import TaBle3 from '../components/TaBle3.vue'
export default {
 data() {
   return {
     currentComponent: 'TaBle1'
   };
 },
 methods: {
  
 },
 components: {
   TaBle1:TaBle1, 
   TaBle2:TaBle2,
   TaBle3:TaBle3
 },
 methods: {
   handeleClick(i) {
   this.currentComponent = `TaBle${i}`;
   
   }
 }
};
</script>
<style lang='less' scoped>
 .address{ 
   width: 100%;
   height: 290px;
   position: absolute;
   top: 187px;
   .address-center {
     height: 100%;
     margin:  0 20px ;
     border-radius:  15px 15px 0 0;
     background: #fff;
     .table-menu{
       display: flex;
       justify-content: space-evenly;
       background: #F2F3F5;
       border-radius:  15px 15px 0 0;
     .table{
       width: 50%;
       font-size: 15px;
       font-weight: 700;
       height: 35px; 
       display: flex;
       justify-content: center;
       align-items: center;
       border-radius:  15px 15px 0 0;
       outline:none;
       img {
         width: 22px;
         height: 22px;
       }
      }
        .table:focus{
          background: #fff;

        }      
      .item-1{
        border-radius: 15px 30px 0 0;
        background: #fff;
      }
      .item-2{
        border-radius: 30px 15px  0 0;
      }
      
     }
    }
   }
 
</style>
