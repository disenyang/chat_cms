<!-- Created by gaoyang 用户信息列表页面-->
<template>
  <e-page class="userinfo-list-wrapper">

    <e-row>
      <e-button @click="gotoNew()" label="新建用户信息"></e-button>
    </e-row>

    <e-container>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="用户名"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.username" max-length="50" counter="true">
          </e-input>
        </e-col>
        <e-col class="p-search-label">
          <e-label label="真实姓名"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.name" max-length="30" counter="true">
          </e-input>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="昵称"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-textarea width="300px" v-model="params.nickname" counter="true" max-length="100">
          </e-textarea>
        </e-col>
        <e-col class="p-search-label">
          <e-label label="手机号"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.mobile" max-length="15" counter="true">
          </e-input>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="性别"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.sex" max-length="4" counter="true">
          </e-input>
        </e-col>
        <e-col span="3" class="p-search-content p-text-left">
          <e-button size="middle" @click="search" margin-left="10px" label="查询"></e-button>
        </e-col>
      </e-row>
    </e-container>
    <e-table :data-list="dataList" stripe empty-default="">
      <e-column align="center" title="用户名" relate="username">
        <e-router-link slot-scope="props" :label="props.line.username" :to="{ name: 'userinfo-detail', params: { id: props.line.id }}">
        </e-router-link>
      </e-column>
      <e-column align="center" title="真实姓名" relate="name">
        <e-label slot-scope="props" color="#666" :label="props.line.name"></e-label>
      </e-column>
      <e-column align="center" title="昵称" relate="nickname">
        <e-label slot-scope="props" color="#666" :label="props.line.nickname"></e-label>
      </e-column>
      <e-column align="center" title="手机号" relate="mobile">
        <e-label slot-scope="props" color="#666" :label="props.line.mobile"></e-label>
      </e-column>
      <e-column align="center" title="头像" relate="headimg">
        <e-img slot-scope="props" image-width="50px" image-height="50px" :url="props.line.headimg"></e-img>
      </e-column>
      <e-column align="center" title="性别" relate="sex">
        <e-label slot-scope="props" color="#666" :label="props.line.sex"></e-label>
      </e-column>
      <e-column align="center" title="状态" relate="sex">
        <e-label slot-scope="props" color="#666" :label="props.line.status==0?'平台':'临时'"></e-label>
      </e-column>
      <e-column align="center" title="签名" relate="signname">
        <e-label slot-scope="props" color="#666" :label="props.line.signname"></e-label>
      </e-column>
      <e-column align="center" title="客户端系统类型" relate="clientostype">
        <e-label slot-scope="props" color="#666" :label="props.line.clientostype"></e-label>
      </e-column>
      <e-column align="center" title="系统版本号" relate="clientosversion">
        <e-label slot-scope="props" color="#666" :label="props.line.clientosversion"></e-label>
      </e-column>
      <e-column align="center" title="客户端版本" relate="appversion">
        <e-label slot-scope="props" color="#666" :label="props.line.appversion"></e-label>
      </e-column>
      <e-column align="center" :width="120" title="操作" fixed="right">
        <e-container slot-scope="props">
          <e-router-link label="修改" :to="{name: 'userinfo-modify', params: {id: props.line.id}}">
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