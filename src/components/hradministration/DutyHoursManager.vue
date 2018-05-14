<template lang="html">
  <div>
    <div class="page-title"><h1>Employee's Hours Manager</h1></div>
    <div class="wrapper">
        <div class="row-wrapper">
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
        <div class="row-wrapper">
            <div class="block">
                <h5 class="demonstration">Additional commentary</h5>
                <el-input placeholder="Your comment..." v-model="commentInput"></el-input>
            </div>
            <div class="block checkbox">
                <!-- <input type="checkbox" v-model="checked" id="custom-checkbox">
                <label for="custom-checkbox">Perform time verification</label> -->
                <el-checkbox v-model="checked">Perform time verification</el-checkbox>
            </div>
        </div>
        <div class="row-wrapper">
            <div class="block">
                <el-button 
                    class="button"
                    type="primary"
                    
                >Save Record</el-button> 
                   
            </div>
            <div class="block link-buttons">
                
                <div class="popup-container" v-show="showRecords">
                    <div class="popup">
                        <div class="popup-header">
                            <h3 class="popup-title">Records for User</h3>
                            <i class="el-icon-close" @click="showRecords = !showRecords"></i>
                        </div>
                        <div class="popup-content">
                            <div class="popup-list" v-for="person in people">
                                <div class="popup-dates">
                                    <div class="from-date">
                                        <label for="from-date">From</label>
                                        <span id="from-date">{{ person.from }}</span>
                                    </div>
                                    <div>
                                        <label for="until-date">Until</label>
                                        <span id="until-date"> {{ person.until }}</span>
                                    </div>
                                    <el-button class="secondary-button">Delete</el-button>
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

                <div class="popup-container" v-show="showTimesheet">
                    <div class="popup" >
                        <span>
                                Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
                            cites of the word in classical literature, discovered the undoubtable source. 
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
                            on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
                            cites of the word in classical literature, discovered the undoubtable source. 
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
                            on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
                            cites of the word in classical literature, discovered the undoubtable source. 
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
                            on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the 
                            cites of the word in classical literature, discovered the undoubtable source. 
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
                            on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </span>    
                    </div>    
                </div>

                <el-button 
                    class="secondary-button"
                    @click="showRecords = !showRecords">List Record(s)</el-button>

                <el-button 
                    class="secondary-button"
                    @click = "showTimesheet = !showTimesheet">View Timesheet</el-button>
                    
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
            ...mapState('recordsFor', [
                'people'
            ]),
            datePickerValue: {
            get() {
                return this.$store.getters['shared/datePickerValue'];
            },  
            set(datePickerValue) {
                return this.$store.dispatch('shared/updateDatePickerValue', datePickerValue, {root:true});
            }
            },
        }, // End of computed properties
        data() {
            return {
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
                valueSelectedEmployee: '',
                reasonOptions: [{
                    value: 'Select',
                    label: 'Select'
                    }, {
                    value: 'Overtime',
                    label: 'Overtime'
                    }, {
                    value: 'Business',
                    label: 'Business'
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

.checkbox
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

// Modal dialog styles

.popup-container
    position: absolute
    left: 0
    top: 0
    z-index: 3
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.2) // Black w/ opacity

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
    margin-bottom: 30px

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
</style>

