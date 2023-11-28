/**
 * 用户选择图片后，在本地进行处理（裁剪，预览）不触发网络请求，
 */

const input = document.querySelector("input");
const img = document.querySelector("#preview");

const handleChange = ({ target }) => {
  const [file] = target.files;
  if (file) {
    // 流式读取器
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      img.src = reader.result;
      console.log(reader.result);
    });
    // 异步，将文件转为【Data URL字符串】
    reader.readAsDataURL(file);
  }
};

input.addEventListener("change", handleChange);

/**
 * Data URL 字符串
 * data:[<media type>][;base64],<data>
 * 固定格式以 data: 开头
 * 可选值 <media type> 指目标文件的媒体类型，MIME TYPE 类型，如 image/png ，默认为 text/plain ，
 * 可选值 base64 指后面 data 的内容格式，默认为原始格式（没有被编码），
 */

const createScript = (dom, content) => {
  if (!dom) {
    throw Error("dom is not defined");
  }
  const url = `data: application/javascript, ${content}`;
  const script = document.createElement("script");
  script.src = url;
  dom.appendChild(script);
};

createScript(document.body, "console.log('hello world')");

/**
 * base64
 * base64是一种用64个字符来表示任意二进制数据的方法，
 * 体现为使用大小英文字符 + 十位阿拉伯数字 + "+" + "/"组成的纯文本表示任意内容；
 * 图片资源是二进制格式的， 使用原始类型无法表示，最常见的转换方式就是 base64 ，
 */
