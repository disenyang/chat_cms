/**
 * File Created: 2017-12-31 1:58:46 am
 * Author: shan haohui
 * Last Modified: 2018-01-01 11:18:12 am
 * Modified By: shan haohui
 * Copyright (c) 2017 rongyi
 */


export default function(Vue) {
    var vuexMap = {
        state: { 
            head_title:"",
            routerName:"",
            page:{
                selectedNode:{}
            }
        },
        mutations: { //修改数据的唯一途径
            setHead_title(state,title){
                state.head_title = title;
            },
            setSelectedNode(state,node){
                state.page.selectedNode = node;
            },
            setRouterName(state,routerName){
                state.routerName = routerName;
            }
        },
        actions: { //异步的操作时间
    
        }, 
        getters: { //这里的getters相当于就是实例中用到的计算属性
    
        }
    }
    return vuexMap
}