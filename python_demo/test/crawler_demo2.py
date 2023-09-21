# 豆瓣电影 top250 榜
# 使用 requests 爬取页面
# 使用 BeautifulSoup 实现数据解析
# 使用 pandas 将数据写入到 Excal

# pip3 install requests
# pip3 install BeautifulSoup
# pip3 install pandas
# pip3 install openpyxl

# 部分网站存在反爬虫机制，例如豆瓣，需要添加请求头

import requests
from bs4 import BeautifulSoup
import pprint
import pandas as pd

def download_all_html():
    """

    :return:
    """
    page_indexs = range(0, 250, 25)
    headers = {'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Geoko) Chrome/79.0.3945.130 Safari/537.36 OPR/66.0.3515.115"}
    htmls = []

    for index in page_indexs:
        url = f'https://movie.douban.com/top250?start={index}'
        r = requests.get(url, timeout=3, headers=headers)
        if r.status_code != 200:
            print('status_code: ', r.status_code)
            continue
        text = r.text
        htmls.append(text)
    return htmls

def artical_info():
    data = []
    htmls = download_all_html()
    if htmls is None or len(htmls) == 0:
        return data

    for html in htmls:
        soup = BeautifulSoup(html, "html.parser")

        wrapper = soup.find("ol", class_="grid_view")
        if wrapper is None:
            continue

        items = wrapper.find_all("li")
        if len(items) == 0:
            continue

        for item in items:
            pic = item.find("div", class_="pic")
            info = item.find("div", class_="info")

            ranking = pic.find("em").text

            url = info.find("a").get("href")
            text = info.find("span", class_="title").text
            rating = info.find("span", class_="rating_num").text

            data.append({
                "ranking": ranking,
                "url": url,
                "text": text,
                "rating": rating
            })
    return data

res = artical_info()
pprint.pprint(res)

df = pd.DataFrame(res)

df.to_excel("豆瓣电影TOP250.xlsx")




