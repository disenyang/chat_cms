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
            },
            {
                "name": "resource",
                "path": "resource",
                "meta": {
                    "title": "发布"
                },
                "redirect": { 
                    "name": "resource-list" 
                },
                "component":Vue.extend({
                    "template": '<router-view transition="fade" transition-mode="out-in"></router-view>'
                }),
                "children":[
                    {
                        "name": "resource-list",
                        "path": "list",
                        "meta": {
                            "title": "列表"
                        },
                        "component": resolve => require(["business/resource/list/list.vue"], resolve)
                    },
                    {
                       "name": "resource-setting",
                        "path": "setting",
                        "meta": {
                            "title": "新建"
                        },
                        "component": resolve => require(["business/resource/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "resource-modify",
                        "path": "modify/:id",
                        "meta": {
                            "title": "保存"
                        },
                        "component": resolve => require(["business/resource/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "resource-detail",
                        "path": "detail/:id",
                        "meta": {
                            "title": "详情"
                        },
                        "component": resolve => require(["business/resource/detail/detail.vue"], resolve)
                    }
                ]
            },
            {
                "name": "figure",
                "path": "figure",
                "meta": {
                    "title": "形象"
                },
                "redirect": { 
                    "name": "figure-list" 
                },
                "component":Vue.extend({
                    "template": '<router-view transition="fade" transition-mode="out-in"></router-view>'
                }),
                "children":[
                    {
                        "name": "figure-list",
                        "path": "list",
                        "meta": {
                            "title": "列表"
                        },
                        "component": resolve => require(["business/figure/list/list.vue"], resolve)
                    },
                    {
                       "name": "figure-setting",
                        "path": "setting",
                        "meta": {
                            "title": "新建"
                        },
                        "component": resolve => require(["business/figure/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "figure-modify",
                        "path": "modify/:id",
                        "meta": {
                            "title": "保存"
                        },
                        "component": resolve => require(["business/figure/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "figure-detail",
                        "path": "detail/:id",
                        "meta": {
                            "title": "详情"
                        },
                        "component": resolve => require(["business/figure/detail/detail.vue"], resolve)
                    }
                ]
            },
            {
                "name": "figurevalue",
                "path": "figurevalue",
                "meta": {
                    "title": "形象图片"
                },
                "redirect": { 
                    "name": "figurevalue-list" 
                },
                "component":Vue.extend({
                    "template": '<router-view transition="fade" transition-mode="out-in"></router-view>'
                }),
                "children":[
                    {
                        "name": "figurevalue-list",
                        "path": "list",
                        "meta": {
                            "title": "列表"
                        },
                        "component": resolve => require(["business/figurevalue/list/list.vue"], resolve)
                    },
                    {
                       "name": "figurevalue-setting",
                        "path": "setting/:figureid",
                        "meta": {
                            "title": "新建"
                        },
                        "component": resolve => require(["business/figurevalue/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "figurevalue-modify",
                        "path": "modify/:id",
                        "meta": {
                            "title": "保存"
                        },
                        "component": resolve => require(["business/figurevalue/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "figurevalue-detail",
                        "path": "detail/:id",
                        "meta": {
                            "title": "详情"
                        },
                        "component": resolve => require(["business/figurevalue/detail/detail.vue"], resolve)
                    }
                ]
            },
            {
                "name": "chatmessage",
                "path": "chatmessage",
                "meta": {
                    "title": "聊天消息"
                },
                "redirect": { 
                    "name": "chatmessage-list" 
                },
                "component":Vue.extend({
                    "template": '<router-view transition="fade" transition-mode="out-in"></router-view>'
                }),
                "children":[
                    {
                        "name": "chatmessage-list",
                        "path": "list",
                        "meta": {
                            "title": "列表"
                        },
                        "component": resolve => require(["business/chatmessage/list/list.vue"], resolve)
                    },
                    {
                       "name": "chatmessage-setting",
                        "path": "setting/:s/:r",
                        "meta": {
                            "title": "新建"
                        },
                        "component": resolve => require(["business/chatmessage/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "chatmessage-modify",
                        "path": "modify/:id",
                        "meta": {
                            "title": "保存"
                        },
                        "component": resolve => require(["business/chatmessage/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "chatmessage-detail",
                        "path": "detail/:id",
                        "meta": {
                            "title": "详情"
                        },
                        "component": resolve => require(["business/chatmessage/detail/detail.vue"], resolve)
                    }
                ]
            },
            {
                "name": "animatemodel",
                "path": "animatemodel",
                "meta": {
                    "title": "动画模型"
                },
                "redirect": { 
                    "name": "animatemodel-list" 
                },
                "component":Vue.extend({
                    "template": '<router-view transition="fade" transition-mode="out-in"></router-view>'
                }),
                "children":[
                    {
                        "name": "animatemodel-list",
                        "path": "list",
                        "meta": {
                            "title": "列表"
                        },
                        "component": resolve => require(["business/animatemodel/list/list.vue"], resolve)
                    },
                    {
                       "name": "animatemodel-setting",
                        "path": "setting",
                        "meta": {
                            "title": "新建"
                        },
                        "component": resolve => require(["business/animatemodel/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "animatemodel-modify",
                        "path": "modify/:id",
                        "meta": {
                            "title": "保存"
                        },
                        "component": resolve => require(["business/animatemodel/setting/setting.vue"], resolve)
                    },
                    {
                        "name": "animatemodel-detail",
                        "path": "detail/:id",
                        "meta": {
                            "title": "详情"
                        },
                        "component": resolve => require(["business/animatemodel/detail/detail.vue"], resolve)
                    }
                ]
            },
            {
              "name": "figuretemplate",
              "path": "figuretemplate",
              "meta": {
                  "title": "形象模版"
              },
              "redirect": { 
                  "name": "figuretemplate-list" 
              },
              "component":Vue.extend({
                  "template": '<router-view transition="fade" transition-mode="out-in"></router-view>'
              }),
              "children":[
                  {
                      "name": "figuretemplate-list",
                      "path": "list",
                      "meta": {
                          "title": "列表"
                      },
                      "component": resolve => require(["business/figuretemplate/list/list.vue"], resolve)
                  },
                  {
                     "name": "figuretemplate-setting",
                      "path": "setting",
                      "meta": {
                          "title": "新建"
                      },
                      "component": resolve => require(["business/figuretemplate/setting/setting.vue"], resolve)
                  },
                  {
                      "name": "figuretemplate-modify",
                      "path": "modify/:id",
                      "meta": {
                          "title": "保存"
                      },
                      "component": resolve => require(["business/figuretemplate/setting/setting.vue"], resolve)
                  },
                  {
                      "name": "figuretemplate-detail",
                      "path": "detail/:id",
                      "meta": {
                          "title": "详情"
                      },
                      "component": resolve => require(["business/figuretemplate/detail/detail.vue"], resolve)
                  }
              ]
          },
          {
            "name": "animatetype",
            "path": "animatetype",
            "meta": {
                "title": "动画类型"
            },
            "redirect": { 
                "name": "animatetype-list" 
            },
            "component":Vue.extend({
                "template": '<router-view transition="fade" transition-mode="out-in"></router-view>'
            }),
            "children":[
                {
                    "name": "animatetype-list",
                    "path": "list",
                    "meta": {
                        "title": "列表"
                    },
                    "component": resolve => require(["business/animatetype/list/list.vue"], resolve)
                },
                {
                   "name": "animatetype-setting",
                    "path": "setting",
                    "meta": {
                        "title": "新建"
                    },
                    "component": resolve => require(["business/animatetype/setting/setting.vue"], resolve)
                },
                {
                    "name": "animatetype-modify",
                    "path": "modify/:id",
                    "meta": {
                        "title": "保存"
                    },
                    "component": resolve => require(["business/animatetype/setting/setting.vue"], resolve)
                },
                {
                    "name": "animatetype-detail",
                    "path": "detail/:id",
                    "meta": {
                        "title": "详情"
                    },
                    "component": resolve => require(["business/animatetype/detail/detail.vue"], resolve)
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