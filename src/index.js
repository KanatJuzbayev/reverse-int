module.exports = function reverse (n) {
    var strN = n.toString().split('');
    let rn = strN.reverse();

    var str = '';
    rn.forEach((x) => {
    str = str + x;
    })

    let rNum = parseInt(str);

    return rNum;
}
