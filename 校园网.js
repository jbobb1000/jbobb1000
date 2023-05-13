fetch('https://wxrz.ouc.edu.cn/drcom/chkstatus?callback=dr1002&jsVersion=4.1&v=3965&lang=zh')
  .then(response => response.text())
  .then(data => {
    const regex = /\((.*?)\)/; // 正则表达式匹配括号内的内容
    const match = data.match(regex);
    if (match) {
      const contentInParentheses = match[1]; // 获取匹配到的第一个括号内的内容
      const dictionary = JSON.parse(contentInParentheses); // 将内容解析为字典（对象）
      const ip = dictionary.v4ip; // 获取v4ip键对应的值，保存在常量ip中


