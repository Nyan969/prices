function sumStrings(a,b) {
    a=a.split('');
    b=b.split('');
    const res = [];
    let tens = 0;
    while (a.length || b.length || tens) {
        const sum = ~~a.pop() + ~~b.pop() + tens;
        if (sum > 9) {
            tens = 1;
            res.push(sum % 10);
        } else {
            tens = 0;
            res.push(sum);
        }
    }
    return res.reverse().join('').replace(/\b0*/g, '');
}
console.log('123 +','456 =', sumStrings('123','456'));
console.log('8797 +','45 =', sumStrings('8797','45'));
console.log('00103 +','08567 =', sumStrings('00103','08567'));
console.log('712569312664357328695151392 +','8100824045303269669937 =', sumStrings('712569312664357328695151392','8100824045303269669937'));
console.log('50095301248058391139327916261 +','81055900096023504197206408605 =', sumStrings('50095301248058391139327916261','81055900096023504197206408605'));