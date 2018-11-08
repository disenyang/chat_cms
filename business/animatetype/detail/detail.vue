<!-- Created by gaoyang 动画类型详情页面-->
<template>
  <e-page class="animatetype-detail-wrapper}">

    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="动画名称">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="animatetype.name"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="创建时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="animatetype.createtime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="修改时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="animatetype.updatetime"></e-label>
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