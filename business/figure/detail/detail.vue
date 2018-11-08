<!-- Created by gaoyang 形象详情页面-->
<template>
  <e-page class="figure-detail-wrapper}">

    <e-row padding="true">
      <e-col span="1">
        <e-label color="#666" :label="figure.designer"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="创建时间">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figure.createdtime"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="名称">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figure.name"></e-label>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="图标">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-img slot-scope="props" image-width="50px" image-height="50px" :url="figure.icon">
        </e-img>
      </e-col>
    </e-row>
    <e-row padding="true">
      <e-col align-items="flex-start" width="100px" height="100%">
        <e-label label="排序号">
        </e-label>
      </e-col>
      <e-col span="1">
        <e-label color="#666" :label="figure.rankno"></e-label>
      </e-col>
    </e-row>
    <e-row>
      <e-col width="100%">
        <e-table :data-list="dataList" stripe empty-default="">
          <e-column align="center" title="名称" relate="name">
            <e-router-link slot-scope="props" :label="props.line.name" :to="{ name: 'figurevalue-detail', params: { id: props.line.id }}">
            </e-router-link>
          </e-column>
          <e-column align="center" title="图片" relate="url">
            <e-img slot-scope="props" image-width="50px" image-height="50px" :url="props.line.url">
            </e-img>
          </e-column>
          <e-column align="center" title="图标" relate="icon">
            <e-img slot-scope="props" image-width="50px" image-height="50px" :url="props.line.icon">
            </e-img>
          </e-column>
          <e-column align="center" title="排序号" relate="rankno">
            <e-label slot-scope="props" color="#666" :label="props.line.rankno"></e-label>
          </e-column>
          <e-column align="center" title="使用数量" relate="usenum">
            <e-label slot-scope="props" color="#666" :label="props.line.usenum"></e-label>
          </e-column>
          <e-column align="center" title="类型" relate="type">
            <e-label slot-scope="props" color="#666" :label="props.line.type"></e-label>
          </e-column>
          <e-column align="center" title="反向形象名称" relate="reverseid">
            <div slot-scope="props">
              <e-label  color="#666" :label="props.line.reversename"></e-label>
            </e-img>
            </div>
          </e-column>
          <e-column align="center" title="反向形象图片" relate="reverseid">
            <div slot-scope="props">
              <e-img  image-width="50px" image-height="50px" :url="props.line.reverseicon">
            </e-img>
            </div>
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
      </e-col>
    </e-row>
    <e-row style="margin-top: 20px">
      <e-col width="100px">
        <e-button v-on:click="back" type="stroke" label="返回">
        </e-button>
      </e-col>
      <e-col width="150px">
        <e-button @click="gotoNew()" label="新建形象图片"></e-button>
      </e-col>
    </e-row>
  </e-page>
</template>
<script>
  import detail from "./detail";
  export default detail;
</script>
<style src="./detail.css"></style>