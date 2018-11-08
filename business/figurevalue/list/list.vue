<!-- Created by gaoyang 形象图片列表页面-->
<template>
  <e-page class="figurevalue-list-wrapper">

    <e-row>
      <e-button @click="gotoNew()" label="新建形象图片"></e-button>
    </e-row>

    <e-container>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="名称"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.name" max-length="30" counter="true">
          </e-input>
        </e-col>
        <e-col class="p-search-label">
          <e-label label="地址"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-textarea width="300px" v-model="params.url" counter="true" max-length="200">
          </e-textarea>
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
        <e-col class="p-search-label">
          <e-label label="使用数量"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.usenum" max-length="10" counter="true">
          </e-input>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="所属形象"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.figureid" max-length="32" counter="true">
          </e-input>
        </e-col>
        <e-col class="p-search-label">
          <e-label label="图标"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-textarea width="300px" v-model="params.icon" counter="true" max-length="200">
          </e-textarea>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="类型"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.type" max-length="10" counter="true">
          </e-input>
        </e-col>
        <e-col class="p-search-label">
          <e-label label="基本表情"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.basic" max-length="10" counter="true">
          </e-input>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="反向形象图片"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.reverseid" max-length="32" counter="true">
          </e-input>
        </e-col>
        <e-col span="3" class="p-search-content p-text-left">
          <e-button size="middle" @click="search" margin-left="10px" label="查询"></e-button>
        </e-col>
      </e-row>
    </e-container>
    <e-table :data-list="dataList" stripe empty-default="">
      <e-column align="center" title="名称" relate="name">
        <e-router-link slot-scope="props" :label="props.line.name" :to="{ name: 'figurevalue-detail', params: { id: props.line.id }}">
        </e-router-link>
      </e-column>
      <e-column align="center" title="地址" relate="url">
        <e-label slot-scope="props" color="#666" :label="props.line.url"></e-label>
      </e-column>
      <e-column align="center" title="排序号" relate="rankno">
        <e-label slot-scope="props" color="#666" :label="props.line.rankno"></e-label>
      </e-column>
      <e-column align="center" title="使用数量" relate="usenum">
        <e-label slot-scope="props" color="#666" :label="props.line.usenum"></e-label>
      </e-column>
      <e-column align="center" title="所属形象" relate="figureid">
        <e-label slot-scope="props" color="#666" :label="props.line.figureid"></e-label>
      </e-column>
      <e-column align="center" title="图标" relate="icon">
        <e-label slot-scope="props" color="#666" :label="props.line.icon"></e-label>
      </e-column>
      <e-column align="center" title="类型" relate="type">
        <e-label slot-scope="props" color="#666" :label="props.line.type"></e-label>
      </e-column>
      <e-column align="center" title="基本表情" relate="basic">
        <e-label slot-scope="props" color="#666" :label="props.line.basic"></e-label>
      </e-column>
      <e-column align="center" title="反向形象图片" relate="reverseid">
        <e-label slot-scope="props" color="#666" :label="props.line.reverseid"></e-label>
      </e-column>
      <e-column align="center" :width="120" title="操作" fixed="right">
        <e-container slot-scope="props">
          <e-router-link label="修改" :to="{name: 'figurevalue-modify', params: {id: props.line.id}}">
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