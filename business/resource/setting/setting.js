/**
 * Created by gaoyang on 2018/09/06 14:15.
 * @title 发布新建/修改js
 */
export default {
  data() {
    return {
      //参数
      params: {
        "title": "",
        "commentnum": "",
        "goodnum": "",
        "collectnum": "",
        "audioid": "",
        "resourcetype": "",
        "resourceurl": "",
        "createdid": "",
        "createdtime": "",
        "coverimg": ""
      },
      //表单验证规则
      formRule: {
        title: {
          required: false,
          message: "请输入名称",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        commentnum: {
          required: false,
          message: "请输入评论量",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        goodnum: {
          required: false,
          message: "请输入称赞量",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        collectnum: {
          required: false,
          message: "请输入收藏量",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        audioid: {
          required: false,
          message: "请输入音乐id",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        resourcetype: {
          required: false,
          message: "请输入资源类型,0:图片 1:视频",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        resourceurl: {
          required: false,
          message: "请输入资源地址",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        createdid: {
          required: false,
          message: "请输入创建用户",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        createdtime: {
          required: false,
          message: "请输入创建时间",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        coverimg: {
          required: false,
          message: "请输入封面图",
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
      this.$http.post(__interface + "/resource/get", {
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
        this.$http.post(params.id ? (__interface + "/resource/update") : (__interface + "/resource/add"), params).then((response) => {
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