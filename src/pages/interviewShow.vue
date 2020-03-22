<template>
  <div class="interviewShow">
    <div class="main">
      <div class="page_left">
        <header>
          <div style="width:15%">
            <img src="../assets/image/icon/logo.png" alt />
          </div>
          <div style="width:50%;text-align:center">
            <span  style="padding:0 15px;cursor:pointer" v-for="(item,index) in titleList" 
            :class="navIndex==index?'navActive':'gray'"
            :key="index"
            @click="checkNav(index)">{{item}}</span>
          </div>
          <div style="width:35%">
            <el-input placeholder="search..." suffix-icon="el-icon-search" v-model="input2"></el-input>
          </div>
        </header>
        <div class="card">
          <div class="card_head">
            <span>Cards</span>
            <span style="color: #c7c8ca">View all cards</span>
          </div>
          <div class="card_list">
            <card v-for="(item,index) in cardList" :key="index" :cardData="item"></card>
            <div class="addCard">
              <img src="../assets/image/icon/add.png" alt />
              <span style="padding-top:15px;text-align:center;color:#b5b5b7">Add new card</span>
            </div>
          </div>
        </div>
        <div class="server">
          <div class="server-left">
            <div class="title">
              <span>Main Services</span>
              <span style="color: #c7c8ca">View all</span>
            </div>
            <div class="content">
              <div class="item" v-for="(item,index) in itemList" :key="index">
                <i :class="item.icon " style="font-size:29px;color:pink"></i>
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
          <div class="server-right">
            <div class="server-right-one">
              <div class="title">
                <span>Current</span>
                <span style="color: #c7c8ca">View all</span>
              </div>
              <div>
                <div class="content" v-for="(item,index) in [1,2,3]" :key="index">
                  <span>1984759</span>
                  <span class="line"></span>
                  <span>$947,594.09</span>
                </div>
              </div>
            </div>
            <div class="server-right-two">
              <div class="title">
                <span>Savings</span>
                <span style="color: #c7c8ca">View all</span>
              </div>
              <div style="display:flex;justify-content: space-around;">
                <div id="myline" :style="{width: '230px', height: '180px'}"></div>
                <div class="lineItem">
                  <div class="lineData">
                    <span>Total</span>
                    <span>$100.09</span>
                  </div>
                  <div class="lineData">
                    <span>Total</span>
                    <span>$100.09</span>
                  </div>
                  <div class="lineData">
                    <span>Total</span>
                    <span>$100.09</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page_right">
        <div class="page_right_header">
          <el-badge is-dot class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
          <div>
            admin
            <i class="el-icon-user-solid"></i>
          </div>
        </div>

        <div id="myChart" :style="{width: '200px', height: '200px'}"></div>
        <div style="height:40px;display:flex;justify-content: space-between;">
          <span>Transacitons</span>
          <span>
            Today
            <i class="el-icon-arrow-down"></i>
          </span>
        </div>
        <div
          v-for="(item,index) in moneyData"
          :key="index"
          style="height:60px;display:flex;justify-content: space-between;"
        >
          <div>
            <i :class="item.icon" style="color:pink;font-size:30px"></i>
            <span style="padding-left:15px">{{item.name}}</span>
          </div>
          <span>{{item.money}}</span>
        </div>
        <div
          style="width:200px;height:30px; background-color: pink;display:flex;justify-content: space-between;padding:0 15px;line-height:30px;color:#fff;border-radius:30px;margin-bottom:20px"
        >
          <span>Transfer Money</span>
          <img style="width:30px" src="../assets/image/icon/arrow.png" alt />
        </div>
        <div
          style="width:30px;height:30px;border-radius:50%;background-color: #187286;float:right;display:flex;justify-content:center;align-item:center"
        >
          <img
            style="width:18px;height:18px;margin-top:6px"
            src="../assets/image/icon/news.png"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card.vue";
