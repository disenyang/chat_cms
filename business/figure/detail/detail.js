/**
 * Created by gaoyang on 2018/08/02 12:05.
 * @title 形象详情js
 */
export default {
  data() {
    return {
      //形象
      figure: {
        "designer": "",
        "createdtime": "",
        "name": "",
        "icon": "",
        "rankno": ""
      },
      dataList:[],
      //分页
      pages: {
        total: 0,
        pageSize: 50,
        currentPage: 1
      }
    }
  },
  watch: {

  },
  mounted() {
    this.getDetail();
  },
  methods: {

    /**
     * 获取详情
     * @return {undefined}
     */
    getDetail() {
      this.eLoading.show();
      this.$http.post(__interface + "/figure/get", {
        id: this.$route.params.id
      }).then((response) => {
        this.figure = response.data.result ? response.data.result : {};
      });
      this.listValue();
    },
    /**
     * 形象图片列表
     * @return {undefined}
     */
    listValue() {
      let params = Object.assign({}, this.params, {
        figureid:this.$route.params.id,
        currentPage: this.pages.currentPage,
        pageSize: this.pages.pageSize
      });
      this.eLoading.show();
      console.log(1111);
      this.$http.post(__interface + "/figurevalue/query", params)
        .then((response) => {
          this.dataList = response.data.result.data ? response.data.result.data : [];
          this.pages.total = response.data.result.page.totalCount;
        });
    },
    /**
     * 跳转到新建页面
     * @return {undefined}
     */
    gotoNew() {
      this.$router.push({name:"figurevalue-setting",params:{"figureid":this.$route.params.id}});
    },

    /**
     * 返回
     * @return {undefined}
     */
    back() {
      this.$router.go(-1);
    }

  }
}