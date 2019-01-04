
const axios = require('axios');


class Way {

    transNum(str) {
        let num = Number(str);
        if (isNaN(num)) {
            return str;
        } else {
            num = num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            return num;
        }
    }

    countdown(t,e,i) {
        const a = this,
        n = "function" == typeof e,
        r = new Date(t).getTime(),
        o = new Date(!e || n ? (new Date).getTime() : e).getTime(),
        l = r - o,
        c = [Math.floor(l / 864e5), Math.floor(l / 36e5) % 24, Math.floor(l / 6e4) % 60, Math.floor(l / 1e3) % 60];
        n && (i = e);
        var g = setTimeout(function() {
            a.countdown(t, o + 1e3, i)
        },
        1e3);
        return i && i(l > 0 ? c: [0, 0, 0, 0], e, g),
        l <= 0 && clearTimeout(g),
        g
    }

    request(requrstData) {
        axios.post(requrstData.url,requrstData.data={}).then(function (response) {
            if (response.status === 200) {
                const { data } = response;
                if (requrstData.yesFn) {
                    requrstData.yesFn(data);
                }
            }
        }).catch(function (error) {
        });
    }
}


export default Way;