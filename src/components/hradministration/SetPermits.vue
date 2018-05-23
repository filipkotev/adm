<template lang="html">
    <div class="">
        <div class="page-title"><h1>Set Permits</h1></div>
        <div class="buttons">
            <el-button 
                class="secondary-button"
                
                >Check All</el-button>
            <el-button type="primary" class="submit-button">Submit Changes</el-button>
        </div>

        <!-- Set Permits Table  --> 
        <div class="permits-table">
            <div class= "permits-table-head">
                <div class="name-label label">Name</div>
                <div class="week-label label">
                    <div class="weekday-label label" v-for="day in weekdays">{{ day }} </div>
                </div>
            </div>
            <div v-for="person in people" class="permits-table-row">
                <div class="name">
                    <img class="permits-image" :src="person.imgUrl" alt="">
                    {{ person.name }}
                </div>
                <div class="week-permits">
                    <div class="day-permit" v-for="{permit, key} in person.permits">
                        
                        <el-checkbox
                            v-model="permit"
                            >
                        </el-checkbox>
                            <!-- <input 
                            type="checkbox"
                            
                            :value="permit" 
                            v-model="permit"
                            class="checkbox-container"> -->
                    </div>        
                </div>
            </div>
        </div>
        
    </div>    
</template>

<script>
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
    
    export default {
        data () {
            return {
                weekdays : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                permit: false
            }    
        },
        computed: {
            ...mapState('officeTimesheet', [
                'people'
            ]),
        },
        methods: {
           
        }
            
    }
</script>

<style scoped>
.permits-table {
    margin-top: 60px;
}
.permits-table-row {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    border-bottom: 1px solid #ECECEC;
    padding: 20px
}
/*** Table Labels Styles***/
.label {
    font-size: 12px;
    font-family: Roboto;
    color: #8D8D8D;
    font-weight: bold;
}
.permits-table-head {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-bottom: 6px;
}
.week-label {
    display: inline-flex;
    width: 45%;
}
.weekday-label {
    width: 15%;
    padding-left: 12px;
}
.name-label {
    padding-left: 20px;
}

/*** Table Body Styles ***/
.week-permits {
    display: inline-flex;
    width: 45%;
}
.day-permit {
    width: 15%;
    padding: 20px;
}
.checkbox-container {
    width: 16px;
    height: 16px;
}
.name{ 
  width: 220px;
  display: flex;
  flex-flow: row;
  padding-top: 15px;
}
/* .pic{ 
  margin-right: 25px;
}
.userInfo p{ 
  line-height: 5px;
} */
.name img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 25px;
}
.buttons {
    display: flex;
    justify-content: flex-end;
}
.submit-button {
  background-color: #1F98BD;
  border-color: transparent;
}
.secondary-button {
    padding: 8px 20px !important;
}
.el-button {
  margin-left: 20px;
  height: 40px;
  width: auto;
  color: white;
}
.el-button:hover {
  background-color: hsl(192, 65%, 45%);
  color: white !important;
}
.el-button--primary.is-active,
.el-button--primary:active,
.el-button--primary:focus {
  background-color: hsl(192, 65%, 45%);
  border-color: transparent;
}

</style>