// noinspection JSUnresolvedReference
// 测试速度20mb/s左右(并发10)

const cookie = `填写自己账号的cookie(docs.qq.com)`;

const referer = "https://docs.qq.com/";
setReferer("https://docs.qq.com/");
//使用[]数组包裹base64代表二进制文件数据
const formData = {file: [IMAGE_DATA, "1.gif", "image/gif"]};
const headers = {
    referer,
    cookie,
};
const {text} = request("POST", "https://docs.qq.com/api/docsdata/image/upload", formData, headers);
if (!text) {
    throw new Error(`上传失败: ${text}`)
}
const data = JSON.parse(text);
const result = data.url.split('?')[0];
print(`上传成功: ${result}`)
//在最后一行填写图片地址表达式
result;

