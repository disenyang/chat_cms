<!-- Created by gaoyang 发布详情页面-->
<template>
  <e-page class="resource-detail-wrapper}">

    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="名称">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.title"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="评论量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.commentnum"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="称赞量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.goodnum"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="收藏量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.collectnum"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="音乐id">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.audioid"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="评价量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.gradenum"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="资源类型,0:图片 1:视频">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.resourcetype"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="资源地址">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.resourceurl"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="创建用户">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.createdid"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="创建时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.createdtime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="封面图">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="resource.coverimg"></e-label>
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