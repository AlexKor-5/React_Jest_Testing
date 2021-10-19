export const getObject = (...args) => {
    return args.reduce((accum, current, i) => {
        accum[current] = current
        return accum
    }, {})
}