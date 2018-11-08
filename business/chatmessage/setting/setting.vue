<!-- Created by gaoyang 聊天消息新建/修改页面-->
<template>
  <e-page class="chatmessage-setting-wrapper">
    <e-form :rules="formRule" width="430px" ref="form">
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="发送人" :required="true">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.s.error" :content="formRule.s.message" placement="right">
            <e-input width="300px" :error="s" v-model="params.s" max-length="50" counter="true" form-rule="s">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="接受人" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.r.error" :content="formRule.r.message" placement="right">
            <e-input width="300px" :error="r" v-model="params.r" max-length="50" counter="true" form-rule="r">
            </e-input>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="消息类型" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.t.error" :content="formRule.t.message" placement="right">
            <e-select v-model="params.t">
              <e-select-option label="文本" value="t"></e-select-option>
              <e-select-option label="图片" value="p"></e-select-option>
              <e-select-option label="声音" value="s"></e-select-option>
              <e-select-option label="视频" value="v"></e-select-option>
              <e-select-option label="链接" value="l"></e-select-option>
              <e-select-option label="红包" value="h"></e-select-option>
              <e-select-option label="卡通" value="c"></e-select-option>
              <e-select-option label="动作" value="a"></e-select-option>
            </e-select>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="消息内容" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.m.error" :content="formRule.m.message" placement="right">
            <e-textarea width="300px" :error="m" v-model="params.m" counter="true" max-length="500" form-rule="m">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="资源" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          <e-tip v-model="formRule.resource.error" :content="formRule.resource.message" placement="right">
            <e-textarea width="300px" :error="resource" v-model="params.resource" counter="true" max-length="5000" form-rule="resource">
            </e-textarea>
          </e-tip>
        </e-col>
      </e-row>
      <e-row padding="true" align-items="center"  style="opacity: 0.5">
        <e-col align-items="flex-start" justify-content="flex-end" padding-right="10px" width="100px" height="100%">
          <e-label label="卡通资源案例" :required="false">
          </e-label>
        </e-col>
        <e-col span="1">
          {"unfindbepathstring":null,"figureid":null,"unfindbepaths":null,"sharenum":0,"forkid":null,"updatetime":null,"icon":null,"pathsstring":"[{\"positions\":\"0.00;0;0.51,0.10,0.48,0.80|2.00;0;0.01,0.10,0.48,0.80\",\"ismy\":1,\"type\":1,\"animateType\":\"0FEDDF867F0000012CAC1FB373801CFE\",\"url\":\"http:\\\/\\\/u.xiaowanwu.cn\\\/60D52CC6FFAE437C70E6DA7763642080\"},{\"positions\":\"2.00;0;0.02,0.11,0.48,0.80|2.00;0;0.01,0.10,0.48,0.80\",\"ismy\":1,\"type\":1,\"animateType\":\"10530E107F00000156C2602940537BE1\",\"url\":\"http:\\\/\\\/u.xiaowanwu.cn\\\/60D59C5BFFAE437C0E39966650CE0A9A\"}]","authorname":"黄金季节","usenum":1,"collected":false,"unfindpaths":null,"forknum":0,"audios":[],"name":"抱抱测试","audiosstring":"[]","id":"622F039BFFAE437C4041F8C5C200A5B5","createdtime":"2018-10-11 16:12:20","bepathstring":"[{\"ismy\":0,\"type\":1,\"url\":\"http:\\\/\\\/u.xiaowanwu.cn\\\/60D52CC6FFAE437C70E6DA7763642080\",\"positions\":\"0.00;0;0.01,0.10,0.48,0.80|2.00;0;0.51,0.10,0.48,0.80\"},{\"ismy\":0,\"type\":1,\"url\":\"http:\\\/\\\/u.xiaowanwu.cn\\\/60D59C5BFFAE437C0E39966650CE0A9A\",\"positions\":\"2.00;0;0.50,0.11,0.48,0.80|2.00;0;0.51,0.10,0.48,0.80\"}]","unfindpathsstring":null,"paths":[{"url":"http:\/\/u.xiaowanwu.cn\/60D52CC6FFAE437C70E6DA7763642080","ismy":1,"positions":"0.00;0;0.51,0.10,0.48,0.80|2.00;0;0.01,0.10,0.48,0.80","animateType":"0FEDDF867F0000012CAC1FB373801CFE","type":1},{"url":"http:\/\/u.xiaowanwu.cn\/60D59C5BFFAE437C0E39966650CE0A9A","ismy":1,"positions":"2.00;0;0.02,0.11,0.48,0.80|2.00;0;0.01,0.10,0.48,0.80","animateType":"10530E107F00000156C2602940537BE1","type":1}],"showcontent":0,"width":0,"height":0,"bepaths":[{"ismy":0,"positions":"0.00;0;0.01,0.10,0.48,0.80|2.00;0;0.51,0.10,0.48,0.80","type":1,"url":"http:\/\/u.xiaowanwu.cn\/60D52CC6FFAE437C70E6DA7763642080"},{"ismy":0,"positions":"2.00;0;0.50,0.11,0.48,0.80|2.00;0;0.51,0.10,0.48,0.80","type":1,"url":"http:\/\/u.xiaowanwu.cn\/60D59C5BFFAE437C0E39966650CE0A9A"}],"price":0,"author":"acdd37f41c7761eca9345bc9dfcd2c3b","collectnum":0}
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