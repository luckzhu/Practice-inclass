let request = new XMLHttpRequest
request.open(method, URL)
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
            console.log('success')
        } else if (request.status > 300) {
            console.log('fail')
        }
    }
}
request.send(body)

window.jQuery.ajax = function (url, method, body, successFn, failFn) {
    let request = new XMLHttpRequest
    request.open(method, url)
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status > 300) {
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)
}


window.jQuery.ajax = function (options) {
    //如果只有一个参数，那就是options.如果是两个，那第一个是url
    let url
    if (arguments.length === 1) {
        url = options.url
    } else if (arguments.length === 2) {
        url = arguments[0]
        options = arguments[1]
    }
    let method = options.method
    let body = options.body
    let successFn = options.successFn
    let failFn = options.failFn
    let headers = options.headers

    let request = new XMLHttpRequest
    request.open(method, url)
    //遍历一下请求头
    for (let key in headers) {
        let value = headers[key]
        request.setRequestHeader = (key, value)
    }

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                successFn.call(undefined, request.responseText)
            } else if (request.status > 300) {
                failFn.call(undefined, reqeust)
            }
        }
    }
    request.send(body)
}

window.jQuery.ajax = function () {
    let { url, method, body, successFn, failFn, headers } = options
        .
}

window.jQuery.ajax = function ({ url, method, body, successFn, failFn, headers }) {

}


window.jQuery.ajax = function ({ url, method, body, headers }) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest
        request.open(method, url)
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader = (key, value)
        }
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status > 300) {
                    reject.call(undefined, reqeust)
                }
            }
        }
        request.send(body)
    })
}

//ajax返回一个Promise实例，有一个then属性
window.Promise = function(fn){
    //...
    return {
        then : function(){}
    }
}


$.ajax({
    url: '/xxx',
    method:'get'
}).then(success,fail)



