var ajax = {
    get: function (a, b, c) {
        var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
        ajax_.open('get', 'http://192.168.0.137:3000' + a, true);
        ajax_.send();
        ajax_.onreadystatechange = function () {
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    var da = JSON.parse(ajax_.responseText);
                    var html_ = template(b, {
                        value: da
                    });
                    c.innerHTML = html_;
                }
            }
        }
    },
    post: function (a, b) {
        var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
        ajax_.open('post', 'http://192.168.0.137:3000' + b, true);
        ajax_.send(a);
        ajax_.onreadystatechange = function () {
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    alert(JSON.parse(ajax_.responseText).msg);

                }
            }
        }
    }
}

// function fn(da) {
//     var html_ = template('htm', {
//         value: da
//     });
//     lis.innerHTML = html_;
// }