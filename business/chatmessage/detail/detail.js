/**
 * Created by gaoyang on 2018/08/07 12:36.
 * @title 聊天消息详情js
 */
export default {
  data() {
    return {
      //聊天消息
      chatmessage: {
        "s": "",
        "r": "",
        "t": "",
        "m": "",
        "isread": "",
        "stime": "",
        "description": "",
        "icon": "",
        "resource": "",
        "suffix": "",
        "circle": "",
        "rankno": "",
        "headimg": "",
        "nickname": ""
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
      this.$http.post(__interface + "/chatmessage/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.chatmessage = response.data.result ? response.data.result : {};
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