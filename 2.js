repeat = (operation, num) => {
    while ( num ) { operation(); num--; }
}

// Do not remove the line below
module.exports = repeat
