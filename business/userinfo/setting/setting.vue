<!-- Created by gaoyang 用户信息新建/修改页面-->
<template>
  <e-page class="userinfo-setting-wrapper">
    <e-form :rules="formRule" width="430px" ref="form">

      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="用户名" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.username.error" :content="formRule.username.message" placement="right">
            <e-input width="300px" :error="username" v-model="params.username" max-length="50" counter="true" form-rule="username">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="密码" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.password.error" :content="formRule.password.message" placement="right">
            <e-textarea width="300px" :error="password" v-model="params.password" counter="true" max-length="100" form-rule="password">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="真实姓名" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.name.error" :content="formRule.name.message" placement="right">
            <e-input width="300px" :error="name" v-model="params.name" max-length="30" counter="true" form-rule="name">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="昵称" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.nickname.error" :content="formRule.nickname.message" placement="right">
            <e-textarea width="300px" :error="nickname" v-model="params.nickname" counter="true" max-length="100" form-rule="nickname">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="手机号" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.mobile.error" :content="formRule.mobile.message" placement="right">
            <e-input width="300px" :error="mobile" v-model="params.mobile" max-length="15" counter="true" form-rule="mobile">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="积分值" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.score.error" :content="formRule.score.message" placement="right">
            <e-input width="300px" :error="score" v-model="params.score" max-length="10" counter="true" form-rule="score">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="公司" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.company.error" :content="formRule.company.message" placement="right">
            <e-input width="300px" :error="company" v-model="params.company" max-length="32" counter="true" form-rule="company">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="用户类型" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.user_type.error" :content="formRule.user_type.message" placement="right">
            <e-input width="300px" :error="user_type" v-model="params.user_type" max-length="1" counter="true" form-rule="user_type">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="账户类型" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.level_type.error" :content="formRule.level_type.message" placement="right">
            <e-input width="300px" :error="level_type" v-model="params.level_type" max-length="1" counter="true" form-rule="level_type">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="头像" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.headimg.error" :content="formRule.headimg.message" placement="right">
            <e-textarea width="300px" :error="headimg" v-model="params.headimg" counter="true" max-length="300" form-rule="headimg">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="性别" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.sex.error" :content="formRule.sex.message" placement="right">
            <e-input width="300px" :error="sex" v-model="params.sex" max-length="4" counter="true" form-rule="sex">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="身份证号" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.icard.error" :content="formRule.icard.message" placement="right">
            <e-input width="300px" :error="icard" v-model="params.icard" max-length="20" counter="true" form-rule="icard">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="出生日期" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.birthday.error" :content="formRule.birthday.message" placement="right">
            <e-date width="300px" :error="birthday" v-model="params.birthday" form-rule="birthday">
            </e-date>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="国籍" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.splace_country.error" :content="formRule.splace_country.message" placement="right">
            <e-input width="300px" :error="splace_country" v-model="params.splace_country" max-length="10" counter="true" form-rule="splace_country">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="家庭住址-省" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.splace_prov.error" :content="formRule.splace_prov.message" placement="right">
            <e-input width="300px" :error="splace_prov" v-model="params.splace_prov" max-length="10" counter="true" form-rule="splace_prov">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="家庭住址-市" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.splace_city.error" :content="formRule.splace_city.message" placement="right">
            <e-input width="300px" :error="splace_city" v-model="params.splace_city" max-length="10" counter="true" form-rule="splace_city">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="家庭住址-县区" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.splace_district.error" :content="formRule.splace_district.message" placement="right">
            <e-input width="300px" :error="splace_district" v-model="params.splace_district" max-length="10" counter="true" form-rule="splace_district">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="家庭住址-详细地址" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.splace_detail.error" :content="formRule.splace_detail.message" placement="right">
            <e-textarea width="300px" :error="splace_detail" v-model="params.splace_detail" counter="true" max-length="2147483647" form-rule="splace_detail">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="邮编" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.postcode.error" :content="formRule.postcode.message" placement="right">
            <e-input width="300px" :error="postcode" v-model="params.postcode" max-length="6" counter="true" form-rule="postcode">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="知识同意标识" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.agree_status.error" :content="formRule.agree_status.message" placement="right">
            <e-input width="300px" :error="agree_status" v-model="params.agree_status" max-length="1" counter="true" form-rule="agree_status">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="联系电话" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.telephone.error" :content="formRule.telephone.message" placement="right">
            <e-input width="300px" :error="telephone" v-model="params.telephone" max-length="20" counter="true" form-rule="telephone">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="邮箱" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.email.error" :content="formRule.email.message" placement="right">
            <e-input width="300px" :error="email" v-model="params.email" max-length="30" counter="true" form-rule="email">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="qq" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.qq.error" :content="formRule.qq.message" placement="right">
            <e-input width="300px" :error="qq" v-model="params.qq" max-length="20" counter="true" form-rule="qq">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="注册来源" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.reg_from.error" :content="formRule.reg_from.message" placement="right">
            <e-input width="300px" :error="reg_from" v-model="params.reg_from" max-length="2" counter="true" form-rule="reg_from">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="用户标识" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.confirm_status.error" :content="formRule.confirm_status.message" placement="right">
            <e-input width="300px" :error="confirm_status" v-model="params.confirm_status" max-length="10" counter="true" form-rule="confirm_status">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="短信验证码" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.check_code.error" :content="formRule.check_code.message" placement="right">
            <e-input width="300px" :error="check_code" v-model="params.check_code" max-length="10" counter="true" form-rule="check_code">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="记录创建时间" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.create_time.error" :content="formRule.create_time.message" placement="right">
            <e-input width="300px" :error="create_time" v-model="params.create_time" max-length="10" counter="true" form-rule="create_time">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="修改时间" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.modi_time.error" :content="formRule.modi_time.message" placement="right">
            <e-input width="300px" :error="modi_time" v-model="params.modi_time" max-length="10" counter="true" form-rule="modi_time">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="账户余额" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.account_balance.error" :content="formRule.account_balance.message" placement="right">
            <e-input width="300px" :error="account_balance" v-model="params.account_balance" max-length="10" counter="true" form-rule="account_balance">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="上次登录时间" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.lastLoginTime.error" :content="formRule.lastLoginTime.message" placement="right">
            <e-input width="300px" :error="lastLoginTime" v-model="params.lastLoginTime" max-length="19" counter="true" form-rule="lastLoginTime">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="注册类型" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.registerType.error" :content="formRule.registerType.message" placement="right">
            <e-input width="300px" :error="registerType" v-model="params.registerType" max-length="32" counter="true" form-rule="registerType">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="关系好友" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.relationFriends.error" :content="formRule.relationFriends.message" placement="right">
            <e-textarea width="300px" :error="relationFriends" v-model="params.relationFriends" counter="true" max-length="2147483647" form-rule="relationFriends">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="签名" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.signname.error" :content="formRule.signname.message" placement="right">
            <e-textarea width="300px" :error="signname" v-model="params.signname" counter="true" max-length="100" form-rule="signname">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="设备token" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.deviceToken.error" :content="formRule.deviceToken.message" placement="right">
            <e-textarea width="300px" :error="deviceToken" v-model="params.deviceToken" counter="true" max-length="100" form-rule="deviceToken">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="金币数量" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.gold.error" :content="formRule.gold.message" placement="right">
            <e-input width="300px" :error="gold" v-model="params.gold" max-length="10" counter="true" form-rule="gold">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.catCircleMessageTime.error" :content="formRule.catCircleMessageTime.message" placement="right">
            <e-input width="300px" :error="catCircleMessageTime" v-model="params.catCircleMessageTime" max-length="19" counter="true" form-rule="catCircleMessageTime">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="客户端系统类型" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.clientostype.error" :content="formRule.clientostype.message" placement="right">
            <e-input width="300px" :error="clientostype" v-model="params.clientostype" max-length="10" counter="true" form-rule="clientostype">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="appopenid" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.appopenid.error" :content="formRule.appopenid.message" placement="right">
            <e-input width="300px" :error="appopenid" v-model="params.appopenid" max-length="32" counter="true" form-rule="appopenid">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="微信openid" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.wxopenid.error" :content="formRule.wxopenid.message" placement="right">
            <e-input width="300px" :error="wxopenid" v-model="params.wxopenid" max-length="32" counter="true" form-rule="wxopenid">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="系统版本号" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.clientosversion.error" :content="formRule.clientosversion.message" placement="right">
            <e-input width="300px" :error="clientosversion" v-model="params.clientosversion" max-length="20" counter="true" form-rule="clientosversion">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="电话类型" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.clientPhoneType.error" :content="formRule.clientPhoneType.message" placement="right">
            <e-input width="300px" :error="clientPhoneType" v-model="params.clientPhoneType" max-length="50" counter="true" form-rule="clientPhoneType">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="举报次数" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.jubaocount.error" :content="formRule.jubaocount.message" placement="right">
            <e-input width="300px" :error="jubaocount" v-model="params.jubaocount" max-length="10" counter="true" form-rule="jubaocount">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="客户端版本" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.appversion.error" :content="formRule.appversion.message" placement="right">
            <e-input width="300px" :error="appversion" v-model="params.appversion" max-length="10" counter="true" form-rule="appversion">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="形象id" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.figureid.error" :content="formRule.figureid.message" placement="right">
            <e-input width="300px" :error="figureid" v-model="params.figureid" max-length="32" counter="true" form-rule="figureid">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="称号" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.chenghao.error" :content="formRule.chenghao.message" placement="right">
            <e-input width="300px" :error="chenghao" v-model="params.chenghao" max-length="32" counter="true" form-rule="chenghao">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="称号等级" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.chenghaolevel.error" :content="formRule.chenghaolevel.message" placement="right">
            <e-input width="300px" :error="chenghaolevel" v-model="params.chenghaolevel" max-length="10" counter="true" form-rule="chenghaolevel">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="称号序号" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.chenghaono.error" :content="formRule.chenghaono.message" placement="right">
            <e-input width="300px" :error="chenghaono" v-model="params.chenghaono" max-length="10" counter="true" form-rule="chenghaono">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="称号id" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.chenghaoid.error" :content="formRule.chenghaoid.message" placement="right">
            <e-input width="300px" :error="chenghaoid" v-model="params.chenghaoid" max-length="32" counter="true" form-rule="chenghaoid">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="关注数量" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.guanzhus.error" :content="formRule.guanzhus.message" placement="right">
            <e-input width="300px" :error="guanzhus" v-model="params.guanzhus" max-length="10" counter="true" form-rule="guanzhus">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="粉丝数量" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.fans.error" :content="formRule.fans.message" placement="right">
            <e-input width="300px" :error="fans" v-model="params.fans" max-length="10" counter="true" form-rule="fans">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="发布数量" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.deploys.error" :content="formRule.deploys.message" placement="right">
            <e-input width="300px" :error="deploys" v-model="params.deploys" max-length="10" counter="true" form-rule="deploys">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="空间样式" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.zoneStyle.error" :content="formRule.zoneStyle.message" placement="right">
            <e-input width="300px" :error="zoneStyle" v-model="params.zoneStyle" max-length="10" counter="true" form-rule="zoneStyle">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="背景样式 引用主题" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.zoneThemeId.error" :content="formRule.zoneThemeId.message" placement="right">
            <e-input width="300px" :error="zoneThemeId" v-model="params.zoneThemeId" max-length="32" counter="true" form-rule="zoneThemeId">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="空间音乐id" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.zoneAudioId.error" :content="formRule.zoneAudioId.message" placement="right">
            <e-textarea width="300px" :error="zoneAudioId" v-model="params.zoneAudioId" counter="true" max-length="200" form-rule="zoneAudioId">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row margin-top="20px" justify-content="center">
        <e-col width="150px">
          <e-button v-on:click="back" type="stroke" label="取消">
          </e-button>
          <e-button value="保存" type="solid" size="middle" v-on:click="save" margin-left="20px" label="保存">
          </e-button>
        </e-col>
      </e-row>
    </e-form>
  </e-page>
</template>

<script>
  import setting from "./setting";
  export default setting;
</script>

<style src="./setting.css"></style>