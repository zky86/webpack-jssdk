export const test = (str) => {
  return str
}

// Handlebars模板使用
export const html = (messageList) => {
  const Handlebars = require('handlebars')
  const html =
  '<div class="sdk-model">' +
    '<ul class="list clearfix"><li>这里是新闻消息第一条</li>' +
      '{{#list}}<li>这里是新闻消息第一条{{title}}</li>{{/list}}' +
    '</ul>' +
  '</div>'
  const template = Handlebars.compile(html)
  const data = {
    list: messageList
  }
  const result = template(data)
  // 添加到body
  const ele = document.createElement('div')
  ele.innerHTML = result
  document.body.appendChild(ele)
}
