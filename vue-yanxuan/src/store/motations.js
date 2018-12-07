import {
  MSITE,
  CLASSIFY,
  DISCOVER,
  LOADING
}from './mutation-types.js'

export default {
  [MSITE](state,{msiteData}){
    state.msiteData = msiteData
  },
  [CLASSIFY](state,{classifyData}){
    state.classifyData = classifyData
  }


}
