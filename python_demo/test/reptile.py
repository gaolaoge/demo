import requests

url = 'http://www.baidu.com'

r = requests.get(url)

code = r.status_code
headers = r.headers
encodings = r.encoding

r.encoding = 'utf-8'

text = r.text
cookies = r.cookies



print(code)
print(headers)
print(encodings)
print(text)
print(cookies)