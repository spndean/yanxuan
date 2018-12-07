
import {
  reqMsite,
  reqClassify
} from '../api'


import {
  MSITE,
  CLASSIFY,
  DISCOVER,
  LOADING
}from './mutation-types.js'

export default {
  async getMsiteData({commit}){
    const result = await reqMsite()
    if(result.code === 0){
      const msiteData = result.data
      commit(MSITE,{msiteData})
    }
  },
  async getClassifyData({commit}){
    const result = await reqClassify()
    if(result.code === 0){
      const classifyData = result.data
      commit(CLASSIFY,{classifyData})
    }
  },




}
