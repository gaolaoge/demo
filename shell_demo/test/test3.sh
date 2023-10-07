# 输入数字，执行对应命令
# 1-date 2-ls 3-who 4-pwd

# !/bin/bash

echo "*cmd meau** 1-date 2-ls 3-who 4-pwd"

# 使用死循环，放置用户输入错误值导致执行失败

while :
do 
    read -p "please input a number 1-4: " n
    case $n in 
    1)
        date
        break
        ;;
    2)
        ls
        break
        ;;
    3)
        who
        break
        ;;
    4)
        pwd
        break
        ;;
    *)
        echo "wrong input, try again"
        ;;
    esac    
done                

# read 用于在 shell 中与用户进行交互
# case .. esac 这种逻辑判断用法非常适合做选择，选项也可以是多个值如 1|5）
# 如果需要反复和用户交互，必须使用 while 循环，并借助 break 或 continue 来控制循环流程
# break 表示退出循环，continue 表示结束本次循环进入下1次循环