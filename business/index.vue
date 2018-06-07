<template>
	<e-page>
		<e-col v-if="routerName=='login'">
			<router-view>
			</router-view>
		</e-col>
		<e-row direction="column" height="100%" v-if="routerName!='login' ">
			<e-col width="100%" height="60px" border-bottom="1px solid #ddd">
				<e-row width="100%" height="100%">
					<e-col width="68px" justify-content="center" align-items="center">
						<e-img url="http://oxwmr019d.bkt.clouddn.com/yilan.png" width="50px" height="50px">
						</e-img>
					</e-col>
					<e-col span="1" text-align="center" justify-content="center" align-items="center">
						<e-label label="传言" font-size="15px" color="#333">
						</e-label>
					</e-col>
					<e-col justify-content="center" align-items="center" width="120px" color="#888">
						<e-img url="http://oxwmr019d.bkt.clouddn.com/default.jpg" width="36px" height="36px" border-radius="30px" image-width="36px" image-height="36px" image-border-radius="18px">
						</e-img>
						<e-button v-on:click="logout" type="text" margin-left="5px" label="退出">
						</e-button>
					</e-col>
				</e-row>
			</e-col>
			<e-col span="1" width="100%">
				<e-row width="100%" height="100%">
					<e-col width="70px" height="100%">
						<e-nav :navs="navs" background-color="#333333">
						</e-nav>
					</e-col>
					<e-col v-if="routerName=='home'">
						<router-view>
						</router-view>
					</e-col>
					<e-col span="1" height="100%" padding-left="15px" padding-right="15px" padding-top="15px" padding-bottom="15px" v-if="routerName!='home'" background-color="rgb(247, 246, 243)">
						<e-col width="100%" height="100%" padding-left="15px" padding-right="15px" padding-top="15px" padding-bottom="15px" background-color="#fff" border-radius="5px">
							<router-view>
							</router-view>
						</e-col>
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
        	navs:[
                {
                    name: '用户',
                    icon: 'http://7xkce0.com1.z0.glb.clouddn.com/proWhite.png',
                    iconSelected: 'http://img0.t.rongyi.com/123456789012345678901234/20171213/2adc30a8ca5da8e2266d74c772b98c8b.png',
                    url: '/cms_chat/userinfo'
                }
            ]
        }
    },
    computed:{
    	routerName:function(){
            let rn= this.$store?this.$store.state.routerName:"";
            console.log("rn",rn);
            return rn;
        }
    },
    created(){
      	if(this.routerName!="login" && this.routerName!="register"){
        	let userinfo = window.localStorage.getItem("userinfo");
        	if(!userinfo){
          		window.top.location = "http://localhost:8000/cms_chat/login";
        	}else{
          		window.userinfo = JSON.parse(userinfo);         
          		this.userinfo = window.userinfo;
        	}
        }else{
        	
        }    
    },   
    mounted(){
    	
    },
    methods:{
    	logout(){
        	window.localStorage.removeItem("userinfo");
            this.$router.push({name:"login"});
        }
    }
}
</script>
<style>
    @import '../public/styles/var.css';
	
</style>