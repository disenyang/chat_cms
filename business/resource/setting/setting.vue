<!-- Created by gaoyang 发布新建/修改页面-->
<template>
  <e-page class="resource-setting-wrapper">
    <e-form :rules="formRule" width="430px" ref="form">

      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="名称" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.title.error" :content="formRule.title.message" placement="right">
            <e-textarea width="300px" :error="title" v-model="params.title" counter="true" max-length="2000" form-rule="title">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="评论量" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.commentnum.error" :content="formRule.commentnum.message" placement="right">
            <e-input width="300px" :error="commentnum" v-model="params.commentnum" max-length="10" counter="true" form-rule="commentnum">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="称赞量" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.goodnum.error" :content="formRule.goodnum.message" placement="right">
            <e-input width="300px" :error="goodnum" v-model="params.goodnum" max-length="10" counter="true" form-rule="goodnum">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="收藏量" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.collectnum.error" :content="formRule.collectnum.message" placement="right">
            <e-input width="300px" :error="collectnum" v-model="params.collectnum" max-length="10" counter="true" form-rule="collectnum">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="音乐id" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.audioid.error" :content="formRule.audioid.message" placement="right">
            <e-input width="300px" :error="audioid" v-model="params.audioid" max-length="32" counter="true" form-rule="audioid">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="资源类型,0:图片 1:视频" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.resourcetype.error" :content="formRule.resourcetype.message" placement="right">
            <e-input width="300px" :error="resourcetype" v-model="params.resourcetype" max-length="10" counter="true" form-rule="resourcetype">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="资源地址" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.resourceurl.error" :content="formRule.resourceurl.message" placement="right">
            <e-textarea width="300px" :error="resourceurl" v-model="params.resourceurl" counter="true" max-length="1000" form-rule="resourceurl">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="创建用户" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.createdid.error" :content="formRule.createdid.message" placement="right">
            <e-input width="300px" :error="createdid" v-model="params.createdid" max-length="32" counter="true" form-rule="createdid">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="创建时间" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.createdtime.error" :content="formRule.createdtime.message" placement="right">
            <e-input width="300px" :error="createdtime" v-model="params.createdtime" max-length="19" counter="true" form-rule="createdtime">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="封面图" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.coverimg.error" :content="formRule.coverimg.message" placement="right">
            <e-textarea width="300px" :error="coverimg" v-model="params.coverimg" counter="true" max-length="200" form-rule="coverimg">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row margin-top="20px" justify-content="center">
        <e-col width="150px">
          <e-button v-on:click="back" type="stroke" label="取消">
          </e-button>
          <e-button value="保存" type="solid" size="middle" v-on:click="save" margin-left="20px" label="保存">
          </e-button>
        </e-col>
      </e-row>
    </e-form>
  </e-page>
</template>

<script>
  import setting from "./setting";
  export default setting;
</script>

<style src="./setting.css"></style>