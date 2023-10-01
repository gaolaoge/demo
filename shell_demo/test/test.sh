#! /bin/bash

echo "hello world!"

your_name="gaoge"

echo $your_name
echo ${your_name}

for skill in Ada Coffe Action Java; do
    echo "I am good at ${skill}script"
done

your_name="gaoge2 ant"
echo $your_name

# readonly your_name

echo ${your_name:0:4}

echo $(expr index "$your_name" a)

arr=(1 2 3 4 5)
echo ${arr[1]}
echo ${#arr[@]}
echo ${arr[*]}

echo "shell 传递参数示例"
echo "文件名： $0"
echo "参数1： $1"
echo "参数2： $2"
echo "参数3： $3"
echo "参数转为字符串：$*"
echo "参数转为字符串：$@"

read name
echo "$name It is a test"

for loop in 1 2 3 4 5; do
    echo "The value is: $loop"
done

int=1
while (($int <= 5)); do
    echo $int
    let "int++"

done

echo '按下 <CTRL-D> 退出'
echo -n '输入你最喜欢的网站名: '
while read FILM; do
    cho "是的！$FILM 是一个好网站"
done
