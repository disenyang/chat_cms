<!-- Created by gaoyang 聊天消息详情页面-->
<template>
  <e-page class="chatmessage-detail-wrapper}">

    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="发送人">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.s"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="接受人">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.r"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="消息类型">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.t"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="消息内容">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.m"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="是否读">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.read"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="发送时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.stime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="描述">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.desc"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="图标">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.icon"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="资源">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.resource"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="前缀">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.suffix"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="圈子">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.circle"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="排序号">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.rankno"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="发送人头像">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.headimg"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="发送人昵称">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="chatmessage.nickname"></e-label>
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