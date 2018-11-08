/**
 * Created by gaoyang on 2018/08/16 15:33.
 * @title 动画模型列表js
 */
export default {
  data() {
    return {
      //查询参数
      params: {
        "name": "",
        "createdtime": "",
        "defs": "",
        "usenum": "",
        "type":-1,
        "animateType":-1
      },
      //列表
      dataList: [],
      types:{
        "0":"未知类型",
        "1":"脸",
        "2":"刘海",
        "3":"尾发",
        "4":"眼睛",
        "5":"鼻子",
        "6":"嘴巴",
        "7":"耳朵",
        "8":"上身",
        "9":"下身"
      },
      //分页
      pages: {
        total: 0,
        pageSize: 100,
        currentPage: 1
      }
    }
  },
  mounted() {
    this.list();

  },
  methods: {
    /**
     * 列表
     * @return {undefined}
     */
    list() {
      let params = Object.assign({}, this.params, {
        currentPage: this.pages.currentPage,
        pageSize: this.pages.pageSize
      });
      for(let a in params){
        if(!params[a]){
          delete params[a];
        }
      }
      this.eLoading.show();
      this.$http.post(__interface + "/animatemodel/query", params)
        .then((response) => {
          this.dataList = response.data.result.data ? response.data.result.data : [];
          this.pages.total = response.data.result.page.totalCount;
        });
    },

    /**
     * 查询数据
     * @return {undefined}
     */
    search() {
      this.pages.currentPage = 1;
      this.list();
    },

    /**
     * 跳转到新建页面
     * @return {undefined}
     */
    gotoNew() {
      this.$router.push("setting");
    },

    /**
     * 删除一条数据
     * @return {undefined}
     */
    del(e, id) {
      let _this = this;
      this.eConfirm({
        content: "是否删除",
        onConfirm() {
          _this.$http.post(__interface + "/animatemodel/delete", {
            id: id
          }).then((response) => {
            _this.list();
          });
        }
      });
    }

  }
}