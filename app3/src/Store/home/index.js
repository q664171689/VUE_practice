// import {reqCategoryList} from '@/api'


// const state={
//     categoryList:[],
// };
// const mutations={
//     CATEGORYLIST(state,categoryList){
//         state.categoryList = categoryList;
//     }
// };
// const actions={
//     //通过api俩民的接口函数调用，发请求，获取数据
//     async categoryList({commit}){
//         let result =await reqCategoryList();
//         if(result.code==200){
//             commit("CATEGORYLIST",result.data)
//         }
//     }
// };
// const getters={}

// export default{
//     state,
//     mutations,
//     actions,
//     getters
// }
import {reqCategoryList} from '@/api'
import { defineStore } from "pinia";
export const useHomeStore = defineStore('Home',{
    state:()=>{
        return{
            categoryList:[],
        }
    },
    getters:{
    },
    actions:{
        async categoryList1(){
            let result =await reqCategoryList();
            if(result.code==200){
                this.categoryList = result.data
            }
        }
    }
})