<!-- Created by gaoyang 动画模型详情页面-->
<template>
  <e-page class="animatemodel-detail-wrapper}">

    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="名称">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="animatemodel.name"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="创建时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="animatemodel.createdtime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="更新时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="animatemodel.updatetime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="定义">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="animatemodel.defs"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="使用数量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="animatemodel.usenum"></e-label>
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