1:安装 解压后配置环境变量，将bin目录的路径添加到系统Path路径上
2:mongod -version  检测是否安装上            ----数据库打开必须用管理员身份打开终端
3:新建data目录和log目录，并在log目录创建mongod.log文件
  命令:mongod --dbpath "data文件夹的绝对路径" --logpath "mongod.log文件的绝对路径" --logappend 加载data目录下文件并启动
4:由于mongod自带shell 新打开一终端 命令:mongo  可验证是否连接
5:设置mongodb 在windows中添加系统服务  
   mongod --dbpath "data目录绝对路径" --logpath "mongod.log文件绝对路径" --logappend --install   --serviceName "服务名称" 
6: ==>后续启动mongod   net start/stop 服务名称
  **** net start Mongodb 本机启动mongod     ***服务端
打开另一窗口==>mongo 命令,连接数据库  ***客户端

注:mongod 为服务端命令  mongo为客户端命令
