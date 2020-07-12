<template>
    <div>
        <!-- 顶部导航开始 -->
        <van-row>
            <van-col span="4">
                 <router-link tag="span" to="/home" class="iconfont iconjiantou-copy"></router-link>
            </van-col>
            <van-col span="16">{{$route.name}}</van-col>
            <van-col span="4">
                <router-link tag="span" to="/search" class="iconfont iconsearch"></router-link>
            </van-col>
        </van-row>
        <!-- 顶部导航结束 -->
        <!-- 商品内容开始 -->
        <div class="newp clearfix">
            <!-- 左边导航 -->
            <div class="left" ref="left">
                 <ul>
                    <li v-for="(item,index) in leftlist" :key="index"  @click="selectItem(index,$event)"  :class="{current:index == currentIndex}">{{item}}</li>
                </ul>
            </div>
            <!-- 右边商品 -->
            <div class="right" ref="right">
                <div class="right-con">
                    <img src="../assets/img/category1.jpg" @load="gotoLoad()">
                    <ul v-for="(it,i) in rightlist" :key="i" class="right-item-hook">
                        <p><i></i>{{it.title}}<b></b></p>
                        <li class="w33 fl" v-for="(item,index) in it.con" :key="index">
                            <div><img :src="require(`../assets/img/${item.imgsrc}`)"  @load="gotoLoad()"></div>
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 商品内容结束 -->
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'    
    export default {
        data(){
            return{
                // 左边导航栏数据
                leftlist:["手机","智能","家电","电脑","小米手机","众筹"],
                //右边商品数据
                rightlist:[
                    {
                        title:"手机",
                        con:[
                            {imgsrc:"felp11.png",name:"10X4G"},
                            {imgsrc:"felp12.png",name:"10X5G系列"},
                            {imgsrc:"felp13.png",name:"小米10青春"},
                            {imgsrc:"felp14.png",name:"K30 Pro 变焦版"},
                            {imgsrc:"felp15.png",name:"K30 Pro"},
                            {imgsrc:"felp04.png",name:"黑鲨手机3"},
                            {imgsrc:"felp05.png",name:"黑鲨手机3 Pro"},
                            {imgsrc:"felp06.png",name:"小米10Pro"},
                            {imgsrc:"felp07.png",name:"小米10"},
                            {imgsrc:"felp10.png",name:"小米MIXAlpha"},
                        ]
                    },
                    {
                        title:"智能",
                        con:[
                            {imgsrc:"ilt01.png",name:"手表Color"},
                            {imgsrc:"ilt02.png",name:"小米手表"},
                            {imgsrc:"ilt03.png",name:"移动电源3"},
                            {imgsrc:"ilt04.png",name:"米家电子体温计"},
                            {imgsrc:"ilt05.png",name:"路由器AX3600"},
                            {imgsrc:"ilt06.png",name:"加湿器"},
                        ]
                    },
                    {
                        title:"家电",
                        con:[
                            {imgsrc:"jia01.png",name:"电视4 44''"},
                            {imgsrc:"jia02.png",name:"Redmi电视 70''"},
                            {imgsrc:"jia03.png",name:"电视Pro 55''"},
                            {imgsrc:"jia04.png",name:"空调X"},
                            {imgsrc:"jia05.png",name:"柔风空调"},
                            {imgsrc:"jia06.png",name:"洗烘一体机1C"},
                            {imgsrc:"jia07.png",name:"Redmi 电视98''"},
                        ]
                    },
                    {
                        title:"电脑",
                        con:[
                            {imgsrc:"com01.png",name:"RedmiBook14"},
                            {imgsrc:"com02.png",name:"RedmiBook13"},
                            {imgsrc:"com03.png",name:"小米显示器"},
                        ]
                    },
                     
                    {
                        title:" 小米数字系列",
                        con:[
                            {imgsrc:"mi01.png",name:"小米10青春"},
                            {imgsrc:"mi02.png",name:"小米10Pro"},
                            {imgsrc:"mi03.png",name:"小米10"},
                        ]
                    },
                    {
                        title:"众筹好物",
                        con:[
                            {imgsrc:"cro01.png",name:"显示器挂灯"},
                            {imgsrc:"cro02.png",name:"智能门锁E"},
                            {imgsrc:"cro03.png",name:"超级电池"},
                            {imgsrc:"cro04.png",name:"龙头净水器"},
                            {imgsrc:"cro05.png",name:"挂烫机"},
                            {imgsrc:"cro06.png",name:"塔扇"},
                            {imgsrc:"cro07.png",name:"插线板"},
                            {imgsrc:"cro08.png",name:"智能晾衣机"},
                            {imgsrc:"cro09.png",name:"Redmi手环"},
                            {imgsrc:"cro10.png",name:"湿度计"},
                            {imgsrc:"cro11.png",name:"液晶小黑板"},
                            {imgsrc:"cro12.png",name:"电饭煲"},
                            {imgsrc:"cro13.png",name:"毛球修剪器"},
                            {imgsrc:"cro14.png",name:"电磁炉"},
                            {imgsrc:"cro15.png",name:"电动螺丝刀"},
                            {imgsrc:"cro16.png",name:"洁面仪"},
                            {imgsrc:"cro17.png",name:"米家夜灯2"},
                            {imgsrc:"cro18.png",name:"电动牙刷"},
                            {imgsrc:"cro19.png",name:"魔法转换器"},
                        ]
                    },
                   
                ],
                listHeight:[],//记录高度
                scrollY:0
            }
        },
              methods: {
                _initScroll(){
                    // 左边联动效果
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件
                        probeType:3 //滚动位置探针效果
                    })
                    // 右边联动效果
                    this.rights = new BScroll(this.$refs.right,{
                        probeType:3, //滚动位置探针效果
                    })
                    // 获取滚动效果高度
                    this.rights.on("scroll",this.onScrollfun)
                },onScrollfun(pos){
                    this.scrollY =  Math.abs(Math.round(pos.y));//滚动条y轴
                        
                },
                _getHeight(){
                    // 获取每个类对象
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0; //设置默认高度
                    this.listHeight.push(height);
                    // 循环对象获取各自到顶部高度
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; //对象高度
                        this.listHeight.push(height);
                    }
                    
                },
                selectItem(index,event){
                    // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];//通过下标获取对象
                        // 通过滚动事件指定目标元素
                        this.rights.scrollToElement(el);
                    }
                }, 
                gotoLoad(){
                    this.rights && this.rights.refresh();
                }

            },
            // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
            mounted() {
                // 能在虚拟DOM执行完后，在回调方法
                this.$nextTick(()=>{
                    this._initScroll(); //调用滚动效果
                    this._getHeight();
                })
            },
            beforeDestroy(){
                this.rights.off("scroll",this.onScrollfun)
            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0;i <this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        // 判断高度之间为当前左选项变化
                        if((this.scrollY >= height && this.scrollY < height2)){
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLI = leftItems[i];
                            this.lefts.scrollToElement(elLI);
                            return i;
                        }
                    }
                    // 如果没有高度值，默认为0，第一位
                    return 0;
                }
            },
                
    }
