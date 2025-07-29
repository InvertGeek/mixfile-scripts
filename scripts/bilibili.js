// noinspection JSUnresolvedReference
// 推荐使用 测试下载速度30mb/s左右

const cookie = `填写自己账号的cookie(manga.bilibili.com)`

const referer = "https://manga.bilibili.com/";
//设置下载时的referer
setReferer(referer);


const formData = {
    image_type: "2",
    file: [IMAGE_DATA, "1.gif", "image/gif"]
};
const headers = {
    referer,
    cookie
};
const response = submitForm(`https://manga.bilibili.com/twirp/manage.v1.Manage/UploadImage?device=pc&platform=web&creator_group=2`, formData, headers);
const result = JSON.parse(atob(response)).data.url
print("上传成功,图片地址: ", result)
//在最后一行填写图片地址表达式
result;

