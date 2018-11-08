/**
 * Created by gaoyang on 2018/09/06 14:15.
 * @title 发布列表js
 */
export default {
  data() {
    return {
      //查询参数
      params: {
        "title": "",
        "createdid": "",
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
      this.eLoading.show();
      this.$http.post(__interface + "/resource/query", params)
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
          _this.$http.post(__interface + "/resource/delete", {
            id: id
          }).then((response) => {
            _this.list();
          });
        }
      });
    }

  }
}