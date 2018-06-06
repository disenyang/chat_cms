
	<template>
	<div class="e-nav" :class="[direction]" :style="{width:width,height:height,fontSize:fontSize,paddingLeft:paddingLeft,paddingRight:paddingRight,paddingTop:paddingTop,paddingBottom:paddingBottom,marginLeft:marginLeft,marginRight:marginRight,marginTop:marginTop,marginBottom:marginBottom,borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,backgroundColor:backgroundColor,backgroundImage:backgroundImage,backgroundRepeat:backgroundRepeat,backgroundPosition:backgroundPosition,backgroundSize:backgroundSize,borderRadius:borderRadius,boxShadow:boxShadow,color:color}">
    <div class="item" @click="clickItem(item)" v-for="(item,index) in navs">
        <div class="icon"><img :src="item.icon"></div>
        <div class="name">{{item.name}}</div>
    </div>
</div>
</template>
<script>
	import Utils from 'utils';
	export default {
	name:"e-nav",
	mixins:[Utils.zindex,Utils.emitter,Utils.popper,Utils.mixins],
	data(){
        return {
            
        }
  	},
    config:{
        insert:{
            inner:false,
            before:true,
            after:true
        }
    },
    methods:{
        clickItem(item){
            this.$router.push({path:item.url}); 
        }
    },
    unProps:{
        "v-if":{"name":"是否创建","desc":"是否创建"},"v-show":{"name":"是否显示","desc":"是否显示"},"click":{"name":"单击事件","desc":"单击事件","propType":"event"},"dblclick":{"name":"双击事件","desc":"双击事件","propType":"event"},"mouseover":{"name":"鼠标over","desc":"鼠标over","propType":"event"},"mouseout":{"name":"鼠标离开","desc":"鼠标离开","propType":"event"}
    },
    props:{
        direction:{
            type:[String],
            default:"vertical",
            values:[
                {lab:"垂直",val:"vertical"},
                {lab:"水平",val:"horizontal"}
            ],
            name:"方向",
            desc:"方向"
        },
        navs:{
            type:[Array],
            default:[
                
            ],
            name:"导航数据",
            desc:"导航数据"
        },
        "ref":{"name":"组件引用","desc":"组件引用"},"width":{"name":"宽度","desc":"宽度","propType":"style"},"height":{"name":"高度","desc":"高度","propType":"style"},"paddingLeft":{"name":"左内边距","desc":"左内边距","propType":"style"},"paddingRight":{"name":"右内边距","desc":"右内边距","propType":"style"},"paddingTop":{"name":"顶内边距","desc":"顶内边距","propType":"style"},"paddingBottom":{"name":"底内边距","desc":"底内边距","propType":"style"},"marginLeft":{"name":"左外边距","desc":"左外边距","propType":"style"},"marginRight":{"name":"右外边距","desc":"右外边距","propType":"style"},"marginTop":{"name":"顶外边距","desc":"顶外边距","propType":"style"},"marginBottom":{"name":"底外边距","desc":"底外边距","propType":"style"},"borderLeft":{"name":"左边框","desc":"左边框","propType":"style"},"borderRight":{"name":"右边框","desc":"右边框","propType":"style"},"borderTop":{"name":"顶边框","desc":"顶边框","propType":"style"},"borderBottom":{"name":"底边框","desc":"底边框","propType":"style"},"backgroundColor":{"name":"背景颜色","desc":"背景颜色","propType":"style"},"backgroundImage":{"name":"背景图片","desc":"背景图片","propType":"style"},"backgroundRepeat":{"name":"背景重复","desc":"背景重复","propType":"style"},"backgroundPosition":{"name":"背景位置","desc":"背景位置","propType":"style"},"backgroundSize":{"name":"背景大小","desc":"背景大小","propType":"style"},"fontSize":{"name":"字体大小","desc":"字体大小","propType":"style"},"boxShadow":{"name":"盒子阴影","desc":"盒子阴影","propType":"style"},"color":{"name":"字体颜色","desc":"字体颜色","propType":"style"},"fontWeight":{"name":"字体粗细","desc":"字体粗细","propType":"style"},"borderRadius":{"name":"圆角半径","desc":"圆角半径","propType":"style"}
    }
}
</script>
<style>
    @import '../../public/styles/var.css';
	.e-nav{
    color:#fff;
    &.vertical{
        height:100%;
        width:64px;
        .item{
            height:70px;
        }
    }
    &.horizontal{
        display:flex;
        flex-direction:row;
        .item{
            flex:1;
            height:100%;
        }
    }
    .item{
        text-align:center;
        
        display:flex;
        
        flex-direction:column;
        justify-content:center;
        cursor:pointer;
        &:hover{
            background-color:#666;
        }
        .icon{
            img{
                width:24px;
                height:24px;
            }
        }
        .name{
            font-size: 12px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>