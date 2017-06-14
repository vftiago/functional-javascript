let logger = ( namespace ) => {
    return console.log.apply( null, [namespace].concat( Array.from( arguments ) ) )
}

module.exports = logger
