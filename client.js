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
    var config = JSON.stringify(iframe);
    window.iframeParent = {
        init: function (url) {
            parent.postMessage(config, url);
        }
    }
}());
