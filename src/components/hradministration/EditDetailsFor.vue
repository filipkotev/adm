<template>
    <div>
        <h1>Edit Details for {{form.username}}</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="form" class="content-container">
            <h4> Access level and department</h4>
            <el-row :gutter="20">
                <el-col :md="12">
                    <h5 class="demonstration">Department</h5>
                    <el-select  v-model="departmentValue" placeholder="Select Department">
                    <el-option
                        v-for="item in selectDepartment"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                    </el-select>
                </el-col>
                <el-col :md="12">
                    <h5 class="demonstration">Access Level</h5>
                    <el-select  v-model="form.accessLevelValue" placeholder="Select Department">
                    <el-option
                        v-for="accessLevel in accessLevels"
                        :key="accessLevel.value"
                        :label="accessLevel.label"
                        :value="accessLevel.value">
                    </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <h4> User details:</h4>
            <el-row :gutter="20">
                <el-col :md="12">
                    <h5 class="demonstration">Personal ID</h5>
                    <el-input :disabled="true" v-model="form.workId"></el-input>
                </el-col>
                <el-col :md="12">
                    <h5 class="demonstration">Login name</h5>
                    <el-input :disabled="true" v-model="form.username"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :md="12">
                    <h5 class="demonstration">Select Password</h5>
                    <el-input type="password"></el-input>
                </el-col>
                <el-col :md="12">
                    <h5 class="demonstration">Verify password</h5>
                    <el-input type="password" ></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :md="12">
                    <h5 class="demonstration">First name</h5>
                    <el-input></el-input>
                </el-col>
                <el-col :md="12">
                    <h5 class="demonstration">Family name</h5>
                    <el-input></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :md="12">
                    <h5 class="demonstration">EGN</h5>
                    <el-input v-model.number="form.egn"></el-input>
                </el-col>
                <el-col :md="12">
                    <h5 class="demonstration">Company join date</h5>
                    <el-date-picker
                        v-model="form.joinDate"
                        type="date"
                        placeholder="Select Date">
                    </el-date-picker>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :md="12">
                    <h5 class="demonstration">Home address</h5>
                    <el-input></el-input>
                </el-col>
                <el-col :md="12">
                    <h5 class="demonstration">Mobile</h5>
                    <el-input v-model.number="form.mobile"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :md="12">
                    <h5 class="demonstration">Phone extension</h5>
                    <el-input v-model.number="form.phoneExtension"></el-input>
                </el-col>
               
            </el-row>
            <el-row>
                <div class="buttons-container">
                     <router-link :to="{ path: 'staffmanager' }">
                        <el-button class="secondary-button add-new-user-button">Cancel</el-button>
                    </router-link>
                    <el-button type="primary" class="submit-button add-new-user-button" @click="addUser">Add User</el-button>
                </div>    
            </el-row>    
        </el-form>     
    </div>    
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
    data () {
        var checkNumber = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the number'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } 
        }, 2000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
        return {
            accessLevels: [
                { 
                    value: 'teamleader',
                    label: 'Teamleader'
                },
                { 
                    value: 'coordinator',
                    label: 'Coordinator'
                },
                { 
                    value: 'user',
                    label: 'User'
                },
                { 
                    value: 'execcutive officer',
                    label: 'Execcutive officer'
                },
                { 
                    value: 'administrator',
                    label: 'Administrator'
                },  
                { 
                    value: 'company executive',
                    label: 'Company executive'
                },    
            ],
            form: {
                phoneExtension: '',
                mobile: '',
                egn: '',
                joinDate: '',
                accessLevelValue: 'teamleader',
                username: 'Filip Kotev',
                workId: '40820'
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                number: [
                    { validator: checkNumber, trigger: 'blur' }
                ]
            }
        }
    },
    computed: {
        ...mapState('breaking', [
        'arrays'
        ]),
        ...mapState('shared', [
        'selectDepartment',
        'pickerOptions'  
        ]),
    }
}    

</script>
<style lang="scss" scoped>
.content-container {
    border: 1px solid #ECECEC;
    border-radius: 3px;
    width: 100%;
    margin-top: 45px;
    padding: 37px;
}
.el-select {
    width: 100%;
}
h4 {
    color: #444444;
    font-size: 14px;
    border-bottom: 1px solid #BFBFBF;
    padding-bottom: 15px;
}
.el-row {
    margin-bottom: 30px;
}
.el-input__inner {
    border-radius: 3px;
}
.verify-input {
    width: 83% !important;
    margin-right: 3%;
}
.verify-button {
    display: inline-block;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
}
.buttons-container {
    display: flex;
    justify-content: space-between;
}
.add-new-user-button {
    width: 120px;
}
.submit-button {
  background-color: #1F98BD;
  border-color: transparent;
}
.secondary-button {
    height: 40px;
    padding: 8px 20px !important;
}
</style>