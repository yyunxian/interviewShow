<template>
  <div class="card" :class="cardData.money<1000?'pink':'blue'">
    <div class="type">Available balance</div>
    <div class="money">${{cardData.money}}</div>
    <div class="cardNum">{{cardData.number | cardNumFormat}}</div>
    <div class="logo">
      <span>Monzo</span>
      <div class="ball">
        <span class="ballOne"></span>
        <span class="ballTwo"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    cardData: Object
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped >
.card {
  width: 300px;
  height: 150px;
  border-radius: 20px;
  padding: 15px 20px;
  margin-right: 10px;
  box-sizing: border-box;
  .type {
    font-size: 10px;
    color: #abaaac;
  }
  .cardNum {
    padding-bottom: 30px;
  }
  .money {
    color: #fff;
    padding-bottom: 25px;
    padding-top: 5px;
  }
  .logo {
    color: #fff;
    display: flex;
    justify-content: space-between;
    span {
      color: #fbc6c7;
    }
    .ball {
      position: relative;
      .ballOne {
        position: absolute;
        right: 16px;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #f93b4e;
      }
      .ballTwo {
        position: absolute;
        right: 5px;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fbc446;
      }
    }
  }
}
.pink {
  background-color: #fe4d55;
}
.blue {
  background-color: #0c809a;
}
</style>
