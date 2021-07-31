function Ajax() {
  var data = 'act=reg&user=' + username.value + '&pass=' + pwd.value;

  // 1、创建ajax对象
  var Ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHttp");
  // 2.建立链接
  Ajax.open('post', 'http://127.0.0.1:3001/user', true);
  // 3.发送请求
  Ajax.send(data);
  // 4.接收服务器的返回值
  Ajax.onreadystatechange = function () {
    if (Ajax.readyState == 4) {
      if (Ajax.status == 200) {
        console.log("请求成功" + Ajax.responseText);
      } else {
        console.log("请求失败" + Ajax.status);
      }
    }
  };
}
