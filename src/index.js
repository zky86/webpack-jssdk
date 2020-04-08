import './style/main.scss'
import * as utils from './lib/util'

const URL = '//192.168.1.253:7001' // 接口地址

const messageList = [
  {
    title: '1111'
  },
  {
    title: '2222'
  },
  {
    title: '333'
  }
]

// function test () {
//   console.log(111)
// }
// test()
utils.fetch(`${URL}/article`, function (res) {
  utils.html(res) // 渲染模板
})
