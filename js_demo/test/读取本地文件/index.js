/**
 * JS 读取本地文件
 * 例：www.vscode.dev 是 vscode 的浏览器版本，实现了读取本地项目的能力。
 * 浏览器预设了黑箱，默认不允许JS进程读取本地文件，
 * 新 API： showDirectoryPicker 实现了这个功能，兼容性差。
 *
 * 1. 如何选择文件夹
 * 2. 如何得到文件夹内目录
 * 3. 如何读取文件内容
 */

const btn = document.querySelector("#getCatalog");
const showBtn = document.querySelector("#show");

let catalog = null; // 文件目录结构

btn.addEventListener("click", async () => {
  try {
    // 这里得到 1 个 Promise ，任何 I/O 操作都是异步的
    // reader 是 1 个文件夹的句柄，指资源的访问点
    // { type: "directory" / "file" , name }
    const reader = await showDirectoryPicker();
    catalog = await processHandler(reader);
  } catch (e) {
    console.error("用户拒绝： ", e);
  }
});

const processHandler = async (handle) => {
  if (handle.kind === "file") {
    return handle;
  }
  handle.children = [];
  const iter = await handle.entries(); // 得到文件夹内的目录
  // iter 是 1 个异步迭代器
  for await (const entry of iter) {
    // [name, {kind, handle}]
    const child = await processHandler(entry[1]);
    if (child) {
      handle.children.push(child);
    }
  }
  return handle;
};

showBtn.addEventListener("click", async () => {
  if (!catalog || catalog.children.length === 0) {
    return;
  }
  console.log("catalog: ", catalog);
  console.time("time");
  await readCatalog(catalog);
  console.timeEnd("time");
});

const readCatalog = async (catalog) => {
  for (const child of catalog.children) {
    if (child.kind === "file") {
      console.log("child: ", child);
      const content = await child.getFile();
      //   const text = await content.text();
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        console.log(`
        ----------------------------
        name: ${child.name}
        content: ${e.target.result}
        ----------------------------
        `);
      });
      reader.readAsText(content);
    } else {
      readCatalog(child);
    }
  }
};
