let duckCount = () => {
    return Array.from( arguments ).reduce(( acc, obj ) => {
        acc = Object.hasOwnProperty.call( obj, "quack" ) ? acc + 1 : acc;
        return acc;
    }, 0 )
}

module.exports = duckCount
