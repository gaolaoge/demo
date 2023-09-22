# 爬取北京天气10年数据
# http://tianqi.2345.com/wea_history/54511.htm
# pip3 install lxml

import requests
import pandas as pd
import pprint

url = "http://tianqi.2345.com/Pc/GetHistory"
years = range(2013, 2023)
months = range(1, 13)
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
}
data = []

def getWeatherData(year, month):
    params = {
        "areaInfo[areaId]": 54511,
        "areaInfo[areaType]": 2,
        "date[year]": year,
        "date[month]": month
    }
    r = requests.get(url, params=params, headers=headers, timeout=3)
    if r.status_code != 200:
        print(f"request error: {year}-{month} status_code is {r.status_code}")
        return None
    data = r.json()['data']
    df = pd.read_html(data)[0]
    print(f"Success: {year}-{month}")
    return df

for year in years:
    for month in months:
        data.append(getWeatherData(year, month))

pd.concat(data).to_excel("北京天气.xlsx", index=False)
# df = pd.DataFrame(data)
# df.to_excal("北京天气.xlsx")
# getWeatherData(2023, 2)