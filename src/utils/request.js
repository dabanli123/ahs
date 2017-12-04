import Axios from 'axios';

export default (args) => {
    args.method = args.method || 'GET';
    args.url = 'http://www.baidu.com' + args.url;

    return new Promise((resolve, reject) => {
        Axios({
            method: args.method,
            url: args.url,
            data: args.data
        }).then( result => {
            if(result.code == 0) {
                resolve(result.data);
            }else {
                reject(result)
            }
        });
    })
}

// res = {
//     code:0,
//     data:[],
    
// }

// res = {
//     code:11456023,
//     msg:'未登录'
    
// }


// let data;

// try {
//     data = await a({
//         url:'/api/getUeserInfo',
//         data:'xx',
//         method:'xx'
//     })
// }catch(e) {
//     alert('error');
// }

// data