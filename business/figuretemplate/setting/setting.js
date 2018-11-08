/**
 * Created by gaoyang on 2018/09/21 12:31.
 * @title 形象模版新建/修改js
 */
export default {
  data() {
    return {
      //参数
      params: {
        "name": "",
        "config": "",
        "previewfigure": "",
        "bones":"",
        "humanmodel2d":"",
        "humanmodel3d":"",
        "boneAnimates":"",
        "humanmodel2d45l":"",
        "bones45l":""
      },
      //表单验证规则
      formRule: {
        name: {
          required: true,
          message: "请输入模版名称",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        config: {
          required: true,
          message: "请输入模版配置",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        humanmodel2d:{
          required: false,
          message: "请输入2d人力模型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        humanmodel3d:{
          required: false,
          message: "请输入3d人体模型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        previewfigure: {
          required: true,
          message: "请输入预览形象",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        bones: {
          required: true,
          message: "请输入骨骼定义",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        boneAnimates: {
          required: true,
          message: "请输入骨骼动画",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        humanmodel2d45l: {
          required: true,
          message: "请输入左侧人体模型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        bones45l: {
          required: true,
          message: "请输入左侧骨骼",
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
      this.$http.post(__interface + "/figuretemplate/get", {
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
          });
        } else {
          params = Object.assign({}, this.params, {
            id: this.$route.params.id,
            updateuser: userinfo.id,
          });
        }
        this.$http.post(params.id ? (__interface + "/figuretemplate/update") : (__interface + "/figuretemplate/add"), params).then((response) => {
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