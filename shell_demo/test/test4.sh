# !/bin/bash

# cat testfile
# nl testfile | sed '2,5d'

if ! which curl &>/dev/null
then
    echo "没有安装 curl"
    brew install curl
    if [ $? -ne 0 ]
    then
        echo "curl没有安装成功"
        exit 1
    fi    
fi    

# 获取状态码
code=`curl --connect-timeout 3 $1 -I 2>/dev/null | grep 'HTTP' | awk '{print $2}'`

#
if echo $code | grep -qE '^2[0-9][0-9]|^3[0-9][0-9]'
then
    echo "$1 访问正常"
else
    echo "$1 访问异常"
fi    

# grep 用于查找文件里符合条件的字符串或正则表达式
# awk 是一种处理文本文件的语言
# sed 可依照脚本的指令来处理、编辑文本文件，主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等。

# /dev/null 是一个黑洞文件，任何内容传入后都会被删除，相当于垃圾箱
# shell 命令有三种文件描述符 0-标准输入 1-标准输出 2-标准错误 &-应该表述全部