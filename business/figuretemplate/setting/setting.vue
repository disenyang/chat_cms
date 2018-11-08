<!-- Created by gaoyang 形象模版新建/修改页面-->
<template>
  <e-page class="figuretemplate-setting-wrapper">
    <e-form :rules="formRule" width="430px" ref="form">

      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="模版名称" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.name.error" :content="formRule.name.message" placement="right">
            <e-input width="300px" :error="name" v-model="params.name" max-length="50" counter="true" form-rule="name">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="人体模型(2d)" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.humanmodel2d.error" :content="formRule.humanmodel2d.message" placement="right">
            <e-textarea width="500px" height="260px" :error="humanmodel2d" v-model="params.humanmodel2d" counter="true" max-length="65535" form-rule="humanmodel2d">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="人体模型(3d)" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.humanmodel3d.error" :content="formRule.humanmodel3d.message" placement="right">
            <e-textarea width="500px" height="260px" :error="humanmodel3d" v-model="params.humanmodel3d" counter="true" max-length="65535" form-rule="humanmodel3d">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="骨骼动画" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.boneAnimates.error" :content="formRule.boneAnimates.message" placement="right">
            <e-textarea width="500px" height="260px" :error="boneAnimates" v-model="params.boneAnimates" counter="true" max-length="65535" form-rule="boneAnimates">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="模版配置" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.config.error" :content="formRule.config.message" placement="right">
            <e-textarea width="500px" height="260px" :error="config" v-model="params.config" counter="true" max-length="65535" form-rule="config">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="预览形象" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.previewfigure.error" :content="formRule.previewfigure.message" placement="right">
            <e-input width="500px" :error="previewfigure" v-model="params.previewfigure" counter="true" max-length="100" form-rule="previewfigure">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="骨骼" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.bones.error" :content="formRule.bones.message" placement="right">
            <e-textarea width="500px" height="260px" :error="bones" v-model="params.bones" counter="true" max-length="65535" form-rule="bones">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>

      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="人体模型左侧(2d)" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.humanmodel2d45l.error" :content="formRule.humanmodel2d45l.message" placement="right">
            <e-textarea width="500px" height="260px" :error="humanmodel2d45l" v-model="params.humanmodel2d45l" counter="true" max-length="65535" form-rule="humanmodel2d45l">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="骨骼左侧" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.bones45l.error" :content="formRule.bones45l.message" placement="right">
            <e-textarea width="500px" height="260px" :error="bones45l" v-model="params.bones45l" counter="true" max-length="65535" form-rule="bones45l">
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