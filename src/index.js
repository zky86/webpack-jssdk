import './style/main.scss'
import * as utils from './lib/util'

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
utils.html(messageList) // 渲染模板

function test () {
  console.log(111)
}
test()
