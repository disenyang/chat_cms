/**
 * Created by gaoyang on 2018/09/25 16:46.
 * @title 动画类型新建/修改js
 */
export default {
  data() {
    return {
      //参数
      params: {
        "name": "",
        "boneAnimates":"",
        "rotatetype":"",
        "reverseid":""
      },
      rotatetypes:{
        "0":"正面",
        "1":"左侧面"
      },
      animatetypes:[],
      //表单验证规则
      formRule: {
        name: {
          required: true,
          message: "请输入动画名称",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        rotatetype: {
          required: true,
          message: "请选择旋转类型",
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
        reverseid: {
          required: false,
          message: "请选择反转动画",
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
      this.$http.post(__interface + "/animatetype/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.params = response.data.result ? response.data.result : {};
        this.listValue();
      });
    },
    /**
     * 动画类型列表
     * @return {undefined}
     */
    listValue() {
      let params =  {
        
      };
      this.eLoading.show();
      this.$http.post(__interface + "/animatetype/query", params)
        .then((response) => {
          this.animatetypes = response.data.result.data ? response.data.result.data : [];
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
            id: this.$route.params.id,
            updateuser: userinfo.id
          });
        }
        this.$http.post(params.id ? (__interface + "/animatetype/update") : (__interface + "/animatetype/add"), params).then((response) => {
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