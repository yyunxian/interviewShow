import Vue from 'vue'
Vue.filter('cardNumFormat', 
function parseStringToStar (str) {
  return str.length > 2 ?  new Array(str.length - 2).join('*') + str.substr(-2) : str
})