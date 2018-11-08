/**
 * Created by gaoyang on 2018/08/16 15:33.
 * @title 动画模型新建/修改js
 */
export default {
  data() {
    return {
      //参数
      params: {
        "name": "",
        "createdtime": "",
        "defs": "",
        "type":"",
        "figuretemplateid":"",
        "animateType":"",
        "usenum": ""
      },
      types:{
        "0":"未知类型",
        "1":"脸",
        "2":"刘海",
        "3":"尾发",
        "4":"眼睛",
        "5":"鼻子",
        "6":"嘴巴",
        "7":"耳朵",
        "8":"上身",
        "9":"下身"
      },
      animatetypes:[],
      //表单验证规则
      formRule: {
        name: {
          required: true,
          message: "请输入名称",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        type: {
          required: true,
          message: "请选择类型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        animatetypeid: {
          required: false,
          message: "请选择动画类型",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        figuretemplateid: {
          required: false,
          message: "形象模版id",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        createdtime: {
          required: true,
          message: "请输入创建时间",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        defs: {
          required: true,
          message: "请输入定义",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        usenum: {
          required: true,
          message: "请输入使用数量",
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
      this.getAnimatetypes();
    }

  },
  methods: {

    /**
     * 获取详情
     * @return {undefined}
     */
    getDetail() {
      this.eLoading.show();
      this.$http.post(__interface + "/animatemodel/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.params = response.data.result ? response.data.result : {};

      });
    },
    /**
     * 获取动画类型列表
     * @return {undefined}
     */
    getAnimatetypes() {
      this.eLoading.show();

      this.$http.post(__interface + "/animatetype/query", {
      }).then((response) => {
        this.animatetypes = response.data.result.data;
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
            createuser: userinfo.id
          });
        } else {
          params = Object.assign({}, this.params, {
            id: this.$route.params.id
          });
        }
        this.$http.post(params.id ? (__interface + "/animatemodel/update") : (__interface + "/animatemodel/add"), params).then((response) => {
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