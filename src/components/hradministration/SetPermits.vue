<template>
    <div class="">
        <div class="page-title"><h1>Set Permits</h1></div>
        <div class="buttons">
            <el-button 
                class="secondary-button"
                :indeterminate="isIndeterminate" 
                v-model="checkAll"
                @change="handleCheckAllChange">Check All</el-button>
            <el-button type="primary" class="submit-button">Submit Changes</el-button>
        </div>

         <el-table ref="multipleTable" :data="people" style="width: 100%">
            <el-table-column 
                label="Name">
                    <template slot-scope="people">
                        <div class="picNameId">
                            <div class="pic">
                                <img :src="people.row.imgUrl" alt="">
                            </div>  
                            <div class="userInfo">
                                <p><strong>{{ people.row.name }} </strong></p>
                            </div>
                        </div>  
                    </template>  
            </el-table-column>
                <el-table-column label="Mon" width="115" type="selection">
                    <el-table-column 
                        width="115">
                    </el-table-column>    
                </el-table-column>
                <el-table-column label="Tue" width="115" type="selection">
                    <el-table-column 
                        width="115">
                    </el-table-column>
                </el-table-column> 
                <el-table-column label="Wed" width="115" type="selection">
                    <el-table-column 
                        width="115">
                    </el-table-column>
                </el-table-column> 
                <el-table-column label="Thi" width="115" type="selection">
                    <el-table-column 
                        width="115">
                    </el-table-column>
                </el-table-column> 
                <el-table-column label="Fri" width="115" type="selection">
                    <el-table-column 
                        width="115">
                    </el-table-column>
                </el-table-column> 
                <el-table-column label="Sat" width="115" type="selection">
                    <el-table-column 
                        width="115">
                    </el-table-column>
                </el-table-column> 
                <el-table-column label="Sun" width="115" type="selection">
                    <el-table-column 
                         width="115">
                    </el-table-column>
                </el-table-column>
                <!-- <template slot-scope="people">
                    <el-table ref="multipleTable" style="width: 100%" >
                        <el-table-column type="selection" width="75" @selection-change="handleSelectionChange">
                        </el-table-column>
                        <el-table-column type="selection" width="75" @selection-change="handleSelectionChange">
                        </el-table-column>
                        <el-table-column type="selection" width="75" @selection-change="handleSelectionChange">
                        </el-table-column>
                        <el-table-column type="selection" width="75" @selection-change="handleSelectionChange">
                        </el-table-column>
                        <el-table-column type="selection" width="75" @selection-change="handleSelectionChange">
                        </el-table-column>
                        <el-table-column type="selection" width="75" @selection-change="handleSelectionChange">
                        </el-table-column>
                        <el-table-column type="selection" width="75" @selection-change="handleSelectionChange">
                        </el-table-column>
                        <el-table-column type="selection" width="75" @selection-change="handleSelectionChange">
                        </el-table-column>
                    </el-table>
                </template>         -->
        </el-table>
    </div>    
</template>

<script>
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
    const  weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
    
    export default {
        computed: {
            ...mapState('officeTimesheet', [
                'people'
            ]),
        },
        data () {
            return {
                checkAll: false,
                checkedCities: ['Shanghai', 'Beijing', 'London'],
                cities: cityOptions,
                isIndeterminate: true
            };
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
            
    }
</script>

<style scoped>
.picNameId{ 
  width: 220px;
  display: flex;
  flex-flow: row;
  padding-top: 15px;
}
.pic{ 
  margin-right: 25px;
}
.userInfo p{ 
  line-height: 5px;
}
.pic img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
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