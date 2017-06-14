function Spy( target, method ) {
    let reuslt = { count: 0 };
    let fn = target[method];

    target[method] = () => {
        reuslt.count ++;
        return fn.apply( this, arguments );
    }

    return reuslt;
}


module.exports = Spy
