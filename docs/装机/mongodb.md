# mongodb

## 安装

[https://juejin.cn/post/6844903827032768525](https://juejin.cn/post/6844903827032768525 "https://juejin.cn/post/6844903827032768525")

## 启动

\\-mongod-config /usr/local/mongodb/mongodb.conf

## 图形化工具

[Robo 3T](https://robomongo.org/download "Robo 3T")

## 命令

查看数据库       show dbs\\
创建数据库       use testDB\\
删除数据库       db.dropDatabase()

创建集合         db.createCollection("runoob") [https://www.runoob.com/mongodb/mongodb-create-collection.html](https://www.runoob.com/mongodb/mongodb-create-collection.html "https://www.runoob.com/mongodb/mongodb-create-collection.html")
查看集合         show tables
删除集合         db.collection.drop()   [https://www.runoob.com/mongodb/mongodb-delete-collection.html](https://www.runoob.com/mongodb/mongodb-delete-collection.html "https://www.runoob.com/mongodb/mongodb-delete-collection.html")

## 链接

MongoDB 连接命令格式\\
使用用户名和密码连接到 MongoDB 服务器，你必须使用 'username\\:password\\@hostname/dbname' 格式，'username'为用户名，'password' 为密码。

使用用户名和密码连接登录到默认数据库：

## 设置密码

use admin\\
db.createUser({ user: "jazh", pwd: "jazh", roles: \\\[{ role: "userAdminAnyDatabase", db: "JazhDB" }] })\\
db.createUser({ user: "jazh", pwd: "jazh", roles: \\\[{ role: "dbAdmin", db: "JazhDB" }] })

Read：允许用户读取指定数据库\\
readWrite：允许用户读写指定数据库\\
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile\\
userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户\\
clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。\\
readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限\\
readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限\\
userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限\\
dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。\\
root：只在admin数据库中可用。超级账号，超级权限

## 查看账户

use admin\\
show users 在当前库下查看账户
