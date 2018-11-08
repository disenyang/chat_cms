/**
 * Created by gaoyang on 2018/08/02 15:00.
 * @title 形象图片新建/修改js
 */
export default {
  data() {
    return {
      //参数
      params: {
        "name": "",
        "url": "",
        "rankno": "",
        "figureid": "",
        "icon": "",
        "basic": 1,
        "reverseid": ""
      },
      figurevalues:[],
      //表单验证规则
      formRule: {
        name: {
          required: true,
          message: "请输入名称",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        url: {
          required: true,
          message: "请输入地址",
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
        icon: {
          required: true,
          message: "请输入图标",
          error: false,
          validator: (value, rule, callback) => {

          }
        },
        basic: {
          required: true,
          message: "请输入基本表情",
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
    }else{
      this.listValue();
    }

    
    

  },
  methods: {

    /**
     * 获取详情
     * @return {undefined}
     */
    getDetail() {
      this.eLoading.show();
      this.$http.post(__interface + "/figurevalue/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.params = response.data.result ? response.data.result : {};
        this.listValue();
      });
    },
    /**
     * 形象图片列表
     * @return {undefined}
     */
    listValue() {
      let params =  {
        figureid:this.$route.params.figureid||this.params.figureid
      };
      this.eLoading.show();
      this.$http.post(__interface + "/figurevalue/query", params)
        .then((response) => {
          this.figurevalues = response.data.result.data ? response.data.result.data : [];
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
            figureid: this.params.figureid||this.$route.params.figureid
          });
        } else {
          params = Object.assign({}, this.params, {
            id: this.$route.params.id,
            figureid: this.params.figureid||this.$route.params.figureid
          });
        }
        this.$http.post(params.id ? (__interface + "/figurevalue/update") : (__interface + "/figurevalue/add"), params).then((response) => {
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