</script>

<style lang="scss" scoped>
//顶部导航栏
.van-row{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f2f2f2;
    font-size: 16px;
    .iconsearch{
        font-size: 18px;
    }
}

//商品内容
.newp{
    position:absolute;
    top: 50px;
    bottom: 50px;
    overflow: hidden;
    display: flex;
    .left{
        border-right: 1px solid #efefef;
        width: 76px;
        box-sizing: border-box;
        ul{
            li{
                text-align: center;
                height: 45px;
                line-height: 45px;
                width: 76px;
                &.current{
                    color: #ed5b00;
                    font-size: 15px;
                    margin: 2px 0;
                    border-left:2px solid #ed5b00;
                }
            }
        }
    }
    .right{
        width: 80%;
        padding: 0 20px;
        box-sizing: border-box;
        text-align: center;
        flex: 1;
        .right-con{
            overflow: hidden;
            ul{
                overflow: hidden;
                p{
                    font-size: 14px;
                    font-weight: normal;
                    position: relative;
                    margin: 20px 0px 10px;
                    position: relative;
                    i,b{
                        height: 1px;
                        width: 23px;
                        background-color: #e0e0e0;
                        position: absolute;
                        top: 10px;
                        left: 50%;
                    }
                    i{
                        transform: translateX(-200%);
                    }
                    b{
                        transform: translateX(100%);
                    }
                }
                li{
                    margin-bottom: 8px;
                    div{
                        padding: 10px;
                        height: 86.4px;
                        box-sizing: border-box;
                    }
                    img{
                        margin: 0 auto;
                        text-align: center;
                        // width: 65%;
                    }
                    span{
                        font-size: 12px;
                        color:#999;
                        display: block;
                        white-space:nowrap;
                        overflow:hidden;
                        text-overflow:ellipsis;
                    }
                }
            }
        }
    }
}
</style>