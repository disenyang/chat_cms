<!-- Created by gaoyang 形象图片新建/修改页面-->
<template>
  <e-page class="figurevalue-setting-wrapper">
    <e-form :rules="formRule" width="430px" ref="form">
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="名称" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.name.error" :content="formRule.name.message" placement="right">
            <e-input width="300px" :error="name" v-model="params.name" max-length="30" counter="true" form-rule="name">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="图片" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.url.error" :content="formRule.url.message" placement="right">
             <e-upload v-model="params.url" help="请上传图片" :error="true" image-width="80px" fontSize="50px" file-type="image/png,image/jpg,image/gif" image-height="80px" upload-url="/tongxiang/file/qiniuUpload"></e-upload>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="图标" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.icon.error" :content="formRule.icon.message" placement="right">
            <e-upload v-model="params.icon" help="请上传图片" :error="true" image-width="80px" fontSize="50px" file-type="image/png,image/jpg" image-height="80px" upload-url="/tongxiang/file/qiniuUpload"></e-upload>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="排序号" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.rankno.error" :content="formRule.rankno.message" placement="right">
            <e-input width="300px" :error="rankno" v-model="params.rankno" max-length="10" counter="true" form-rule="rankno">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="反向形象" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-select v-model="params.reverseid">
                <e-select-option :label="figurevalue.name" :value="figurevalue.id" v-for="(figurevalue,index) in figurevalues"></e-select-option>
          </e-select>
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