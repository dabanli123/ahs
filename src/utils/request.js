import Axios from 'axios';

export default (args,bl) => {
    args.method = args.method || 'GET';
    //args.url = ' + args.url;

    return new Promise((resolve, reject) => {
        Axios({
            method: args.method,
            url: args.url,
            headers:args.headers,
            data: args.data ||""
        }).then( result => {
           
            if(result.data.code == 0) {
                if(bl) {
                    resolve(result.data);
                    return;
                }
                resolve(result.data.data);
            }else {
                reject(result.data)
            }
        });
    })
}