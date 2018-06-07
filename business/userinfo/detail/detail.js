/**
 * Created by gaoyang on 2018/06/07 16:28.
 * @title 用户信息详情js
 */
export default {
  data() {
    return {
      //用户信息
      userinfo: {
        "username": "",
        "password": "",
        "name": "",
        "nickname": "",
        "mobile": "",
        "score": "",
        "company": "",
        "user_type": "",
        "level_type": "",
        "headimg": "",
        "sex": "",
        "icard": "",
        "birthday": "",
        "splace_country": "",
        "splace_prov": "",
        "splace_city": "",
        "splace_district": "",
        "splace_detail": "",
        "postcode": "",
        "agree_status": "",
        "telephone": "",
        "email": "",
        "qq": "",
        "reg_from": "",
        "confirm_status": "",
        "check_code": "",
        "create_time": "",
        "modi_time": "",
        "account_balance": "",
        "lastLoginTime": "",
        "registerType": "",
        "relationFriends": "",
        "signname": "",
        "deviceToken": "",
        "gold": "",
        "catCircleMessageTime": "",
        "clientostype": "",
        "appopenid": "",
        "wxopenid": "",
        "clientosversion": "",
        "clientPhoneType": "",
        "jubaocount": "",
        "appversion": "",
        "figureid": "",
        "chenghao": "",
        "chenghaolevel": "",
        "chenghaono": "",
        "chenghaoid": "",
        "guanzhus": "",
        "fans": "",
        "deploys": "",
        "zoneStyle": "",
        "zoneThemeId": "",
        "zoneAudioId": "",
        "createtime": ""
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
      this.$http.post(__interface + "/user/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.userinfo = response.data.result ? response.data.result : {};
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