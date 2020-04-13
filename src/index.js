import './style/main.scss'
import * as utils from './lib/util'

const URL = '//192.168.1.253:7001' // 接口地址

utils.compatible()

// function test () {
//   console.log(111)
// }
// test()
utils.fetch(`${URL}/article`, function (res) {
  const data = res.data.list || []
  utils.html(data) // 渲染模板
  utils.getId('sdkClose').addEventListener('click', sdkClose)
  utils.getId('sdkOpen').addEventListener('click', sdkOpen)
})

// 关闭窗口
function sdkClose () {
  const ele = utils.getId('sdkClose').parentNode
  ele.className = 'sdk-model sdk-model-active'
}

// 开启窗口
function sdkOpen () {
  const ele = utils.getId('sdkOpen').parentNode
  ele.className = 'sdk-model'
}
