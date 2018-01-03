import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { error } from 'util';

Vue.use(Vuex);

const store = new Vuex.Store({
   state:{
       listUser: []
   },
   actions: {
       LOAD_USER_LIST: function({commit}){
           axios.get('/api/user/getALL').then((res)=>{
               commit('SET_USER_LIST',{userList: res.data});
           },(err)=>{
               console.log(err);
           })
       },
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
   getters: {
       getUserList: state=>{
           return state.listUser;
       }
   }
   
})
export default store