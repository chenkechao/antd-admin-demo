//  const APIV1 = '/api/v1'
const APIV1 = '/api'
const APIV2 = '/api/v2'

module.exports = {
  name: 'miner ops',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  //  apiPrefix: '/api/v1',
  apiPrefix: '/api',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    jobConfigs: `${APIV1}/jobConfig/list`,
    jobConfig: `${APIV1}/jobConfig/:id`,
    zkConfig: `${APIV1}/zk/:id`,
    ruleConfigs: `${APIV1}/ruleConfig/list`,
    ruleConfig: `${APIV1}/ruleConfig/:id`,
    machineConfigs: `${APIV1}/machineConfig/list`,
    machineConfig: `${APIV1}/machineConfig/:id`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
