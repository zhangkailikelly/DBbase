1: 解压后配置全局变量
  	在Path后添加mysql bin目录的路径
2: 找到my-default.ini或自己建一个my.ini文件在其中修改或添加配置
  	basedir="mysql的bin目录路径"(mysql所在目录)
  	datadir="mysql文件夹中data文件夹所在的目录"(mysql所在目录\data)
3: 用管理员身份打开cmd 输入: mysqld --initialize-insecure --user=mysql	(mysql-5.7.16版本没有data文件夹,此命令生成data文件夹)
4: 命令:mysqld -install(安装mysql)(Service successfully installed提示安装成功)
5: 命令:net start mysql (如果失败需要删除mysql重新安装 (删除mysqld -remove)(安装mysqld -install) )
6: 服务启动后输入 mysql -u root -p (第一次登录没有密码,直接回车过,登录成功)