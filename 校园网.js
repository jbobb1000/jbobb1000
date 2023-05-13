fetch('https://wxrz.ouc.edu.cn/drcom/chkstatus?callback=dr1002&jsVersion=4.1&v=3965&lang=zh')
  .then(response => response.text())
  .then(data => {
    const regex = /\((.*?)\)/; // 正则表达式匹配括号内的内容
    const match = data.match(regex);
    if (match) {
      const contentInParentheses = match[1]; // 获取匹配到的第一个括号内的内容
      const dictionary = JSON.parse(contentInParentheses); // 将内容解析为字典（对象）
      const ip = dictionary.v4ip; // 获取v4ip键对应的值，保存在常量ip中

      // 构建新的URL并将其中的 * 替换为 ip 变量的值
      const url = 'https://wxrz.ouc.edu.cn:802/eportal/portal/login?callback=dr1003&login_method=1&user_account=%2C1%2C20030021013&user_password=Gaoyuan1&wlan_user_ip=' + ip + '&wlan_user_ipv6=&wlan_user_mac=000000000000&wlan_ac_ip=&wlan_ac_name=&jsVersion=4.1&terminal_type=2&lang=zh-cn&v=3892&lang=zh';

      console.log(url); // 在控制台输出构建后的URL

      fetch(url)
        .then(response => response.text())
        .then(data => {
          const regex = /\((.*?)\)/; // 正则表达式匹配括号内的内容
          const match = data.match(regex);
          if (match) {
            const contentInParentheses = match[1]; // 获取匹配到的第一个括号内的内容
            const dictionary = JSON.parse(contentInParentheses); // 将内容解析为字典（对象）
            const msgValue = dictionary.msg; // 获取msg键对应的值
            console.log(msgValue); // 在控制台输出msg键的值
            // 在这里可以对msg键的值进行进一步处理
          } else {
            console.log('错误！');
          }
        })
        .catch(error => {
          console.log('错误！:', error);
        });

    } else {
      console.log('错误！');
    }
  })
  .catch(error => {
    console.log('错误！:', error);
  });
