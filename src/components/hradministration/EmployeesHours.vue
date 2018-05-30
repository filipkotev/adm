<template lang="html">
  <div>
    <div class="page-title"><h1>Employee's Hours Manager</h1></div>
    <div class="wrapper">
        <div class="row-wrapper">
            <!-- Select Employee -->
            <div class="block">
                <h5 class="demonstration">Employee</h5>
                <div style="position: relative">
                    <img class="defaultImg" src="../../assets/user.svg" alt=""/>
                    <el-select
                        id="selectEmployee"
                        class="full-width"
                        v-model="valueSelectedEmployee"
                        filterable 
                        placeholder="Select Employee">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            <img class="selectImg" :src="item.url"/>
                            <span style="margin-left: 40px;">{{item.value}}</span>
                        </el-option>
                    </el-select>
                </div>
            </div>
            <!-- Date Picker -->
            <div class="block selectPeriod">
                <h5 class="demonstration">Period</h5>
                <el-date-picker
                class="full-width" 
                v-model="datePickerValue" 
                type="daterange" 
                align="right"
                format="dd/MM/yyyy" 
                unlink-panels range-separator="To" 
                start-placeholder="Start date" 
                end-placeholder="End date" 
                :picker-options="pickerOptions">
                </el-date-picker>
            </div>
        </div>
        <!-- Select Reason & Approved by row -->
        <div class="row-wrapper">
            <div class="block">
                <h5 class="demonstration">Reason</h5>
                <el-select v-model="value" placeholder="Select">
                    <el-option
                    v-for="item in reasonOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="block">
                <h5 class="demonstration">Extra time approved by</h5>
                <el-input v-model="approvedByInput"></el-input>
            </div>
        </div>
        <!-- Additional commentary -->
        <div class="row-wrapper">
            <div class="block">
                <h5 class="demonstration">Additional commentary</h5>
                <el-input placeholder="Your comment..." v-model="commentInput"></el-input>
            </div>
            <div class="block checkbox-container">
                <el-checkbox v-model="checked">Perform time verification</el-checkbox>
            </div>
        </div>
        <!-- Buttons Row -->
        <div class="row-wrapper">
            <div class="block">
                <el-button 
                    class="button"
                    type="primary"
                    
                >Save Record</el-button> 
            </div>
            <div class="block link-buttons">
                <!-- Records for popup -->        
                <div class="popup-container" v-show="showRecords">
                    <div class="popup">
                        <div class="popup-header">
                            <h3 class="popup-title">Records for User</h3>
                            <i class="el-icon-close" @click="showRecords = !showRecords"></i>
                        </div>
                        <div class="popup-content">
                            <div class="popup-list" v-for="(person, index) in people">
                                <div class="popup-dates">
                                    <div class="from-date">
                                        <label for="from-date">From</label>
                                        <span id="from-date">{{ person.from }}</span>
                                    </div>
                                    <div>
                                        <label for="until-date">Until</label>
                                        <span id="until-date"> {{ person.until }}</span>
                                    </div>
                                    <!-- Confirmation popover -->
                                    <!-- <el-popover
                                        placement="top-end"
                                        width="260"
                                        v-model="visibleConfirmation">
                                        <p>Are you sure to delete this record?</p>
                                        <div>
                                            <el-button size="mini" type="text" @click="hideConfirmation">Cancel</el-button>
                                            <el-button type="primary" size="mini" @click="deleteRecord(index)">Confirm</el-button>
                                        </div>
                                        <el-button slot="reference" class="secondary-button">Delete</el-button>
                                    </el-popover> -->
                                    <el-button 
                                        class="secondary-button"
                                        @click="deleteRecord(index)">Delete</el-button>
                                </div>
                                <div class="popup-approver">
                                    <div class="approver">
                                        <label for="approved-by">Approved BY</label>
                                        <div id="approved-by">
                                            <img :src="person.imgUrl">
                                            <span>{{ person.name }}</span>
                                        </div>
                                    </div>
                                    <div class="commentary">
                                        <label for="commentary">Commentary</label>
                                        <span id="commentary"> {{ person.commentary }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <!-- Timesheet for popup -->
                <div class="popup-container" v-show="showTimesheet">
                    <div class="popup">
                        <div class="popup-header">
                            <h3 class="popup-title">Timesheet for User</h3>
                            <i class="el-icon-close" @click="showTimesheet = !showTimesheet"></i>
                        </div class="popup-content">
                            <el-table
                                :data="timesheetTable"
                                style="width: 100%"
                                :row-class-name="durationRedClass">
                                    <el-table-column
                                        label="Date"
                                        prop="date">
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        label="Reason">
                                        <template slot-scope="timesheetTable">
                                            <div class="">
                                                <el-tag :type="timesheetTable.row.tagType">{{ timesheetTable.row.tagName }}</el-tag>
                                            </div>    
                                        </template>    
                                    </el-table-column>    
                                    <el-table-column
                                        align="center"
                                        label="Check In"
                                        prop="checkIn">
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        label="Check Out"
                                        prop="checkOut">
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        label="Duration"
                                        prop="duration">
                                    </el-table-column>
                            </el-table>
                            <div class="timesheet_total sm">
                                <span>Total:</span> {{timesheetTotal}}
                            </div>
                        </div>    
                    </div>    
                </div>

                <el-button 
                    class="secondary-button"
                    @click="showRecords = !showRecords"
                    :class="{disabled: isSelectedEmployee}"
                    :disabled="isSelectedEmployee">List Record(s)</el-button>

                <el-button 
                    class="secondary-button"
                    @click = "showTimesheet = !showTimesheet"
                    :class="{disabled: isSelectedEmployee}"
                    :disabled="isSelectedEmployee">View Timesheet</el-button>
                    
            </div>
        </div>    
    </div>  
    
  </div>
</template>

<script>
    import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
    
    export default {
        computed: {
             ...mapState('shared', [
               'pickerOptions'
            ]),
            ...mapState('timesheet', [
                'timesheetTable',
                'timesheetTotal'
            ]),
            datePickerValue: {
            get() {
                return this.$store.getters['shared/datePickerValue'];
            },  
            set(datePickerValue) {
                return this.$store.dispatch('shared/updateDatePickerValue', datePickerValue, {root:true});
            }
            },
            isSelectedEmployee () {
                return this.valueSelectedEmployee === ''
            }
        }, // End of computed properties
        data() {
            return {
                visibleConfirmation: false,
                showRecords: false,
                showTimesheet: false,
                options: [{
                    value: 'Ivan Borisov',
                    label: 'Ivan Borisov',
                    url: 'https://randomuser.me/api/portraits/men/55.jpg'
                    }, {
                    value: 'Ivvan Hristov',
                    label: 'Ivvan Hristov',
                    url: 'https://randomuser.me/api/portraits/men/53.jpg'
                    }, {
                    value: 'Filipp Kotev',
                    label: 'Filipp Kotev',
                    url: 'https://randomuser.me/api/portraits/men/51.jpg'
                    }, {
                    value: 'Vasil Ivanov',
                    label: 'Vasil Ivanov',
                    url: 'https://randomuser.me/api/portraits/men/91.jpg'
                    }, {
                    value: 'Ilian Ivannov',
                    label: 'ILian Ivannov',
                    url: 'https://randomuser.me/api/portraits/women/55.jpg'
                    },{
                    value: 'Ivan Borissov',
                    label: 'Ivan Borissov',
                    url: 'https://randomuser.me/api/portraits/men/13.jpg'
                    }, {
                    value: 'Ivan Hristov',
                    label: 'Ivan Hristov',
                    url: 'https://randomuser.me/api/portraits/men/29.jpg'
                    }, {
                    value: 'Filip Kotev',
                    label: 'Filip Kotev',
                    url: 'https://randomuser.me/api/portraits/men/15.jpg'
                    }, {
                    value: 'Vassil Georgiev',
                    label: 'Vassil Georgiev',
                    url: 'https://randomuser.me/api/portraits/men/35.jpg'
                    }, {
                    value: 'Ilian Ivanov',
                    label: 'ILian Ivanov',
                    url: 'https://randomuser.me/api/portraits/men/39.jpg'
                }],
                people: [{
                        name: 'Ivan Ivanov',
                        imgUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
                        business: '-',
                        overtime: '-',
                        from: '20-Apr-2018, 18:12:00, Friday',
                        until: '20-Apr-2018, 18:12:00, Friday',
                        commentary: 'He was on a trip about implementing the platform for credit cards for hotels'
                    }, {
                        name: 'Filip Kotev',
                        imgUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
                        department: 'User Experience',
                        business: '-',
                        overtime: '03:30',
                        from: '21-Apr-2018, 18:12:00, Monday',
                        until: '22-Apr-2018, 18:12:00, Wednesday',
                        commentary: 'none'
                    }, {
                        name: 'Vasil Ivanov',
                        imgUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
                        department: 'Accounts',
                        workId: 23612,
                        work: '46:59',
                        business: '46:00',
                        overtime: '-',
                        total: '92:59',
                        from: '25-Apr-2018, 18:12:00, Tuesday',
                        until: '27-Apr-2018, 18:12:00, Friday',
                        commentary: 'He was on a trip about implementing the platform for credit cards for hotels'
                    }, {
                        name: 'Ivan Ivanov',
                        imgUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
                        department: 'Cytric',
                        workId: 40612,
                        business: '-',
                        overtime: '01:54',
                        from: '20-Apr-2018, 18:12:00, Friday',
                        until: '20-Apr-2018, 18:12:00, Friday',
                        commentary: 'none'
                    }
                ],
                valueSelectedEmployee: '',
                reasonOptions: [{
                        value: 'Business',
                        label: 'Business'
                    }, {
                        value: 'Overtime',
                        label: 'Overtime'
                    }, {
                        value: 'On Duty',
                        label: 'On Duty'
                    }],
                value: '',
                approvedByInput: 'Margarita Daskalova',
                commentInput: "",
                checked: true,
                gridData: [{
                    date: '2016-05-02',
                    name: 'Jack',
                    address: 'New York City'
                    }, {
                    date: '2016-05-04',
                    name: 'Jack',
                    address: 'New York City'
                    }, {
                    date: '2016-05-01',
                    name: 'Jack',
                    address: 'New York City'
                    }, {
                    date: '2016-05-03',
                    name: 'Jack',
                    address: 'New York City'
                }]
            }    
        },
        methods: {
            showNotification() {
                this.$notify({
                message: 'Record has been deleted successfully',
                type: 'success',
                offset: 180,
                duration: 1000
                });
            },
            durationRedClass({row, rowIndex}) {
            for (var i = 0; i < this.timesheetTable.length; i++) {
                if (row.duration > '08:00:00') {
                    return 'duration-red';
                }
            }
            return '';
            },
            hideConfirmation () {
                this.visibleConfirmation = false;
            },
            deleteRecord (index) {
                this.people.splice(index, 1);
                this.hideConfirmation();
                this.showNotification();
            }
            
        },
        created () {
            for (var i = 0; i < this.timesheetTable.length; i++) {
                if (this.timesheetTable[i].tagName === 'on duty') {
                    this.timesheetTable[i].tagType = 'success';
                }else if (this.timesheetTable[i].tagName === 'overtime') {
                    this.timesheetTable[i].tagType = 'danger';
                }else {
                    this.timesheetTable[i].tagType = '';
                }
            }
        }
    }
</script>

<style lang="sass" scoped>

.wrapper
    border: 1px solid lightgrey
    padding: 40px

.row-wrapper
    display: flex
    flex-direction: row
    justify-content: space-between
    margin-bottom: 30px

.block
    width: 48%

.el-date-editor
    width: 100%

.el-select
    width: 100%

.el-input--suffix 
    & > input
        padding-left: 60px

.defaultImg
    background-color: #BFBFBF
    width: 30px
    height: 30px
    border-radius: 50%
    position: absolute
    top: 5px
    left: 10px
    z-index: 2

.selectImg
    width: 30px
    height: 30px
    border-radius: 50%
    position: absolute
    top: 5px
    left: 10px
    z-index: 2

.checkbox-container
    display: flex
    flex-direction: row
    align-items: flex-end

.el-checkbox__input
    line-height: 2.5

.el-checkbox__input.is-checked .el-checkbox__inner,
 .el-checkbox__input.is-indeterminate .el-checkbox__inner
     border-color: #1F98BD
     background-color: #1F98BD

// Additional styles for buttons
router-link
    display: inline-block

.link-buttons
    display: flex
    justify-content: flex-end

.secondary-button
    text-decoration: none
    font-size: 14px
    font-weight: 500
    width: auto
    padding-left: 17px !important
    padding-right: 17px !important
    line-height: 3
    border: 1px solid #0C85AA
    border-radius: 3px

    &:first-child
        margin-right: 20px

.button
    width: auto
    margin-left: 0

.ml-2
    margin-left: 20px

.disabled
    opacity: 0.3    

// Modal dialog styles

.popup-container
    position: absolute
    left: 0
    top: 0
    z-index: 3
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.3) // Black w/ opacity

