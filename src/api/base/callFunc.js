const allFunc = (context, fn, args) => {
    if (typeof fn === 'function') {
        return fn.call(context, args)
    }
    return args;
}

export default allFunc;