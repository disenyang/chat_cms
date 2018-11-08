/**
 * Created by gaoyang on 2018/08/02 15:00.
 * @title 形象图片详情js
 */
export default {
  data() {
    return {
      //形象图片
      figurevalue: {
        "name": "",
        "url": "",
        "rankno": "",
        "usenum": "",
        "figureid": "",
        "icon": "",
        "type": "",
        "basic": "",
        "reverseid": ""
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
      this.$http.post(__interface + "/figurevalue/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.figurevalue = response.data.result ? response.data.result : {};
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