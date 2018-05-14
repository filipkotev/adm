<template lang="html">
    <div class="wrapper">
        <div class="page-title"><h1>Access Requests</h1></div>
        <div class="sub-title">People allowed access on Tuesday</div> 
        <el-table
            :data="people"
            style="width: 100%"
            
        >
            <el-table-column
                    label="Employee Name"
                    
                    width="350">
                <template slot-scope="people">
                    <div class="picName">
                        <div class="pic">
                        <img :src="people.row.imgUrl" alt="">
                        </div>  
                        <div class="userInfo">
                        <p><strong>{{ people.row.name }} </strong></p>
                        </div>
                    </div>  
                </template>          
            </el-table-column>
            <el-table-column
                    prop="workId"
                    label="Employee ID"
                    class="id-column"
                    align="center"
                    >
            </el-table-column>
            <el-table-column
                    prop="department"
                    label="Department"
                    align="center"
                    >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles'
            }]
        }
    },
    computed: {
        ...mapState('officeTimesheet', [
            'people'
        ])
    }
}
</script>

<style lang="sass">
.sub-title
    font-size: 21px
    color: #3d3d3d
    margin-top: 60px
    margin-bottom: 30px

.picName
    display: flex
    flex-flow: row
.pic
    margin-right: 25px

    img
        width: 50px
        height: 50px
        border-radius: 50%

.id-column
    padding-left: 50px        
</style>
