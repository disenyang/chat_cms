export default function(Vue){return [
    {
        "path":"/cms_chat",
        "name":"cms_chat",
        "meta":{
            "title":"cms_chat"
        },
        "component":resolve => require(['business/index.vue'], resolve),
        "redirect":{
            "name":"home"
        },
        "children":[
            {
                "path":"login",
                "name":"login",
                "component":resolve => require(['business/login.vue'], resolve)
            },
            
            {
                "name":"home",
                "path":"home",
                "meta":{
                    "title":"首页"
                },
                "component":resolve => require(['business/home.vue'], resolve)
            },
            {
                "name": "userinfo",
                "path": "userinfo",
                "meta": {
                    "title": "用户信息"
                },
                "redirect": { 
                    "name": "userinfo-list" 
                },
                "component":Vue.extend({
                    "template": '<router-view transition="fade" transition-mode="out-in"></router-view>'
                }),
                "children":[
                    {
                        "name": "userinfo-list",
                        "path": "list",
                        "meta": {
                            title: "列表"
                        },
                        "component": resolve => require(["business/userinfo/list/list.vue"], resolve)
                    },
                    {
                       "name": "userinfo-setting",
                        "path": "setting",
                        "meta": {
                            title: "新建"
                        },
                        "component": resolve => require(["business/userinfo/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "userinfo-modify",
                        "path": "modify/:id",
                        "meta": {
                            title: "保存"
                        },
                        "component": resolve => require(["business/userinfo/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "userinfo-detail",
                        "path": "detail/:id",
                        "meta": {
                            title: "详情"
                        },
                        "component": resolve => require(["business/userinfo/detail/detail.vue"], resolve)
                    }
                ]
            }
        ]
    },
    {
        "path":"*",
        "meta":{
            "title":"cms_chat"
        },
        "redirect":{
            "name":"home"
        },
        "component":Vue.extend({"template": '<router-view transition="fade" transition-mode="out-in"></router-view>'})
    }
]}