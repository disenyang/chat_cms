<!-- Created by gaoyang 发布列表页面-->
<template>
  <e-page class="resource-list-wrapper">
    <e-container>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="名称"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.title" counter="true" max-length="2000">
          </e-input>
        </e-col>
        <e-col class="p-search-label">
          <e-label label="创建用户"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.createdid" max-length="32" counter="true">
          </e-input>
        </e-col>
        <e-col span="3" class="p-search-content p-text-left">
          <e-button size="middle" @click="search" margin-left="10px" label="查询"></e-button>
        </e-col>
      </e-row>
    </e-container>
    <e-table :data-list="dataList" stripe empty-default="">
      <e-column align="center" title="名称" relate="title">
        <e-router-link slot-scope="props" :label="props.line.title" :to="{ name: 'resource-detail', params: { id: props.line.id }}">
        </e-router-link>
      </e-column>
      <e-column align="center" title="资源地址" relate="resourceurl">
        <e-label slot-scope="props" color="#666" :label="props.line.resourceurl"></e-label>
      </e-column>
      <e-column align="center" title="评论量" relate="commentnum">
        <e-label slot-scope="props" color="#666" :label="props.line.commentnum"></e-label>
      </e-column>
      <e-column align="center" title="称赞量" relate="goodnum">
        <e-label slot-scope="props" color="#666" :label="props.line.goodnum"></e-label>
      </e-column>
      <e-column align="center" title="收藏量" relate="collectnum">
        <e-label slot-scope="props" color="#666" :label="props.line.collectnum"></e-label>
      </e-column>
      <e-column align="center" title="音乐id" relate="audioId">
        <e-label slot-scope="props" color="#666" :label="props.line.audioId"></e-label>
      </e-column>
      <e-column align="center" title="封面图" relate="coverimg">
        <e-img slot-scope="props" image-width="30px" :url="props.line.coverimg">
        </e-img>
      </e-column>
      <e-column align="center" :width="120" title="操作" fixed="right">
        <e-container slot-scope="props">
          <e-router-link label="修改" :to="{name: 'resource-modify', params: {id: props.line.id}}">
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