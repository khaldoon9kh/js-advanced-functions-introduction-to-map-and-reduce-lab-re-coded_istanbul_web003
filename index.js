// Your code here
const a = [1,2,3,-9];
function mapToNegativize (x) {
    return x.map (x => x * -1)
};

function mapToNoChange (y) {
    return y.map (y => y)
};


function mapToDouble (x) {
    return x.map (x => x * 2)
};

function mapToSquare (x) {
    return x.map (x => x * x);
};


function reduceToTotal(s,t) {
    if  (t === undefined) {
        return s.reduce ((curr,accu) => curr + accu)
    }
    return s.reduce ((curr,accu) => curr + accu,t)
};

function checktrue (x){
    if (Boolean(x) === true){
        return true;
    }
    return false;
};
function reduceToAllTrue(sourceArray){
    let result = false;
    for (let x of sourceArray){
        if(x){
            result = true;
        } else {
            return false
        }
    }
    return result
}

function reduceToAnyTrue(sourceArray){
    let result = true;
    for (let x of sourceArray){
        if(!x){
            result = false
        } else{
            return true;
        }
    }
    return result
}