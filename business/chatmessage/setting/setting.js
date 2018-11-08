/**
 * Created by gaoyang on 2018/08/07 12:36.
 * @title 聊天消息新建/修改js
 */
export default {
  data() {
    return {
      //参数
      params: {
        "s": "",
        "r": "",
        "t": "",
        "m": "",
        "stime": "",
        "desc": "",
        "icon": "",
        "resource": "",
        "suffix": "",
        "circle": "",
        "rankno": "",
        "headimg": "",
        "nickname": ""
      },
      //表单验证规则
      formRule: {
        s: {
          required: true,
          message: "请输入发送人",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        r: {
          required: false,
          message: "请输入接受人",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        t: {
          required: false,
          message: "请输入消息类型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        m: {
          required: false,
          message: "请输入消息内容",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        read: {
          required: true,
          message: "请输入是否读",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        stime: {
          required: true,
          message: "请输入发送时间",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        description: {
          required: false,
          message: "请输入描述",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        icon: {
          required: false,
          message: "请输入图标",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        resource: {
          required: false,
          message: "请输入资源",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        suffix: {
          required: false,
          message: "请输入前缀",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        circle: {
          required: false,
          message: "请输入圈子",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        rankno: {
          required: true,
          message: "请输入排序号",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        headimg: {
          required: false,
          message: "请输入发送人头像",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        nickname: {
          required: false,
          message: "请输入发送人昵称",
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
    this.params.s = this.$route.params.s;
    this.params.r = this.$route.params.r;
  },
  methods: {

    /**
     * 获取详情
     * @return {undefined}
     */
    getDetail() {
      this.eLoading.show();
      this.$http.post(__interface + "/chatmessage/get", {
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
            
          });
        } else {
          params = Object.assign({}, this.params, {
            id: this.$route.params.id
            
          });
        }
        this.$http.post(params.id ? (__interface + "/chatmessage/update") : (__interface + "/chatmessage/add"), params).then((response) => {
          this.eMessage({
            type: "success",
            message: "成功啦！",
            duration: 1000,
            closehandler: (el) => {
              
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