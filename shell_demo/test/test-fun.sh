# read name
# echo ${name[0]}

# 数值测试

num1=100
num2=200

if test $num1 -ne $num2; then
    echo "两值相等"
else
    echo "两值不相等"
fi

a=5
b=6

res=$((a + b))
echo $res

# 字符串测试

num1="gaoge"
num2="gaoxi"

if test $num1 = $num2; then
    echo "两字符串相等"
else
    echo "两字符串不相等"
fi

if test -w ./test.sh; then
    echo "文件存在"
else
    echo "文件不存在"
fi

# 流程控制

num=1

if test $num = 1; then
    echo "true"
fi

# 函数

demoFun() {
    echo "这是我的第一个 shell 函数"
}

echo "函数开始执行"
demoFun
echo "函数完成执行"

funWithReturn() {
    return "goage"
}
funWithReturn
echo $?

funWithParam() {
    echo "第一个参数为 $1 !"
    echo "第二个参数为 $2 !"
    echo "第十个参数为 $10 !"
    echo "第十个参数为 ${10} !"
    echo "第十一个参数为 ${11} !"
    echo "参数总数有 $# 个!"
    echo "作为一个字符串输出所有参数 $* !"
}
funWithParam 1 2 3 4 5 6 7 8 9 34 73

# echo "菜鸟教程：www.runoob.com" >myfile  # 覆盖
# echo "菜鸟教程：www.runoob.com" >>myfile # 追加

command <myfile
echo $command
