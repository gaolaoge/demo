import numpy as np  # 底层是C

# 列表 [3.193, 3.321, 4.231] 有序
# 集合 {3.193, 3.321, 4.231} 无序
# 数组对象 numpy.array()
# 数组对象可以去掉元素之间运算所需的循环，使一维向量更像单个数据。
# 专门的数组对象，经过优化，可以提升这类应用的运算速度。

a = [0, 1, 2, 3, 4]
b = [9, 8, 7, 6, 5]


def pySum():
    c = []
    for i in range(len(a)):
        c.append(a[i] ** 2 + b[i] ** 3)
    return c


# print(pySum())
def pySum2():
    _a = np.array(a)
    _b = np.array(b)
    c = _a ** 2 + _b ** 3
    return c


# print(pySum2())

arr = np.array([[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]])

print(arr.ndim)  # 2 秩，即轴的数量或维度的数量
print(arr.shape)  # (2, 5) 对象的初度，对于矩阵，n行m列
print(arr.size)  # 10 对象的个数，相当于 .shape 中的 n * m
print(arr.dtype)  # int64 对象的元素类型
print(arr.itemsize)  # 8 对象中每个元素的大小，单位是 byte

# 创建 ndarray 数组的方法
# 1. 从 Python 中的列表、元组灯类型创建；
# 2. 使用 NumPy 中函数创建 ndarray 数组，如 arange ones zeros
# 3. 从字节流（raw bytes）中创建
# 4. 从文件中读取特定格式创建

x = np.array([1, 2, 3], dtype=np.int16)
print(x)  # [1, 2, 3]
print(x.dtype)  # int16


