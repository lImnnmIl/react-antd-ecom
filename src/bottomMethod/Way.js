
const axios = require('axios');



const class2type = {};

const toString = class2type.toString;

const hasOwn = class2type.hasOwnProperty;

class Way {

    

    /**
     * 数据存储到sessionStorage
     * @param {json} data
     */

    setSession(data){
        this.each(data,function(k,v){
            sessionStorage.setItem(k,v);
        })
    }
    
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

    /**
     * 遍历方法
     * @param {数组/json} obj 
     * @param {回调函数} callback 
     */

    each(obj, callback){
        var value,
        i = 0,
        length = obj.length,
        isArray = this.isArraylike( obj );
        if ( isArray ) {
            for ( ; i < length; i++ ) {
                value = callback.call( obj[ i ], i, obj[ i ] );

                if ( value === false ) {
                    break;
                }
            }
        } else {
            for ( i in obj ) {
                value = callback.call( obj[ i ], i, obj[ i ] );

                if ( value === false ) {
                    break;
                }
            }
        }
    }
    /**
     * 
     * @param {检验对象类型} obj 
     */
    type( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	}

    isWindow( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	}

    isArraylike( obj ) {
        var length = obj.length,
            type = this.type( obj );
    
        if ( type === "function" || this.isWindow( obj ) ) {
            return false;
        }
    
        if ( obj.nodeType === 1 && length ) {
            return true;
        }
    
        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    }

    /**
     * 请求方法
     * @param {请求地址} url 
     * @param {请求参数} data 
     * @param {成功请求回调函数} yesFn 
     */

    request({url,data={},token,yesFn}={}) {
        if(token){
            data.token = sessionStorage.getItem('token');
            data.tokenCheck = '1'
        }
        axios.post(url,data).then(function (response) {
            if (response.status === 200) {
                const { data } = response;
                if (yesFn) {
                    yesFn(data);
                }
            }
        }).catch(function (error) {
        });
    }
}


export default Way;