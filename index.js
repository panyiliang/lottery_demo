/**
 * JS简单抽奖Demo
 * @param {Array} arr 抽奖名单数组 ['张A','李B','王C','赵D']
 * @param {Int} num 需要抽出的人数
 * @returns {Object}
 *      res     中奖名单
 *      idxs    中奖号码
 *      logs    抽奖过程中抽中的所有号码
 */
const lottery = (arr, num) => {
    const min = 0, max = arr.length, res = [], idxs = [],logs = [];
    if(max< num) {
        return {res: arr, idxs:idxs, logs: logs}
    }
    while(res.length < num) {
        let idx = Math.floor(Math.random() * (max - min)) + min;
        logs.push(idx)
        if(res.indexOf(arr[idx]) > -1) {
            continue;
        }else {
            res.push(arr[idx]);
            idxs.push(idx);
        }
    }
    return {res: res, idxs:idxs, logs: logs}
}
