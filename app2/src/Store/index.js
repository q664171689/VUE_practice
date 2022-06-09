  
  //非模块式开发
            // import Vue from 'vue';
            // import Vuex from 'vuex';
            // //
            // Vue.use(Vuex);



            // //state:仓库数据
            // //mutatons：修改state的唯一手段
            // //action：处理action，书写自己的业务逻辑，异步
            // //getters:理解为计算属性，用于简化仓库数据，让组件获取数据更加方便

            // //对外暴露实例
            // export default new Vuex.Store({
            //     state:{},
            //     mutations:{},
            //     actions:{},
            //     getters:{}
            // })

  //模块式开发
import Vue from 'vue';
import Vuex from 'vuex';


//引入小仓库

import home from './home'
import search from './search'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        home,
        search
    }
})