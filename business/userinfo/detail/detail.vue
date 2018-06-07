<!-- Created by gaoyang 用户信息详情页面-->
<template>
  <e-page class="userinfo-detail-wrapper}">

    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="用户名">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.username"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="密码">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.password"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="真实姓名">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.name"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="昵称">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.nickname"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="手机号">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.mobile"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="积分值">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.score"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="公司">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.company"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="用户类型">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.user_type"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="账户类型">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.level_type"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="头像">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.headimg"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="性别">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.sex"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="身份证号">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.icard"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="出生日期">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.birthday"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="国籍">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.splace_country"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="家庭住址-省">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.splace_prov"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="家庭住址-市">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.splace_city"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="家庭住址-县区">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.splace_district"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="家庭住址-详细地址">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.splace_detail"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="邮编">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.postcode"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="知识同意标识">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.agree_status"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="联系电话">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.telephone"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="邮箱">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.email"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="qq">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.qq"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="注册来源">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.reg_from"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="用户标识">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.confirm_status"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="短信验证码">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.check_code"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="记录创建时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.create_time"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="修改时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.modi_time"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="账户余额">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.account_balance"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="上次登录时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.lastLoginTime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="注册类型">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.registerType"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="关系好友">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.relationFriends"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="签名">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.signname"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="设备token">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.deviceToken"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="金币数量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.gold"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.catCircleMessageTime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="客户端系统类型">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.clientostype"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="appopenid">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.appopenid"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="微信openid">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.wxopenid"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="系统版本号">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.clientosversion"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="电话类型">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.clientPhoneType"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="举报次数">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.jubaocount"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="客户端版本">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.appversion"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="形象id">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.figureid"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="称号">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.chenghao"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="称号等级">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.chenghaolevel"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="称号序号">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.chenghaono"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="称号id">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.chenghaoid"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="关注数量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.guanzhus"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="粉丝数量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.fans"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="发布数量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.deploys"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="空间样式">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.zoneStyle"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="背景样式 引用主题">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.zoneThemeId"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="空间音乐id">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.zoneAudioId"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="创建时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="userinfo.createtime"></e-label>
      </e-col>
    </e-row>
    <e-row>
      <e-col width="150px">
        <e-button v-on:click="back" type="stroke" label="返回">
        </e-button>
      </e-col>
    </e-row>
  </e-page>
</template>
<script>
  import detail from "./detail";
  export default detail;
</script>
<style src="./detail.css"></style>