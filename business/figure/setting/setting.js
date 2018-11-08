/**
 * Created by gaoyang on 2018/08/02 12:05.
 * @title 形象新建/修改js
 */
export default {
  data() {
    return {
      //参数
      params: {
        "createdtime": "",
        "name": "",
        "icon": "",
        "rankno": ""
      },
      //表单验证规则
      formRule: {
        name: {
          required: true,
          message: "请输入名称",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        icon: {
          required: true,
          message: "请输入图标",
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
      this.$http.post(__interface + "/figure/get", {
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
        console.log(this.params);
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
        console.log(1);

        this.$http.post(params.id ? (__interface + "/figure/update") : (__interface + "/figure/add"), params).then((response) => {
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