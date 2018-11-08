<!-- Created by gaoyang 动画类型列表页面-->
<template>
  <e-page class="animatetype-list-wrapper">

    <e-row>
      <e-button @click="gotoNew()" label="新建动画类型"></e-button>
    </e-row>

    <e-container>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="动画名称"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.name" max-length="40" counter="true">
          </e-input>
        </e-col>
        <e-col span="3" class="p-search-content p-text-left">
          <e-button size="middle" @click="search" margin-left="10px" label="查询"></e-button>
        </e-col>
      </e-row>
    </e-container>
    <e-table :data-list="dataList" stripe empty-default="">
      <e-column align="center" title="动画名称" relate="name">
        <e-router-link slot-scope="props" :label="props.line.name" :to="{ name: 'animatetype-detail', params: { id: props.line.id }}">
        </e-router-link>
      </e-column>
      <e-column align="center" title="创建时间" relate="createtime">
        <e-label slot-scope="props" color="#666" :label="props.line.createtime"></e-label>
      </e-column>
      <e-column align="center" title="修改时间" relate="updatetime">
        <e-label slot-scope="props" color="#666" :label="props.line.updatetime"></e-label>
      </e-column>
      <e-column align="center" :width="120" title="操作" fixed="right">
        <e-container slot-scope="props">
          <e-router-link label="修改" :to="{name: 'animatetype-modify', params: {id: props.line.id}}">
          </e-router-link>
          <e-button type="text" @click="del($event, props.line.id)" label="删除">
          </e-button>
        </e-container>
      </e-column>
    </e-table>
  </e-page>
</template>
<script>
  import list from "./list";
  export default list;
</script>

<style src="./list.css"></style>