export const getQueryString = (key) => {
    let searchValue = window.location.hash;

    searchValue = searchValue.split('?')[1];

    let searchArr = searchValue.split('&');

    for (let i = 0; i < searchArr.length; i++) {
        let arr = searchArr[i].split('=');

        if (arr[0] == key) {
            return arr[1];
        }
    }
}
export const getLocation = () => {
    return new Promise((resolve, reject) => {
        var options = {
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 4000,          //超过10秒后停止定位，默认：无穷大
        }
        // 若果是 http 禁止浏览器定位
        // if (location.protocol == 'http:') {
        //     options['noGeoLocation'] = 1;
        // }

        //加载地图，调用浏览器定位服务
        let map = new AMap.Map('__container__', {
            resizeEnable: true
        });
        map.plugin('AMap.Geolocation', function () {
            let geolocation = new AMap.Geolocation(options);

            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', (data) => {
                resolve(data);
            });//返回定位信息
            AMap.event.addListener(geolocation, 'error', (err) => {
                reject(err);
            });
        }); //返回定位出错信息
    });
    
}