.popup
    z-index: 4
    background-color: white
    padding: 30px 22px
    width: 50% 
    max-height: 60%
    position: absolute 
    top: 35%  
    left: 20%
    border: 1px solid lightgrey
    border-radius: 3px
    

    span
        line-height: normal

.popup-header
    display: flex
    flex-flow: row
    justify-content: space-between
    margin-bottom: 15px

    h3
        color: #444444
        font-weight: 400
    i
        font-size: 22px
        &:hover
            cursor: pointer

.popup-content
    padding-right: 10px
    max-height: 350px
    overflow-y: auto

.popup-list
    border-top: 1px solid lightgray
    padding: 20px 0px 20px 20px

    & > div
        margin-bottom: 20px
        min-height: 50px

    label
        display: inline-block
        font-size: 12px
        color: #8D8D8D
        font-weight: bold
        margin-bottom: 10px

    span
        display: block
        font-size: 12px
        color: #444444
.popup-dates
    & > div
        display: inline-block

    .from-date
        width: 39%

    .el-button
        float: right
        height: 22px
        font-size: 11px
        line-height: unset

.popup-approver
    & > div
        display: inline-block
        vertical-align: top

    .approver
        width: 39%    

    .commentary
        width: 53%
        height: auto

#approved-by
    display: flex
    margin-top: 5px

    img
        width: 32px
        height: 32px
        border-radius: 50%

    span
        padding-top: 2%
        padding-left: 5%

.el-table
    margin-top: 0

.el-tag
    padding-top: 1.5%
    width: 76px
    height: 22px

.timesheet_total
  line-height: 3
  text-align: right
  padding-right: 7%
  background-color: #e4e7ea
  font-weight: 600

  span 
    padding-right: 1% 

.secondary-button:first-child
    margin-right: 0

</style>

