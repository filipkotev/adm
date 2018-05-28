<template>
    <div>
        <el-row>
            <h1> Staff Manager </h1>
        </el-row>
        <!-- Search Employee -->
        <el-row :gutter="20">
                <h5 class="demonstration">Period</h5>
            <el-col :span="6">
                <el-input placeholder="Enter Employee Name" v-model="input"></el-input>
            </el-col>
            <el-col class="submitButton" :span="6">
                <el-button class="button" type="primary">Search</el-button>
            </el-col>    
        </el-row>
        <!--  Add New user -->
        <el-row :span="24" >
            <el-col >
                <el-button
                    type="primary" 
                    icon="el-icon-circle-plus-outline"
                    class="button add-user-button">
                Add New User</el-button>
            </el-col>
        </el-row>

        <!-- Employee Table Head-->
        <el-row class="border-bottom">
            <el-col :span="8">
                <div class="sort-name-label">
                    <i class="el-icon-arrow-down" @click="sortedArray"></i>
                    <h5 class="demonstration bold">Name and ID</h5>
                </div>
            </el-col>
            <el-col :span="6">
                <h5 class="demonstration bold">User Role</h5>
            </el-col>
            <el-col :span="10">
                <h5 class="demonstration bold">Actions</h5>
            </el-col>
        </el-row>
        <!-- Employee Table -->
        <el-row
            class="border-bottom table-body"
            type="flex"
            align="middle"
            v-for="person in people">
            <el-col :span="8" class="picNameId">
                <img :src="person.imgUrl" alt>
                <div class="userInfo">
                    <p><strong>{{person.name}}</strong></p>
                    <p>{{person.workId}}</p>
                </div>
            </el-col>
            <el-col :span="6">
                <el-tag :type="person.tagType">{{person.role}}</el-tag>
            </el-col>
            <el-col :span="10" class="buttons-container">
                <el-button class="secondary-button">Recover</el-button>
                <el-button class="secondary-button">Edit</el-button>
                <el-button class="secondary-button">Delete</el-button>
                <el-button class="secondary-button">Permission</el-button>
            </el-col>
        </el-row>     
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    data () {
        return {
            input: ''
        }
    },
    computed: {
        ...mapState('officeTimesheet', [
            'people'
        ]),
    },
    methods: {
        sortedArray: function() {
            function compare(a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
            }
            return this.people.sort(compare);
        }
    },
    created () {
        for (let i=0; i<this.people.length; i++) {
            if (this.people[i].role === 'Executive officer') {
                this.people[i].tagType = "success"
            } else if (this.people[i].role === 'Coordinator') {
                this.people[i].tagType = "danger"
            } else if (this.people[i].role === 'Teamleader') {
                this.people[i].tagType = " "
            } else if (this.people[i].role === 'Administrator') {
                this.people[i].tagType = "warning"
            } else if (this.people[i].role === 'Company executive') {
                this.people[i].tagType = "danger"
            } else {
                this.people[i].tagType = "info"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.demonstration {
    padding-left: 10px;
}    
.button {
    width: auto;
}

.add-user-button {
    float: right;
}

.sort-name-label h5 {
    display: inline-block;
    padding-left: 5px;
}

.el-icon-arrow-down:hover {
    cursor: pointer;
}

.bold{
    font-weight: bold !important;
}

.table-body {
    padding: 1%;
}

.table-body:hover {
    background-color: #EAF6FB;
}

.border-bottom {
    border-bottom: 1px solid #EAF6FB;
}

.border-bottom h5 {
    padding-left: 0;
}

.picNameId {
  display: flex;
  flex-flow: row;
  padding-top: 15px;
}    

img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 15px;
}

.userInfo p {
    color: #444444;
    font-size: 16px;
}

.userInfo p:last-child {
    font-size: 14px;
}

.secondary-button {
    width: 80px;
    height: 33px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    width: auto;
    padding-left: 17px !important;
    padding-right: 17px !important;
    border: 1px solid #0C85AA;
    border-radius: 3px;
}

.el-tag {
    width: 130px;
    text-align: center;
}

</style>