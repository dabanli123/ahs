export const getQueryString = (key) => {
    let searchValue = window.location.hash;

    searchValue = searchValue.split('?')[1];

    let searchArr = searchValue.split('&');

    for(let i=0; i < searchArr.length; i++) {
        let arr = searchArr[i].split('=');

        if(arr[0] == key) {
            return arr[1];
        }
    }
}