/**
 * Created by gaoyang on 2018/08/16 15:33.
 * @title 动画模型详情js
 */
export default {
  data() {
    return {
      //动画模型
      animatemodel: {
        "name": "",
        "createdtime": "",
        "updatetime": "",
        "defs": "",
        "usenum": ""
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
      this.$http.post(__interface + "/animatemodel/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.animatemodel = response.data.result ? response.data.result : {};
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