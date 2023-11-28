/**
 * 把副作用进行隔离，消除异步传染性。
 * 如：在纯函数环境中，避免异步调用等待。
 */
async function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1");
}

async function m1() {
  const users = await getUsers();
  return users;
}

async function m2() {
  const users = await m1();
  return users;
}

async function m3() {
  const users = await m2();
  return users;
}

async function main() {
  console.log("main");
  await m3();
}

function run(func) {
  const old_fecth = window.fetch;
  const data_catch = {
    status: "pedding",
    data: null,
  };
  window.fetch = function (...args) {
    if (data_catch.status === "pedding") {
      const prom = old_fecth(...args)
        .then((data) => data.json())
        .then(
          (data) => {
            data_catch.status = "done";
            data_catch.data = data;
          },
          (err) => {
            data_catch.status = "error";
            data_catch.data = err;
          }
        );
      throw prom;
    } else {
      return new Promise((resolve) => {
        resolve(data_catch.data);
      });
    }
  };
  try {
    func();
  } catch (err) {
    if (err instanceof Promise) {
      err.then(func, func).finally(() => {
        window.fetch = old_fecth;
      });
    }
  }
}

run(main);
