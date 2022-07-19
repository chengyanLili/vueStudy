// 用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Test1 from '../components/Test/Test1.vue'
import Test2 from '../components/Test/Test2.vue'
import Test3 from '../components/Test/Test3.vue'

// 创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/test1',
            name:"测试1",
			component:Test1
		},
        {
			path:'/test2',
            name:"测试2",
			component:Test2
		},
        {
			path:'/test3',
            name:"测试3",
			component:Test3
		},
	]
})