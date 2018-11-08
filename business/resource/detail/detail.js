/**
 * Created by gaoyang on 2018/09/06 14:15.
 * @title 发布详情js
 */
export default {
  data() {
    return {
      //发布
      resource: {
        "title": "",
        "commentnum": "",
        "goodnum": "",
        "collectnum": "",
        "audioid": "",
        "gradenum": "",
        "resourcetype": "",
        "resourceurl": "",
        "createdid": "",
        "createdtime": "",
        "coverimg": ""
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
      this.$http.post(__interface + "/resource/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.resource = response.data.result ? response.data.result : {};
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