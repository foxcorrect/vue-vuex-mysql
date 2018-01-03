import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { error } from 'util';

Vue.use(Vuex);

const store = new Vuex.Store({
   state:{
       listUser: []
   },
   //action需要一个启动的名称，mutations会根据commit的名称来刷新相应的action
   actions: {
       LOAD_USER_LIST: function({commit}){
           axios.get('/api/user/getALL').then((res)=>{
               commit('SET_USER_LIST',{userList: res.data});
           },(err)=>{
               console.log(err);
           })
       },
       //是可以传参数的！！！
       ADD_NEW_USER: function({commit},params){
           axios.post('/api/user/addUser',params
           ).then((res)=>{
               commit('SET_USER_LIST')
           })
       },
       deleteUser: function({commit},item){
           axios.delete('api/user/deleteUser?id='+item).then((res)=>{
               commit('delete_user')
           })
       },
   },
   mutations: {
       SET_USER_LIST: (state,{userList})=>{
           state.listUser = userList
       },
       delete_user: (state)=>{
           console.log(this);
           state.listUser = this.a.getters.getUserList
       }
   },
   //允许获取数据
   getters: {
       getUserList: state=>{
           return state.listUser;
       }
   }
   
})
export default store