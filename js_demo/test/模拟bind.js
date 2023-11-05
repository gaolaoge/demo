Function.prototype._bind = function (origin, ...others) {
    return function (...args) {
        return origin.apply(this, others.concat(args))
    }
}