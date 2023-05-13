var xhr = new XMLHttpRequest();
var url = 'https://wxrz.ouc.edu.cn/drcom/chkstatus?callback=dr1002&jsVersion=4.1&v=3965&lang=zh';

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.open('GET', url, true);
xhr.send();
