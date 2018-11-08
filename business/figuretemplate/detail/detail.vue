<!-- Created by gaoyang 形象模版详情页面-->
<template>
  <e-page class="figuretemplate-detail-wrapper}">

    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="模版名称">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figuretemplate.name"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="模版配置">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figuretemplate.config"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="预览形象">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figuretemplate.previewfigure"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="创建时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figuretemplate.createtime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="修改时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figuretemplate.updatetime"></e-label>
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