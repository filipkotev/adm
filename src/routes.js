import Timesheet from './components/timesheet/Timesheet.vue'
import Breaking from './components/timesheet/Breaking.vue'
import Abidance from './components/timesheet/Abidance.vue'
import OfficeTimesheet from './components/timesheet/OfficeTimesheet.vue'
import WorkCalendar from './components/timesheet/WorkCalendar.vue'

import OfficeStatus from './components/others/OfficeStatus.vue'
import AccessRequests from './components/others/AccessRequests.vue'

import MyDetails from './components/profile/MyDetails.vue'
import MyPassword from './components/profile/MyPassword.vue'
import MyPermits from './components/profile/MyPermits.vue'

import EditTime from './components/hradministration/EditTime.vue'
// import EmployeеHours from './components/hradministration/EmployeеHours.vue'
import DutyHoursManager from './components/hradministration/DutyHoursManager.vue'
import StaffManager from './components/hradministration/StaffManager.vue'
import SetPermits from './components/hradministration/SetPermits.vue'

export const routes = [
  {path: '/', component: OfficeStatus},
  {path: '/timesheet', component: Timesheet},
  {path: '/breaking', component: Breaking},
  {path: '/abidance', component: Abidance},
  {path: '/officetimesheet', component: OfficeTimesheet},
  {path: '/workcalendar', component: WorkCalendar},
  {path: '/officestatus', component: OfficeStatus},
  {path: '/accessrequests', component: AccessRequests},
  {path: '/mydetails', component: MyDetails},
  {path: '/mypassword', component: MyPassword},
  {path: '/mypermits', component: MyPermits},

  {path: '/edittime', component: EditTime},
//   {path: '/employeehours', component: EmployeeHours},
  {path: '/dutyhoursmanager', component: DutyHoursManager},
  {path: '/staffmanager', component: StaffManager},
  {path: '/setpermits', component: SetPermits}
]
