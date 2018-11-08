/**
 * Created by gaoyang on 2018/09/25 16:46.
 * @title 动画类型详情js
 */
export default {
  data() {
    return {
      //动画类型
      animatetype: {
        "name": "",
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
      this.$http.post(__interface + "/animatetype/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.animatetype = response.data.result ? response.data.result : {};
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