<!-- Created by gaoyang 动画类型新建/修改页面-->
<template>
  <e-page class="animatetype-setting-wrapper">
    <e-form :rules="formRule" width="430px" ref="form">

      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="动画名称" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.name.error" :content="formRule.name.message" placement="right">
            <e-input width="300px" :error="name" v-model="params.name" max-length="40" counter="true" form-rule="name">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="旋转类型"></e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.rotatetype.error" :content="formRule.rotatetype.message" placement="right">
            <e-select width="300px" v-model="params.rotatetype" max-length="19"  form-rule="rotatetype">
              <e-select-option :label="value" :value="key" v-for="(value,key) in rotatetypes"></e-select-option>
            </e-select>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="130px" height="100%">
          <e-label label="反转动画"></e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.reverseid.error" :content="formRule.reverseid.message" placement="right">
            <e-select width="300px" v-model="params.reverseid" max-length="19"  form-rule="reverseid">
              <e-select-option :label="animatetype.name" :value="animatetype.id" v-for="(animatetype,index) in animatetypes"></e-select-option>
            </e-select>
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