<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- <form>
      <input type="text" name="id" v-model="userId"> <br>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <button @click="addUser()">提交</button>
    </form> -->
     <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="age">
            <Input type="text" v-model="formInline.age" placeholder="Age">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="id">
            <Input type="text" v-model="formInline.id" placeholder="Id">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit(formInline)">Register</Button>
        </FormItem>
    </Form>
    <!-- <form>
      <ul>
        <li v-for="user in userList" :key="user.id" @click="deleteData(user.id)">{{user.name}}</li>
      </ul>
    </form> -->
    <Table :row-class-name="rowClassName" border :columns="columns1" :data="userList" style="width:1000px;margin-left:20%"></Table>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    userList(){
      console.log(this.$store.state.listUser);
      return this.$store.state.listUser;
    }
  },
  data () {
    return {
      formInline: {
        user: '',
        age: '',
        id:''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        age: [
          { required: true, message: 'Please fill in the age.', trigger: 'blur' },
          { type: 'string', message: 'The age cannot be larger than 500', trigger: 'blur' }
        ],
        id:[
          { required: true, message: 'Please fill in the user id', trigger: 'blur' },
          { type: 'string', message: 'The id cannot be larger than 500', trigger: 'blur' }
        ]
      },
      columns1: [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.name)
            ]);
          }
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Id',
          key: 'id'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params)
                  }
                }
              }, 'Delete')
            ]);
          }
        }
      ],
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      userId:'',
      age: '',
    }
  },
  methods:{
    handleSubmit(name) {
      console.log(name);
      var params = {id:parseInt(name.id),username:name.user,age:parseInt(name.age)};
      this.$store.dispatch('ADD_NEW_USER',params);
    },
    // addUser:function(){
    //   var params = {id:parseInt(this.userId),username:this.userName,age:this.age};
    //   this.$store.dispatch('ADD_NEW_USER',params);
    // },
    // deleteData:function(item){
    //   console.log(item);
    //   this.$store.dispatch('deleteUser',item)
    // },
    rowClassName (row, index) {
      if (index === 1) {
        return 'demo-table-info-row';
      } else if (index === 3) {
        return 'demo-table-error-row';
      }
      return '';
    },
    remove (index) {
      var item  = index.row.id;
      this.$store.dispatch('deleteUser',item)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ivu-table .demo-table-info-row td{
  background-color: #2db7f5;
  color: #fff;
}
.ivu-table .demo-table-error-row td{
  background-color: #ff6600;
  color: #fff;
}
.ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
