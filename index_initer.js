(function () {
    window.viewport = {
        init: function (url) {
            if (window.addEventListener) {
                window.addEventListener('message', this.handleMessage.bind(this));
            } else {
                window.attachEvent('onmessage', this.handleMessage.bind(this));
            }
            document.getElementById('iframe').src = url + location.search;
        },
        handleMessage: function (event) {
            if (event.origin === location.protocol + '//' + location.host) {
                var config = event.data;
                config = JSON.parse(config);
                document.getElementById('iframe').style.width = config.width + 'px';
                document.getElementById('iframe').style.height = config.height + 'px';
            }
        }
    }
}());