export default {
  name: "interviewShow",
  components: {
    card
  },
  data() {
    return {
      moneyData: [
        {
          icon: "el-icon-s-marketing",
          name: "Dribbble Pro Plan",
          money: "-$100"
        },
        {
          icon: "el-icon-s-shop",
          name: "Dribbble Pro Plan",
          money: "$100"
        },
        {
          icon: "el-icon-s-ticket",
          name: "Dribbble Pro Plan",
          money: "-$100"
        }
      ],
      titleList: ["Dashboard", "Services", "History"],
      input2: "",
      cardList: [
        {
          money: "133.89",
          number: "497777777777763"
        },
        {
          money: "1,3300.89",
          number: "497777777557768"
        }
      ],
      itemList: [
        {
          icon: "el-icon-s-data",
          name: "Transactions"
        },
        {
          icon: "el-icon-s-grid",
          name: "Transactions"
        },
        {
          icon: "el-icon-s-order",
          name: "Transactions"
        },
        {
          icon: "el-icon-video-camera-solid",
          name: "Transactions"
        },
        {
          icon: "el-icon-upload",
          name: "Transactions"
        },
        {
          icon: "el-icon-goods",
          name: "Transactions"
        }
      ],
      navIndex:0,
    };
  },
  mounted() {
    this.drawLine();
    this.drawPie();
  },
  methods: {
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 250,
          data: ["直接访问", "邮件营销", "联盟广告"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" }
            ]
          }
        ]
      });
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myline"));
      // 绘制图表
      myChart.setOption({
        grid: {
          top: 30,
          y: 20,
          x: 50,
          x2: 10,
          y2: 10,
          borderWidth: 10
        },
        series: {
          center: ["50%", "50%"]
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true
          }
        ]
      });
    },
    checkNav(index){
      this.navIndex=index
    }
  }
};
</script>

<style lang="less" scoped >
.interviewShow {
  background-color: pink;
  width: 100%;
  height: 100vh;
  .navActive{
    font-weight: 600;
    color:#000;
  }
   .grey{
     color:#abaaac;
   }
  .main {
    display: flex;
    margin: 0 auto;
    border-radius: 3%;
    border: 5px solid pink;
    background-color: #fefefe;
    .page_right {
      width: 25%;
      padding: 15px;
      background-color: #fff;
      .page_right_header {
        display: flex;
        justify-content: space-between;
        height: 50px;
        border-radius: 10%;
         padding: 20px;
        box-sizing: border-box;
        
      }
    }
    .page_left {
      width: 75%;
      padding: 15px 20px;
      header {  
        height: 60px;
        display: flex;
        justify-content: space-around;
        padding:0 20px;
        line-height: 60px;
        img{
          width:40px;
          height:40px;margin-top:4px;
          
        }
      }
      .card {
        .card_head {
          display: flex;
          justify-content: space-between;
          height: 40px;
          line-height: 40px;
          padding: 0 20px;
        }
        .card_list {
          display: flex;
          justify-content: space-between;
          .card {
            width: 30%;
          }
          .addCard {
            width: 250px;
            height: 120px;
            border-radius: 20px;
            background-color: #f8f8f8;
            display: flex;
            flex-direction: column;
            justify-content: center;
            img {
              margin: 0 auto;
              display: block;
              width: 35px;
            }
          }
        }
      }
      .server {
        display: flex;
        .server-left {
          width: 40%;

          .title {
            height: 30px;
            padding: 0 15px;
            line-height: 30px;
            display: flex;
            justify-content: space-between;
          }
          .content {
            display: flex;
            flex-wrap: wrap;
            background-color: #f7f8fa;

            .item {
              width: 46%;
              height: 100px;
              border-radius: 30px;
              font-size: 10px;
              display: flex;
              flex-direction: column;
              margin: 3px;
              background-color: #ffffff;
              justify-content: space-around;
              align-items: center;
            }
          }
        }
        .server-right {
          width: 60%;
          .title {
            display: flex;
            justify-content: space-between;
            height: 30px;
            padding: 0 15px;
            line-height: 30px;
          }
          .content {
            display: flex;
            padding: 10 15px;
            height: 40px;
            line-height: 40px;
            span {
              width: 20%;
              text-align: center;
            }
            .line {
              width: 55%;
              border-bottom: 1px dashed #c7c8ca;
              padding: 0 15px;
            }
          }
          .lineItem{
           padding-top: 20px;
            .lineData{
                display:flex;
               height:30px;
              
                justify-content: space-between;
                span:nth-child(1){
                  color:#ceced0;
                  padding-right:30px;
                }
            }
          }
        }
      }
    }
  }
}
</style>
