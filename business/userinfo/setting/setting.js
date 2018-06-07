/**
 * Created by gaoyang on 2018/06/07 16:28.
 * @title 用户信息新建/修改js
 */
export default {
  data() {
    return {
      //参数
      params: {
        "username": "",
        "password": "",
        "name": "",
        "nickname": "",
        "mobile": "",
        "score": "",
        "company": "",
        "user_type": "",
        "level_type": "",
        "headimg": "",
        "sex": "",
        "icard": "",
        "birthday": "",
        "splace_country": "",
        "splace_prov": "",
        "splace_city": "",
        "splace_district": "",
        "splace_detail": "",
        "postcode": "",
        "agree_status": "",
        "telephone": "",
        "email": "",
        "qq": "",
        "reg_from": "",
        "confirm_status": "",
        "check_code": "",
        "create_time": "",
        "modi_time": "",
        "account_balance": "",
        "lastLoginTime": "",
        "registerType": "",
        "relationFriends": "",
        "signname": "",
        "deviceToken": "",
        "gold": "",
        "catCircleMessageTime": "",
        "clientostype": "",
        "appopenid": "",
        "wxopenid": "",
        "clientosversion": "",
        "clientPhoneType": "",
        "jubaocount": "",
        "appversion": "",
        "figureid": "",
        "chenghao": "",
        "chenghaolevel": "",
        "chenghaono": "",
        "chenghaoid": "",
        "guanzhus": "",
        "fans": "",
        "deploys": "",
        "zoneStyle": "",
        "zoneThemeId": "",
        "zoneAudioId": ""
      },
      //表单验证规则
      formRule: {
        username: {
          required: false,
          message: "请输入用户名",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        password: {
          required: false,
          message: "请输入密码",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        name: {
          required: false,
          message: "请输入真实姓名",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        nickname: {
          required: false,
          message: "请输入昵称",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        mobile: {
          required: false,
          message: "请输入手机号",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        score: {
          required: false,
          message: "请输入积分值",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        company: {
          required: true,
          message: "请输入公司",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        user_type: {
          required: false,
          message: "请输入用户类型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        level_type: {
          required: false,
          message: "请输入账户类型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        headimg: {
          required: true,
          message: "请输入头像",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        sex: {
          required: false,
          message: "请输入性别",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        icard: {
          required: false,
          message: "请输入身份证号",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        birthday: {
          required: false,
          message: "请输入出生日期",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        splace_country: {
          required: false,
          message: "请输入国籍",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        splace_prov: {
          required: false,
          message: "请输入家庭住址-省",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        splace_city: {
          required: false,
          message: "请输入家庭住址-市",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        splace_district: {
          required: false,
          message: "请输入家庭住址-县区",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        splace_detail: {
          required: false,
          message: "请输入家庭住址-详细地址",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        postcode: {
          required: false,
          message: "请输入邮编",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        agree_status: {
          required: false,
          message: "请输入知识同意标识",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        telephone: {
          required: false,
          message: "请输入联系电话",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        email: {
          required: false,
          message: "请输入邮箱",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        qq: {
          required: false,
          message: "请输入qq",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        reg_from: {
          required: false,
          message: "请输入注册来源",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        confirm_status: {
          required: false,
          message: "请输入用户标识",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        check_code: {
          required: false,
          message: "请输入短信验证码",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        create_time: {
          required: false,
          message: "请输入记录创建时间",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        modi_time: {
          required: false,
          message: "请输入修改时间",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        account_balance: {
          required: false,
          message: "请输入账户余额",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        lastLoginTime: {
          required: true,
          message: "请输入上次登录时间",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        registerType: {
          required: true,
          message: "请输入注册类型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        relationFriends: {
          required: false,
          message: "请输入关系好友",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        signname: {
          required: false,
          message: "请输入签名",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        deviceToken: {
          required: false,
          message: "请输入设备token",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        gold: {
          required: false,
          message: "请输入金币数量",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        catCircleMessageTime: {
          required: false,
          message: "请输入",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        clientostype: {
          required: false,
          message: "请输入客户端系统类型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        appopenid: {
          required: false,
          message: "请输入appopenid",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        wxopenid: {
          required: false,
          message: "请输入微信openid",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        clientosversion: {
          required: false,
          message: "请输入系统版本号",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        clientPhoneType: {
          required: false,
          message: "请输入电话类型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        jubaocount: {
          required: false,
          message: "请输入举报次数",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        appversion: {
          required: false,
          message: "请输入客户端版本",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        figureid: {
          required: false,
          message: "请输入形象id",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        chenghao: {
          required: false,
          message: "请输入称号",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        chenghaolevel: {
          required: false,
          message: "请输入称号等级",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        chenghaono: {
          required: false,
          message: "请输入称号序号",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        chenghaoid: {
          required: false,
          message: "请输入称号id",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        guanzhus: {
          required: true,
          message: "请输入关注数量",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        fans: {
          required: true,
          message: "请输入粉丝数量",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        deploys: {
          required: false,
          message: "请输入发布数量",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        zoneStyle: {
          required: false,
          message: "请输入空间样式",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        zoneThemeId: {
          required: false,
          message: "请输入背景样式 引用主题",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        zoneAudioId: {
          required: true,
          message: "请输入空间音乐id",
          error: false,
          validator: (value, rule, callback) => {

          }
        }
      },

      //上传操作选项
      uploadOptions: {
        url: __interface + "/upload",
        fileName: "file",
        complete: (json) => {
          this.params.image = __interface + "/" + json.result.path;
        }
      }
    }
  },
  watch: {

  },
  mounted() {
    if (this.$route.params.id) {
      //修改页面
      this.getDetail();
    }

  },
  methods: {

    /**
     * 获取详情
     * @return {undefined}
     */
    getDetail() {
      this.eLoading.show();
      this.$http.post(__interface + "/user/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.params = response.data.result ? response.data.result : {};

      });
    },

    /**
     * 保存数据
     * @return {undefined}
     */
    save() {
      this.$refs.form.validate().then(() => {
        let params;
        if (!this.$route.params.id) {
          params = Object.assign({}, this.params, {
            createuser: userinfo.id,
            createusername: userinfo.nickname
          });
        } else {
          params = Object.assign({}, this.params, {
            id: this.$route.params.id,
            updateuser: userinfo.id,
            updateusername: userinfo.nickname
          });
        }
        this.$http.post(params.id ? (__interface + "/user/update") : (__interface + "/user/add"), params).then((response) => {
          this.eMessage({
            type: "success",
            message: "成功啦！",
            duration: 1000,
            closehandler: (el) => {
              this.back();
            }
          });
        });
      }).catch(() => {
        console.log("formRule", this.formRule);
      });

    },

    /**
     * 返回
     * @return {undefined}
     */
    back() {
      this.$router.go(-1);
    }

  }
}