# 遍历 /data/ 目录下的 .txt 文件，将其备份，命名格式为 原名称+日期后缀，例如 aming.txt 备份为 aming.txt_20231001

# 定义后缀变量
suffix=`date +%Y%m%d`

# echo $PWD # 当前运行目录
# echo $(dirname $0) # 当前脚本目录
echo "ifs: $IFS"

dirname=$(dirname $0)

oldIFS=$IFS # IFS 内部域分隔符，默认是空格，使用 for 循环读取值列表时会根据它来判断列表中值的个数
IFS=$'\n'

#
for f in `find $dirname/out/data -type f -name "*.txt"`
do
    echo "备份文件 $f"
    cp ${f} ${f}_${suffix} # cp 拷贝
done

IFS=$oldIFS