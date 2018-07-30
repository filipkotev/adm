<template>
    <div>
        <h1>Add New User</h1>
        <el-form :model="validateForm" ref="validateForm" status-icon class="content-container">
            <h4> Access level and department</h4>
            <el-row :gutter="20">
               <!-- Department -->
                <el-col :md="12">
                  <el-form-item  label="Department" 
                                 :rules="[
                                  { required: true, message: 'Please select department', trigger: 'blur' }
                                ]"
                  >

                      <el-select  v-model="validateForm.department" placeholder="Select Department">
                        <el-option
                            v-for="item in selectDepartment"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                      </el-select>

                  </el-form-item>
                </el-col>
                <!-- Access Level -->
                <el-col :md="12">
                  <el-form-item label="Access Level" 
                                :rules="[
                                  { required: true, message: 'Please select access level', trigger: 'blur'}
                                ]"
                  >

                      <el-select  v-model="validateForm.accessLevelValue"
                                  placeholder="Select Access Level">
                        <el-option
                            v-for="accessLevel in accessLevels"
                            :key="accessLevel.value"
                            :label="accessLevel.label"
                            :value="accessLevel.value">
                        </el-option>
                      </el-select>

                  </el-form-item>
                </el-col>
            </el-row>
            <h4> User details:</h4>
            <el-row :gutter="20">
                <!-- Personal Id -->
                <el-col :md="12">
                    <el-form-item  label="Personal ID"
                                   :rules="[
                                      { required: true, message: 'Please select department', trigger: 'blur' }
                                    ]"
                    >

                      <el-input type="text" v-model="validateForm.personalID"></el-input>

                    </el-form-item>
                </el-col>
                <!-- Login name -->
                <el-col :md="12">
                    <el-form-item  label="Login name" 
                                   :rules="[
                                      { required: true, message: 'Please select department', trigger: 'blur' }
                                    ]"
                    >
                     
                        <el-input type="text" v-model="validateForm.loginName"></el-input>
                        <el-button class="secondary-button verify-button">Verify</el-button>
                      
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
               <!-- Password -->
                <el-col :md="12">
                    <el-form-item 
                       label="Password" 
                       :rules="[
                          { required: true, message: 'Please type password', trigger: 'blur' },
                        ]"
                    >
                    
                      <el-input type="password" v-model="validateForm.password"></el-input>
                    
                  </el-form-item>
                </el-col>
                <!-- Verify password -->
                <el-col :md="12">
                    <el-form-item 
                       label="Verify password" 
                       :rules="[
                        { required: true, message: 'Please verify password', trigger: 'blur' }
                      ]"
                    >
                    
                      <el-input type="password"></el-input>
                  
                  </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <!-- First name -->
                <el-col :md="12">
                    <el-form-item 
                      label="First name" 
                      :rules="[
                          { required: true, message: 'Please type first name', trigger: 'blur' }
                        ]"
                      >

                      <el-input type="text" v-model="validateForm.firstName"></el-input>

                  </el-form-item>
                </el-col>
                <!-- Family name -->
                <el-col :md="12">
                    <el-form-item 
                      label="Family name" 
                      :rules="[
                        { required: true, message: 'Please type family name', trigger: 'blur' }
                      ]"
                    >

                      <el-input type="text" v-model="validateForm.lastName"></el-input>

                  </el-form-item>  
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <!-- EGN -->
                <el-col :md="12">
                    <el-form-item 
                      label="EGN"
                      :rules="[
                        { required: true, message: 'Please type egn', trigger: 'blur' }
                      ]"
                    >

                      <el-input v-model.number="validateForm.egn"></el-input>

                  </el-form-item>  
                </el-col>
                <!-- Compnay join date -->
                <el-col :md="12">
                    <el-form-item 
                      label="Company join date" 
                      :rules="[
                        { required: true, message: 'Please enter company join date', trigger: 'blur' }
                      ]"
                    >

                      <el-date-picker
                          v-model="validateForm.joinDate"
                          type="date"
                          placeholder="Select Date">
                      </el-date-picker>

                  </el-form-item>  
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <!-- Home address -->
                <el-col :md="12">
                    <el-form-item 
                      label="Home address" 
                      :rules="[
                        { required: true, message: 'Please type home address', trigger: 'blur' }
                      ]"
                    >

                      <el-input type="text" v-model="validateForm.homeAddress"></el-input>

                    </el-form-item>
                </el-col>
                <!-- Mobile number -->
                <el-col :md="12">
                    <el-form-item 
                      label="Mobile number" 
                      :rules="[
                        { required: true, message: 'Please type mobile number', trigger: 'blur' }
                      ]"
                    >

                      <el-input v-model.number="validateForm.mobile"></el-input>

                    </el-form-item>  
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <!-- Phone extension -->
                <el-col :md="12">
                    <el-form-item 
                      label="Phone extension" 
                      :rules="[
                        { required: true, message: 'Please type phone extension', trigger: 'blur' }
                      ]"
                    >

                      <el-input v-model.number="validateForm.phoneExtension"></el-input>

                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-form-item>
                  <div class="buttons-container">
                    <router-link :to="{ path: 'staffmanager' }">
                        <el-button class="secondary-button add-new-user-button">Cancel</el-button>
                    </router-link>
                    <el-button type="primary" class="submit-button add-new-user-button" @click="submitForm('validateForm')">Add User</el-button>
                  </div>
                </el-form-item>    
            </el-row>    
        </el-form>     
    </div>    
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
//    var checkNumber = (rule, value, callback) => {
//      if (!value) {
//        return callback(new Error('Please input the number'))
//      }
//      setTimeout(() => {
//        if (!Number.isInteger(value)) {
//          callback(new Error('Please input digits'))
//        }
//      }, 2000)
//    }
//    var validatePass = (rule, value, callback) => {
//      if (value === '') {
//        callback(new Error('Please input the password'))
//      } else {
//        if (this.validateForm.checkPass !== '') {
//          this.$refs.ruleForm2.validateField('checkPass')
//        }
//        callback()
//      }
//    }

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please type the password again'))
      } else if (value !== this.validateForm.password) {
        callback(new Error('Two passwords don\'t match!'))
      } else {
        callback()
      }
    }
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
        }
      ],
      validateForm: {
        department: '',
        accessLevelValue: '',
        pesronalID: '',
        loginName: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneExtension: '',
        mobile: '',
        egn: '',
        joinDate: '',
        homeAddress: ''
      },
      rules: {
//        pass: [
//            { validator: validatePass, trigger: 'blur' }
//        ],
        checkPass: [
            { validator: validatePass2, trigger: 'blur' }
        ],
//        number: [
//            { validator: checkNumber, trigger: 'blur' }
//        ]
      },
      departmentValue: ''
    }
  },
  computed: {
    ...mapState('breaking', [
      'arrays'
    ]),
    ...mapState('shared', [
      'selectDepartment',
      'pickerOptions'
    ])
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
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
    font-size: 12px;
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
    margin-right: 20px;
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