<template lang="html">
    <div class="">
        <div class="buttons">
            <el-button class="secondary-button" @click="checkAll">Check All</el-button>
            <el-button class="secondary-button" @click="uncheckAll">Uncheck All</el-button>
            <el-button type="primary" class="submit-button">Submit Changes</el-button>
        </div>
        <div class="page-title"><h1>Set Permits</h1></div>
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
                <!-- <p>{{person.permits}}</p> -->
                <div class="week-permits">
                    <!-- <div v-for="permit in person.permits" class="hidden"></div> -->
                    <div class="day-permit">
                        <input 
                            type="checkbox" 
                            value="Monday" 
                            v-model="person.permits" >
                    </div>
                    <div class="day-permit">        
                        <input 
                            name="weekday-input"
                            type="checkbox" 
                            value="Tuesday" 
                            v-model="person.permits" >
                    </div>
                    <div class="day-permit">
                        <input 
                            name="weekday-input"
                            type="checkbox" 
                            value="Wednesday" 
                            v-model="person.permits" >
                    </div>
                    <div class="day-permit">        
                        <input 
                            name="weekday-input"
                            type="checkbox" 
                            value="Thursday" 
                            v-model="person.permits" >
                    </div>
                    <div class="day-permit">        
                        <input 
                            name="weekday-input"
                            type="checkbox" 
                            value="Friday" 
                            v-model="person.permits" >
                    </div>
                    <div class="day-permit">        
                        <input 
                            name="weekday-input"
                            type="checkbox" 
                            value="Saturday" 
                            v-model="person.permits" >
                    </div>
                    <div class="day-permit">        
                        <input 
                            name="weekday-input"
                            type="checkbox" 
                            value="Sunday" 
                            v-model="person.permits" >
                    </div>
                </div>
            </div>
                        <!-- <el-checkbox-group v-model="person.permits">
                            <el-checkbox :label="permit"></el-checkbox>
                        </el-checkbox-group> -->
        </div>
        <!-- Buttons Container -->
        
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
    
    export default {
        data () {
            return {
                weekdays : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                permits : [],
                selected: [],
                people: [
                {
                    name: 'Ivan Ivanov',
                    imgUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
                    workId: 40812,
                    permits: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                }, {
                    name: 'Filip Kotev',
                    imgUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
                    workId: 40652,
                    permits: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                }, {
                    name: 'Vasil Ivanov',
                    imgUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
                    workId: 23612,
                    permits: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                }, {
                    name: 'Ivan Ivanov',
                    imgUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
                    workId: 40612,
                    permits: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                }, {
                    name: 'Nikolai Buhtiyarov',
                    imgUrl: 'https://randomuser.me/api/portraits/men/19.jpg',
                    workId: 40612,
                    permits: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                }, {
                    name: 'Dimitar Ivanov',
                    imgUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
                    workId: 40612,
                    permits: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                }, {
                    name: 'Angel Trifonov',
                    imgUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
                    workId: 40612,
                    permits: ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                }   
                ]
            }    
        },
        computed: {
            // selectAll: {
            //     get: function () {
            //         return this.people.permits ? this.selected.length == this.people.permits.length : false
            //     },
            //     set: function (value) {
            //         var selected = []

            //         if (value) {
            //             this.people.permits.forEach(function (permit) {
            //                 selected.push(person.permits.permit)
            //             })
            //         }
            //         this.selected = selected
            //     }
            // }
            
        },
        methods: {
            checkAll () {
                document.querySelectorAll("input[name=weekday-input]").setAttribute('checked', true)
                
            },
            uncheckAll () {

            }
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
    padding: 2%;
    background-color: white;
    box-shadow: 0px 0px 7px lightgrey;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
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

.hidden {
    display: none;
}

</style>