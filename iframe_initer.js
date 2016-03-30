(function () {
    var body = document.body,
        html = document.documentElement;
    var iframe = {
        width: (function () {
            return Math.max(
                body.scrollWidth, body.offsetWidth,
                html.clientWidth, html.scrollWidth, html.offsetWidth);
        }()),
        heigth: (function () {
            return Math.max(
                body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);
        }())
    }
    var fit = JSON.stringify(iframe);
    window.iframeParent = {
        init: function (url) {
            parent.postMessage(fit, url);
            if (window.addEventListener) {
                window.addEventListener('message', this.getMessage.bind(this));
            } else {
                window.attachEvent('onmessage', this.getMessage.bind(this));
            }
        },
        getMessage: function (event) {
            if (event.origin === location.protocol + '//' + location.host) {
                var subscribe = event.data;
                subscribe = JSON.parse(subscribe);
                console.log(subscribe);
            }
        }
    }
}());