/**
 * Created by xianvv on 2016/1/30.
 */
exports.sum = sum;
/*ÇóºÍ*/
function sum(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}