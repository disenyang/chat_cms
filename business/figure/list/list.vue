<!-- Created by gaoyang 形象列表页面-->
<template>
  <e-page class="figure-list-wrapper">

    <e-row>
      <e-button @click="gotoNew()" label="新建形象"></e-button>
    </e-row>

    <e-container>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="名称"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.name" max-length="40" counter="true">
          </e-input>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="排序号"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.rankno" max-length="10" counter="true">
          </e-input>
        </e-col>
        <e-col span="3" class="p-search-content p-text-left">
          <e-button size="middle" @click="search" margin-left="10px" label="查询"></e-button>
        </e-col>
      </e-row>
    </e-container>
    <e-table :data-list="dataList" stripe empty-default="">
      <e-column align="center" title="名称" relate="name">
        <e-router-link slot-scope="props" :label="props.line.name" :to="{ name: 'figure-detail', params: { id: props.line.id }}">
        </e-router-link>
      </e-column>
     
      <e-column align="center" title="图标" relate="icon">
        <e-img slot-scope="props" image-width="50px" image-height="50px" :url="props.line.icon">
        </e-img>
      </e-column>
      <e-column align="center" title="排序号" relate="rankno">
        <e-label slot-scope="props" color="#666" :label="props.line.rankno"></e-label>
      </e-column>
      <e-column align="center" title="创建时间" relate="createdtime">
        <e-label slot-scope="props" color="#666" :label="props.line.createdtime"></e-label>
      </e-column>
      <e-column align="center" :width="120" title="操作" fixed="right">
        <e-container slot-scope="props">
          <e-router-link label="修改" :to="{name: 'figure-modify', params: {id: props.line.id}}">
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