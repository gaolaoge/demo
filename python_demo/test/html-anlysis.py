# curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py   # 下载安装脚本
# sudo python get-pip.py    # 运行安装脚本
# sudo python3 get-pip.py    # 运行安装脚本。

# pip --version     # Python2.x 版本命令
# pip3 --version    # Python3.x 版本命令#

# pip3 install beautifulsoup4
# import bs4
from bs4 import BeautifulSoup

with open("test.html") as fin:
    html_doc = fin.read()

    soup = BeautifulSoup(html_doc, 'html.parser')

    links = soup.find_all("a")

    for link in links:
        print(link.name, link["href"], link.get_text())

    img = soup.find("img")
    print(img.name, img["src"])

    div_node = soup.find("div", id="content")
    ps = div_node.find_all("p")
    print(ps)