<template>
	<e-page>
		<e-row direction="column" width="100%" height="100%">
			<e-col height="60px">
				<e-row width="100%">
					<e-col justify-content="center" align-items="center" width="60px">
						<e-img url="http://oxwmr019d.bkt.clouddn.com/yilan.png" width="40px" height="40px">
						</e-img>
					</e-col>
					<e-col justify-content="flex-start" align-items="center" width="200px">
						<e-label label="传言管理后台" font-size="15px" color="#333">
						</e-label>
					</e-col>
					<e-col span="1">
					</e-col>
				</e-row>
			</e-col>
			<e-col span="1" justify-content="center" align-items="center" background-image="url('http://oxwmr019d.bkt.clouddn.com/loginbg.jpg') " background-repeat="no-repeat " background-size="100% 100%">
				<e-row>
					<e-col span="1" justify-content="flex-start" align-items="center" width="400px" height="400px" direction="column" background-color="#ffffff" border-radius="10px">
						<e-row width="100%" height="100px" margin-bottom="20px" font-size="20px">
							<e-col span="1" justify-content="center" align-items="center" width="100%">
								<e-label label="用户登录" font-size="20px">
								</e-label>
							</e-col>
						</e-row>
						<e-row width="100%" height="60px">
							<e-col span="1" justify-content="center" align-items="center">
								<e-input v-model="params.username" width="300px" height="46px" border-radius="5px" placeholder="请输入用户名">
								</e-input>
							</e-col>
						</e-row>
						<e-row width="100%">
							<e-col span="1" justify-content="center" align-items="center">
								<e-input v-model="params.password" width="300px" height="46px" placeholder="请输入密码" type="password">
								</e-input>
							</e-col>
						</e-row>
						<e-row width="100%" height="60px" margin-top="30px">
							<e-col span="1" justify-content="center" align-items="center">
								<e-button v-on:click="submit" value="立即登录" width="300px" height="45px" background-color="#333" border-radius="5px" label="立即登录">
								</e-button>
							</e-col>
						</e-row>
					</e-col>
				</e-row>
			</e-col>
		</e-row>
	</e-page>
</template>
<script>
	export default {
	data(){
        return {
            params:{
                username:"",
                password:""
            },
            msg:""
        } 
    },
    computed: {
        
    },
    components: {

    },
    watch: {
        
    },
    created(){
        

    },
    mounted() {
        
    },
    methods: {
        submit(){
            this.$http.post("/tongxiang/user/login", this.params)
                .then((response) => {
                    let json = response.data;
                     if (json.meta.errno==0) {
                        let userinfo = json.result;
                        console.log("userinfo",userinfo);
                        window.localStorage.setItem("userinfo",JSON.stringify(userinfo));
                        this.$router.push({name:"home"});
                    }else{
                        this.msg = json.msg;
                    }
                });
        },
        goLogin(){
            this.$router.push({name:"login"});
        },
        goRegister(){
            this.$router.push({name:"register"});
        }
    }
}
</script>
<style>
    @import '../public/styles/var.css';
	
</style>