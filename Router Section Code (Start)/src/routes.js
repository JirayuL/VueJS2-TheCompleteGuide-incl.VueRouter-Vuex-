import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UsetDetail from './components/user/UserDetail.vue'
import UsetEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

export const routes = [
  { path: '', name: 'home', components: {
    default: Home,
    'header-top' : Header
  } },
  { path: '/user', components: {
    default: User,
    'header-bottom' : Header
  }, children: [
    { path: '', component: UserStart },
    { path: ':id', component: UsetDetail, beforeEnter: (to, from, next) => {
        console.log('inside route setup');
        next()
    } },
    { path: ':id/edit', component: UsetEdit, name: 'userEdit' }
  ] },
  { path: '/redirect-me', redirect: '/user' },
  { path: '*', redirect: '/' }
]
