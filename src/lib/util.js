
export const test = (str) => {
  return str
}

export const getId = (id) => {
  return (typeof (id) === 'string' ? document.getElementById(id) : id)
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

export const compatible = function () {
  // 兼容bind
  if (!Function.prototype.bind) {
    // eslint-disable-next-line no-extend-native
    Function.prototype.bind = function () {
      if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
      }
      var _this = this
      var obj = arguments[0]
      var ags = Array.prototype.slice.call(arguments, 1)
      return function () {
        _this.apply(obj, ags)
      }
    }
  }
  // 兼容indexOf
  if (!Array.prototype.indexOf) {
    // eslint-disable-next-line no-extend-native
    Array.prototype.indexOf = function (val) {
      var value = this
      for (var i = 0; i < value.length; i++) {
        if (value[i] === val) return i
      }
      return -1
    }
  }
  // 兼容addEventListener函数
  if (!window.addEventListener) {
    // eslint-disable-next-line no-extend-native
    Function.prototype.addEventListener = function addEventListener (ele, event, fn) {
      if (ele.addEventListener) {
        ele.addEventListener(event, fn, false)
      } else {
        ele.attachEvent('on' + event, fn.bind(ele))
      }
    }
  }
}

// Handlebars模板使用
export const html = (para) => {
  const Handlebars = require('handlebars')
  const html =
  '<div class="sdk-model">' +
    '<div class="close" id="sdkClose">关闭</div>' +
    '<div class="open" id="sdkOpen">展开</div>' +
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
