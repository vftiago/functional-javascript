let reduce = (arr, callback, initialValue) => {
    return ( reduceOnce = (i, result) => {
        return ( i > arr.length - 1 ) ? result : reduceOnce( i + 1, callback( result, arr[ i ], i, arr ) )
    })(0, initialValue)
}

module.exports = reduce

