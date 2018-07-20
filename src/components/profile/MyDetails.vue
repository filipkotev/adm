<template>
    <div>
        <div class="page-title"><h1>My Details</h1></div>
        <div class="details-container">
            <div class="round-pic">
                <img :src="fileList[0].imgUrl" alt="avatar">
            </div>
            <div class="details-boxes box1">
                <div class="select-box">
                    <label for="select" class="subtle">Room Number</label>
                    <el-select 
                        v-model="value" 
                        placeholder="Select"
                        id="select">

                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>

                    </el-select>
                </div>
                <div class="select-box">
                    <label for="phone-extension" class="subtle">Phone Extension</label>
                    <input 
                        type="number" 
                        id="phone-extension">
                </div>
                <div class="select-box">
                    <label for="home-phone" class="subtle">Home Phone</label>
                    <input 
                        type="number" 
                        id="home-phone">
                </div>
                <div class="select-box">
                    <label for="cellular-phone" class="subtle">Cellular Phone</label>
                    <input 
                        type="number" 
                        id="cellular-phone">
                </div>
                <el-button 
                    class="button"
                    type="primary"
                    @click="showNotification"
                >Save
                </el-button>
            </div>
            <div class="details-boxes box2">
                <p class="subtle">Curriculum Vitae Management</p>
                <el-upload
                    class="upload-demo"
                    drag
                    multiple
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :file-list="fileList.imgUrl"   
                    >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                    
                </el-upload>
            </div>
        </div>
    </div>
</template>
 <script>
    import { mapState } from 'vuex'
    import { required } from 'vuelidate/lib/validators'

    export default {
      data () {
        return {
          options: [
            {
              value: '14.1 - IT Services',
              label: '14.1 - IT Services'
            }, {
              value: '14.2 - Vegas',
              label: '14.2 - Vegas'
            }, {
              value: '14.3 - IT Services',
              label: '14.3 - IT Services'
            }, {
              value: '14.5 - User Experience',
              label: '14.5 - User Experience'
            }, {
              value: '14.6 - Project Coordinators',
              label: '14.6 - Project Coordinators'
            }, {
              value: '14.7 - Server Room',
              label: '14.7 - Server Room'
            }, {
              value: '15.1 - Operations',
              label: '15.1 - Operations'
            }, {
              value: '15.2 - QA Unit',
              label: '15.2 - QA Unit'
            }, {
              value: '15.3 - QA Unit',
              label: '15.3 - QA Unit'
            }, {
              value: '15.4 - Operations',
              label: '15.4 - Operations'
            }, {
              value: '15.5 - Manager Operations',
              label: '15.5 - Manager Operations'
            }, {
              value: '15.6 - HR',
              label: '15.6 - HR'
            }, {
              value: '15.7 - CEO',
              label: '15.7 - CEO'
            }, {
              value: '15.8 - Accounting',
              label: '15.8 - Accounting'
            }, {
              value: '15.9 - Cafe',
              label: '15.9 - Cafe'
            }, {
              value: '15.a - Server Room',
              label: '15.a - Server Room'
            }, {
              value: '16.1 - Release Management Team',
              label: '16.1 - Release Management Team'
            }, {
              value: '16.2 - A&D Team',
              label: '16.2 - A&D Team'
            }, {
              value: '16.3 - Conference Room',
              label: '16.3 - Conference Room'
            }, {
              value: '16.4 - Telepresence',
              label: '16.4 - Telepresence'
            }, {
              value: '16.5 - Cytric',
              label: '16.5 - Cytric'
            }, {
              value: '16.6 - Cytric',
              label: '16.6 - Cytric'
            }, {
              value: '16.7 - Cytric',
              label: '16.7 - Cytric'
            }, {
              value: '16.8 - Cytric Team Speaker',
              label: '16.8 - Cytric Team Speaker'
            }
          ],
          value: '',
          fileList: [
            {
              name: 'Vasil Ivanov',
              imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg'
            }
          ]
        }
      },
      validations: {
        required: {
          required
        }
      },
      computed: {
        ...mapState('officeTimesheet', [
          'people'
        ])
      },
      methods: {
        showNotification () {
          this.$notify({
            message: 'Details have been updated!',
            type: 'success',
            offset: 180,
            duration: 1000
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
h1 {
    margin-bottom: 90px;
}
.subtle {
    color: #8D8D8D;
    font-size: 12px;
    font-family: Roboto;
}
.details-container {
    position: relative;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 50px;
    border: 1px solid #ECECEC;
    border-radius: 3px;
}
.details-boxes {
    display: flex;
    flex-flow: column;
}  
.el-select {
    margin-left: 0;
}
.box1 {
  width: 60%;
  padding: 15px 30px;
  border-right: 1px solid #ECECEC;
}
.box2 {
    width: 40%;
    padding: 5px 40px;

    p {
      margin-bottom: 20px;
    }
}
.el-upload {
    height: 80%;
    width: 100%;
}
//    & .el-icon-upload
//        margin-top: 100px
.el-upload-dragger {
  height: 100%;
  width: 80%;
}
.select-box {
    display: flex;
    flex-flow: column;
    width: 70%;
    margin-bottom: 30px;

    label {
        margin-bottom: 15px;
    }
    input {
        font-size: 18px;
        height: 40px;
        border: 1px solid #B4B4B4;
        border-radius: 3px;
    }
    #phone-extension {
        width: 26%;
    }
}  
.button {
  display: inline-block;
  height: 40px;
  width: 125px;
  color: white;
  background-color: #1F98BD;
  border-color: transparent;
  margin-left: 0 !important;

  & :hover {
  background-color: hsl(192, 65%, 45%);
  }
}

.button.is-active, .button:active, .button:focus {
  background-color: hsl(192, 65%, 45%) !important;
  border-color: transparent !important;
}
.round-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: -45px;

  img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
  }
}
input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
}

.el-upload {
  width: 100%;
}
.el-upload-dragger {
  width: 100%;
}
.el-upload__text {
  list-style: 1;
}
</style>
 