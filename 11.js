let arrayMap = ( arr, fn, thisArg ) => {
    return arr.reduce(( acc, value, index, arr ) => {
        acc.push( fn.call( thisArg, value, index, arr ) )
        return acc;
    }, [] )
}

module.exports = arrayMap
