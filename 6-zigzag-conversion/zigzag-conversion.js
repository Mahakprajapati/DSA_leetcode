/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows<=1)return s;
    let rows = Array.from({length: numRows}, () => '');

    let row=0
    let step =1;

    for(let ch of s){
        rows[row]+=ch;

        if(row===0){
            //go down
            step=1;
        }else if(row===numRows-1){
            //go up
            step=-1;
        }

        row+=step;
    }
    rows=rows.join('');
    return rows;
};