# 爬取全本小说
# 89文学网 龙王传说
# http://www.89wxw.cn/0_9/
# 1. 所有链接地址，2. 全文

import requests
import os
import pprint
from bs4 import BeautifulSoup

base_url = "http://www.89wx.cc"
url = "http://www.89wx.cc/70/70610/"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
}

print("获取列表")
def getList():
    list = []
    r = requests.get(url)
    if r.status_code != 200:
        print("get list Error")
        return list

    soup = BeautifulSoup(r.text, "html.parser")
    dds = soup.find_all("dd")
    if dds is None or len(dds) == 0:
        return list

    for dd in dds:
        a = dd.find("a")
        if a is None:
            continue
        name = a.get_text()
        href = a.get("href")
        list.append([name, href])

    return list

data = getList()
total = len(data)
idx = 0
print("开始获取内容")

for name, src in data:
    r = requests.get(base_url + src, timeout=3, headers=headers)
    if r.status_code != 200:
        pprint.pprint(f"get article {name} error")
        continue
    soup = BeautifulSoup(r.text, "html.parser")
    content = soup.find("div", id="content").get_text()
    if not os.path.exists("./article"):
        os.makedirs("./article")
    with open("./article/%s.txt"%name, "w") as fout:
        fout.write(content)
        idx += 1
        print("当前进度：{:.2f}%".format(idx / total * 100))

print("完成")