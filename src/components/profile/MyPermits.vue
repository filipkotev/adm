<template lang="html">
  <div class='office-status-container'>
    <div class="page-title"><h1>My Permits</h1></div>
    <div class="page-heading">This week access grants for {{arrays[0].name}}</div>
    <div class="office-status-table">
      <div class="permit-status-table">
        <div class="">
          <p style="padding-left: 10px">Day of the week</p> 
        </div>
        <div class="title-table-status-right">
          <p style="margin-right: 18px">Status</p>
        </div>
      </div>  
      <ul class="office-status-list">
        <li v-for="key in weekdays">
          <div class="office-status user-name">
            {{ key.day }}
          </div>
          <div class="office-status office-status-tag" style="vertical-align: bottom">
            <el-tag :type="key.tagType">{{key.tagName}}</el-tag>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState('myPermits', [
      'person',
      'weekdays'
    ]),
    ...mapState('breaking', [
      'arrays'
    ])
  },
  methods: {
    
  },
  created: function(){
    for (var i = 0; i < this.weekdays.length; i++) {
      if (this.weekdays[i].tagName === 'allowed') {
          this.weekdays[i].tagType = 'success';
      }else if (this.weekdays[i].tagName === 'denied') {
          this.weekdays[i].tagType = 'danger';
      }else{
        this.weekdays[i].tagType = '';
      }
    }
  }
}
</script>

<style lang="css">
.page-heading {
  font-size: 21px;
  color: #3d3d3d;
  margin-top: 60px;
  border-bottom: none;
}

.office-status-container .block, .select-status{
  width: 28%;
  display: inline-block;
  margin-right: 3%;
}
.office-status-container .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
}
.office-status-container .title-table-status-right{
  text-align: right;
  
}
.office-status-table{
  margin-top: 30px;
}
.office-status-container .el-select{
  width: 100%;
}
.office-status-container .office-status-tag{
  text-align: right;
}
.office-status-container .title-table-status{
  width: 48%;
  display: inline-block;
  line-height: 4;
  color: #878d99;
  font-weight: 800;
}
.office-status-container .user-name{
  font-weight: 800;
}
.office-status-container .office-status-list{
  padding-left: 5px;
}
.office-status-container .office-status .el-progress-bar{
  width: 35%;
}
.office-status-container ul{
  line-height: 2;
  list-style: none;
  /* width: 90%; */
}
.office-status-container .office-status-list li{
  line-height: 2;
  border-bottom: 1px solid #dddddd;
  padding: 15px 10px;
}  
.office-status-tag li{
  text-align: right;
}
.office-status-container .title-table-status{
  line-height: 4;
  color: #878d99;
  font-weight: 800;
  font-size: 14px;
}
.office-status-container .office-status{
  width: 45%;
  display: inline-block;
  font-size: 14px;
}
.office-status-container .office-status-tag{
      margin-left: 9%
}
.office-status-container ul li:hover{
  background-color: #EAF6FB;
}
.office-status-container .office-status img {
  float: left;
  border-radius: 90%;
  width: 40px;
  padding-right: 10px;
}
.office-status-container .title-table-status span:hover{
  cursor: pointer;
}
.permit-status-table {
  /* border-bottom: 1px solid #dddddd; */
  /* width: 90%; */
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding-right: 5px;
}
p {
  color: #878d99;
  font-weight: 800;
  font-size: 14px;
}
</style>
