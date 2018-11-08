<!-- Created by gaoyang 动画模型新建/修改页面-->
<template>
  <e-page class="animatemodel-setting-wrapper">
    <e-form :rules="formRule" width="430px" ref="form">

      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="名称" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.name.error" :content="formRule.name.message" placement="right">
            <e-input width="300px" :error="name" v-model="params.name" max-length="32" counter="true" form-rule="name">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="类型"></e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.type.error" :content="formRule.type.message" placement="right">
            <e-select width="300px" v-model="params.type" max-length="19"  form-rule="type">
              <e-select-option :label="value" :value="key" v-for="(value,key) in types"></e-select-option>
            </e-select>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="动画类型"></e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.animatetypeid.error" :content="formRule.animatetypeid.message" placement="right">
            <e-select width="300px" v-model="params.animatetypeid" max-length="19"  form-rule="animatetypeid">
              <e-select-option :label="animatetype.name" :value="animatetype.id" v-for="animatetype in animatetypes"></e-select-option>
            </e-select>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="形象模版id"></e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.figuretemplateid.error" :content="formRule.figuretemplateid.message" placement="right">
            <e-input width="300px" :error="figuretemplateid" v-model="params.figuretemplateid" max-length="19" counter="true" form-rule="figuretemplateid">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="创建时间" :required="true">
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
          <e-label label="定义" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.defs.error" :content="formRule.defs.message" placement="right">
            <e-textarea width="600px" height="600px" :error="defs" v-model="params.defs" counter="true" form-rule="defs">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="使用数量" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.usenum.error" :content="formRule.usenum.message" placement="right">
            <e-input width="300px" :error="usenum" v-model="params.usenum" max-length="10" counter="true" form-rule="usenum">
            </e-input>
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