/**
 * Created by gaoyang on 2018/09/21 12:31.
 * @title 形象模版详情js
 */
export default {
  data() {
    return {
      //形象模版
      figuretemplate: {
        "name": "",
        "config": "",
        "previewfigure": "",
        "createtime": "",
        "updatetime": ""
      }
    }
  },
  watch: {

  },
  mounted() {
    this.getDetail();
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
        this.figuretemplate = response.data.result ? response.data.result : {};
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