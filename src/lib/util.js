export const test = (str) => {
  return str
}

/**
 * 请求
 */
export const fetch = function (url, callback, data, x) {
  try {
    x = new (window.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0')
    x.open(data ? 'POST' : 'GET', url, 1)
    // x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.withCredentials = true
    // x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(JSON.parse(x.responseText), x) // 返回json
    }
    x.send(data)
  } catch (e) {
    window.console && console.log(e)
  }
}

// Handlebars模板使用
export const html = (para) => {
  const Handlebars = require('handlebars')
  const html =
  '<div class="sdk-model">' +
    '<ul class="list clearfix">' +
      '{{#list}}<li>{{title}}</li>{{/list}}' +
    '</ul>' +
  '</div>'
  const template = Handlebars.compile(html)
  const data = {
    list: para
  }
  const result = template(data)
  // 添加到body
  const ele = document.createElement('div')
  ele.innerHTML = result
  document.body.appendChild(ele)
}
