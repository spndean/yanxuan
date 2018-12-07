import Mock from 'mockjs'
import msiteData from './datahome.json'
import classifyData from './datanav.json'
// import TopicData from './datatopic.json'


Mock.mock('/msite', {
  code: 0,
  data: msiteData
})
Mock.mock('/classify', {
  code: 0,
  data: classifyData.categoryL1List
})
// Mock.mock('/navdata', {
//   code: 0,
//   data: NavData.categoryL1List
// })
