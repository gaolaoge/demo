Jest 是当前最流行的前端单元测试工具。

Jest 默认不支持 esm ，需要安装转译：https://jestjs.io/zh-Hans/docs/getting-started#%E4%BD%BF%E7%94%A8-babel

测试模块可以分为 1. 社交型测试单元 2. 独立型测试单元

当1个测试模块需要依赖其它模块来实现它的功能时，它就是1个社交型测试单元，

在现实世界写脚本和测试单元时，常常遇到1些需要替身的对象：

1. Database 数据库，
2. Network Requests 网络请求，
3. Access Files 存取文件，
4. any External System 1些外部系统

例如：

1. Mock 用于替代整个模块

```js
// 该模块的所有功能都被 mock 了，没有被 mock 的部分也不再被返回
import SoundPlayer from "./sound-player";

const mockPlaySoundFile = jest.fn();

jest.mock("./sound-player", () => {
  return jest.fn().mockImplementation(() => {
    return {
      playSoundFile: mockPlaySoundFile
    };
  });
});
```

2. Stub 常常用来模拟特定行为，

```js
const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();

const returnsTrue = jest.fn(() => true);
console.log(returnsTrue()); // true
```

3. Spy 用于监听模块行为

```js
const video = require("./video");

it("plays video", () => {
  const spy = jest.spyOn(video, "play");
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});
```

什么样子的模块才是符合「职责单一原则」的？

「单元测试」站在使用者的角度来使用该模块，而脚本的易测性也就代表着脚本的可维护性；

`jest --coverage` 可以查看代码覆盖率，会生成一个 coverage 文件，该文件中记录了测试覆盖的代码行数，以及未覆盖的代码行数。

总结：

1. Jest 基本概念： GWT
2. 测试但愿的模块间依赖
3. 单元测试策略与原则
