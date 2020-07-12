export default {
    namespaced: true,
    state: {
      num1:0,
      num2:0,
      lists:[
        {money:"4999",name:"8GB+256GB"},
        {money:"5699",name:"12GB+256GB"},
        {money:"5999",name:"8GB+518GB"},
      ],
      color:["星空蓝","珍珠白"],
      //购物车数据
      cartsdata:[
      ],
      //总价格
      gross:0,
      //购物车数量
      // badge:0
      //订单商品
      indentlist:[],
      //地址数据
      sidedata:[{
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',   
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },],
      chosenAddressId: '1',
      //编辑地址序号
      editnum:0,
      // typeList:["全部订单","待支付","待收货","已完成"],
      
      

    },
    mutations: {

    },
    actions: {
    },
  }