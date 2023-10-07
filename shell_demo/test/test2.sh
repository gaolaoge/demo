# !/bin/bash

# 创建10个用户，并给他们设置随机密码，密码记录到1个文件里，文件名为 userinfo.txt
# 用户从 user_01 到 user_10
# 密码要求：包含大小写字母以及数字，密码长度15位

dirname=$(dirname $0)
out_filename=userinfo.txt

# 查看是否已存在该文件，判断为真则删除
if [ -f $dirname/out/$out_filename ] # -f 表示后面是一个文件
then
    rm -f $dirname/out/$out_filename
fi

if ! which mkpasswd 
then    
    # 判断系统并安装 expect
    echo "no mkpasswd"
    # yum install -y expect # 这里假定为 CentOS 或 Rocky
    brew install expect
fi

for i in `seq -w 1 10`
do 
    ps=`mkpasswd -l 15 -s 0`
    # useradd user_${i} && echo "${p}" | passwd --stdin user_${i} # linux 动作
    echo "user_${i} ${ps}" >> $dirname/out/$out_filename
done
