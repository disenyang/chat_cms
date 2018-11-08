<!-- Created by gaoyang 聊天消息列表页面-->
<template>
  <e-page class="chatmessage-list-wrapper">

    <e-row>
      <e-button @click="gotoNew()" label="新建聊天消息"></e-button>
    </e-row>

    <e-container>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="发送人"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.s">
          </e-input>
        </e-col>
        <e-col class="p-search-label">
          <e-label label="接受人"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.r">
          </e-input>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col class="p-search-label">
          <e-label label="消息类型"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.t">
          </e-input>
        </e-col>
        <e-col class="p-search-label">
          <e-label label="消息内容"></e-label>
        </e-col>
        <e-col width="200px" class="p-search-content">
          <e-input width="300px" v-model="params.m">
          </e-input>
        </e-col>
        <e-col span="3" class="p-search-content p-text-left">
          <e-button size="middle" @click="search" margin-left="10px" label="查询"></e-button>
        </e-col>
      </e-row>
    </e-container>
    <e-table :data-list="dataList" stripe empty-default="">
      <e-column align="center" title="发送人" relate="s">
        <e-router-link slot-scope="props" :label="props.line.s" :to="{ name: 'chatmessage-detail', params: { id: props.line.id }}">
        </e-router-link>
      </e-column>
      <e-column align="center" title="发送人昵称" relate="nickname">
        <e-label slot-scope="props" color="#666" :label="props.line.nickname"></e-label>
      </e-column>
      <e-column align="center" title="发送人头像" relate="headimg">
        <e-img slot-scope="props" image-width="50px" image-height="50px" :url="props.line.headimg">
        </e-img>
      </e-column>
      <e-column align="center" title="接受人" relate="r">
        <e-label slot-scope="props" color="#666" :label="props.line.r"></e-label>
      </e-column>
      <e-column align="center" title="消息类型" relate="t">
        <e-label slot-scope="props" color="#666" :label="props.line.t"></e-label>
      </e-column>
      <e-column align="center" title="消息内容" relate="m">
        <e-label slot-scope="props" color="#666" :label="props.line.m"></e-label>
      </e-column>
      <e-column align="center" title="是否读" relate="read">
        <e-label slot-scope="props" color="#666" :label="props.line.read==1?'已读':'未读'"></e-label>
      </e-column>
      <e-column align="center" title="发送时间" relate="stime">
        <e-label slot-scope="props" color="#666" :label="props.line.stime"></e-label>
      </e-column>
      <e-column align="center" :width="120" title="操作" fixed="right">
        <e-container slot-scope="props">
          <e-router-link label="修改" :to="{name: 'chatmessage-modify', params: {id: props.line.id}}">
          </e-router-link>
          <e-button type="text" @click="del($event, props.line.id)" label="删除">
          </e-button>
          <e-router-link label="客服回复" :to="{name: 'chatmessage-setting', params: {s:'system',r:props.line.s}}">
          </e-router-link>
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