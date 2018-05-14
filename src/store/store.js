import Vue from 'vue';
import Vuex from 'vuex';
import breaking from './modules/breaking';
import timesheet from './modules/timesheet';
import shared from './modules/shared';
import officeStatus from './modules/officeStatus';
import abidance from './modules/abidance';
import myPermits from './modules/myPermits';
import editTime from './modules/editTime';
import nav from './modules/nav';
import officeTimesheet from './modules/officeTimesheet';
import workCalendar from './modules/workCalendar'
 
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    shared,
    breaking,
    timesheet,
    officeStatus,
    abidance,
    myPermits,
    editTime, 
    nav,
    officeTimesheet,
    workCalendar
  }

});
