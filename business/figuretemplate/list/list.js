/**
 * Created by gaoyang on 2018/09/21 12:31.
 * @title 形象模版列表js
 */
export default {
  data() {
    return {
      //查询参数
      params: {
        "name": ""
      },
      //列表
      dataList: [],

      //分页
      pages: {
        total: 0,
        pageSize: 20,
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
      //清除空字符串条件
      for (let key in params) {
        if (params[key] === "") {
          delete params[key];
        }
      }
      this.eLoading.show();
      this.$http.post(__interface + "/figuretemplate/query", params)
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
          _this.$http.post(__interface + "/figuretemplate/delete", {
            id: id
          }).then((response) => {
            _this.list();
          });
        }
      });
    }

  }
}