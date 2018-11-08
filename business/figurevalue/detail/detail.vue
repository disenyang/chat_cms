<!-- Created by gaoyang 形象图片详情页面-->
<template>
  <e-page class="figurevalue-detail-wrapper}">

    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="名称">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.name"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="地址">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.url"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="排序号">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.rankno"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="使用数量">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.usenum"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="所属形象">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.figureid"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="图标">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.icon"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="类型">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.type"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="基本表情">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.basic"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="反向形象图片">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figurevalue.reverseid"></e-label>
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