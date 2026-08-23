/**
 * @param {number[]} arr
 * @return {number}
 */

let findNSE = function (arr, n) {
    let NSE = new Array(n), st = [];

    for (let i = n - 1; i >= 0; i--) {
        while (st.length != 0 && arr[st[st.length - 1]] >= arr[i]) {
            st.pop();
        }

        NSE[i] = st.length == 0 ? n : st[st.length - 1];
        st.push(i);
    }
    return NSE;
}

let findPSEE = function (arr, n) {
    let PSEE = new Array(n), st = [];

    for (let i = 0; i < n; i++) {
        while (st.length != 0 && arr[st[st.length - 1]] > arr[i]) {
            st.pop();
        }

        PSEE[i] = st.length == 0 ? -1 : st[st.length - 1];
        st.push(i);
    }
    return PSEE;
}




var sumSubarrayMins = function (arr) {
    let n = arr.length;
    let nse = findNSE(arr, n);
    let psee = findPSEE(arr, n);
    let total = 0, mod = Math.pow(10, 9) + 7;


    for (let i = 0; i < n; i++) {
        let left = i - psee[i];
        let right = nse[i] - i;

        total = (total + (left * right * arr[i]) % mod) % mod;
    }
    return total;
};