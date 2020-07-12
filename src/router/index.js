import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './routers/home'
import category from './routers/category'
import cart from './routers/cart'
import login from './routers/login'
import search from './routers/search'
import my from './routers/my'
import goods from './routers/goods'
import indent from './routers/indent'
import alterside from './routers/alterside'
import addside from './routers/addside'
import editside from './routers/editside'
import order from './routers/order'
import mypublic from './routers/mypublic'
import MemberCentre from './routers/MemberCentre'
import MyOffer from './routers/MyOffer'
import ServiceCenter from './routers/ServiceCenter'
import Fcode from './routers/Fcode'
import GiftCode from './routers/GiftCode'
import SetUp from './routers/SetUp'


Vue.use(VueRouter)

  const routes = [
    {path:"/",redirect: "/advertpage"},
  home,             //首頁
  category,         //分类
  cart,             //购物车
  login,            //登录
  search,           //搜素
  my,               //我的
  goods,            //购买商品
  indent,           //订单
  alterside,        //修改地址
  addside,          //新增地址
  editside,         // 编辑地址
  ...order,         //全部订单
  ...mypublic,      //广告导航
  MemberCentre,     //会员中心
  MyOffer,          //我的优惠
  ServiceCenter,    //服务中心
  Fcode,            //我的f码
  GiftCode,         //礼物码兑换
  SetUp,              //设置

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"con"
})

export default router
