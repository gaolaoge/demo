/**
 * 实现一个观察者模式，拥有四个方法on, off, once 和 trigger 。
*/

const Event = class {

    // 支持相同监听挂载多个动作
    list = {}

    on(action, callback) {
        if (!this.list[action]) {
            this.list[action] = []
        }
        this.list[action].push(callback)
        return this
    }   // 绑定
    off(action, callback) {
        if (this.list[action]) {
            this.list[action] = this.list[action].filter(item => item !== callback)
        }
        return this
    }  // 解绑
    once(action, callback) {
        if (!this.list[action]) {
            this.list[action] = []
        }
        const self = this
        this.list[action].push(() => {
            callback()
            self.off(action, callback)
        })
        return this
    }   // 绑定一次


    trigger(action, data = null) {
        if (this.list[action]) {
            this.list[action].forEach(item => item(data))
            return true
        }
    }  // 触发事件
};



function Event() {
    if (!(this instanceof Event)) {
        return new Event();
    }
    this._callbacks = {};
}

Event.prototype.on = function (type, handler) {
    this._callbacks = this._callbacks || {};
    this._callbacks[type] = this.callbacks[type] || [];
    this._callbacks[type].push(handler);
    return this;
};

Event.prototype.off = function (type, handler) {
    var list = this._callbacks[type];
    if (list) {
        for (var i = list.length; i >= 0; --i) {
            if (list[i] === handler) {
                list.splice(i, 1);
            }
        }
    }
    return this;
};

Event.prototype.trigger = function (type, data) {
    var list = this._callbacks[type];
    if (list) {
        for (var i = 0, len = list.length; i < len; ++i) {
            list[i].call(this, data);
        }
    }
};

Event.prototype.once = function (type, handler) {
    var self = this;
    function wrapper() {
        handler.apply(self, arguments);
        self.off(type, wrapper);
    }
    this.on(type, wrapper);
    return this;
}; 