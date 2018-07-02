import Timesheet from './components/timesheet/Timesheet.vue'
import Breaking from './components/timesheet/Breaking.vue'
import Abidance from './components/timesheet/Abidance.vue'
import OfficeTimesheet from './components/timesheet/OfficeTimesheet.vue'
import WorkCalendar from './components/timesheet/WorkCalendar.vue'

import OfficeStatus from './components/others/OfficeStatus.vue'
import AccessRequests from './components/others/AccessRequests.vue'

import Login from './components/profile/Login.vue'
import MyDetails from './components/profile/MyDetails.vue'
import MyPassword from './components/profile/MyPassword.vue'
import MyPermits from './components/profile/MyPermits.vue'

import EditTime from './components/hradministration/EditTime.vue'
import EmployeesHours from './components/hradministration/EmployeesHours.vue'
import StaffManager from './components/hradministration/StaffManager.vue'
import SetPermits from './components/hradministration/SetPermits.vue'
import AddNewUser from './components/hradministration/AddNewUser.vue'
import EditDetailsFor from './components/hradministration/EditDetailsFor.vue'

export const routes = [
  {path: '/login', component: Login},
  {path: '/', component: Login},
  // {path: '/', component: OfficeStatus},
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
  {path: '/employeeshours', component: EmployeesHours},
  {path: '/staffmanager', component: StaffManager},
  {path: '/addnewuser', component: AddNewUser},
  {path: '/editdetailsfor', component: EditDetailsFor},
  {path: '/setpermits', component: SetPermits}
]
