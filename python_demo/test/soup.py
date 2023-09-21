# 网页解析器
# Python 第三方库，用于在 HTML 中提取数据
# pip install beautifulsoup4

from bs4 import BeautifulSoup
import requests

with open("./test.html") as fin:
    html_doc = fin.read()

    soup = BeautifulSoup(html_doc, 'html.parser')
    links = soup.find_all("a")
