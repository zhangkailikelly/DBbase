1: ��ѹ������ȫ�ֱ���
  	��Path�����mysql binĿ¼��·��
2: �ҵ�my-default.ini���Լ���һ��my.ini�ļ��������޸Ļ��������
  	basedir="mysql��binĿ¼·��"(mysql����Ŀ¼)
  	datadir="mysql�ļ�����data�ļ������ڵ�Ŀ¼"(mysql����Ŀ¼\data)
3: �ù���Ա��ݴ�cmd ����: mysqld --initialize-insecure --user=mysql	(mysql-5.7.16�汾û��data�ļ���,����������data�ļ���)
4: ����:mysqld -install(��װmysql)(Service successfully installed��ʾ��װ�ɹ�)
5: ����:net start mysql (���ʧ����Ҫɾ��mysql���°�װ (ɾ��mysqld -remove)(��װmysqld -install) )
6: �������������� mysql -u root -p (��һ�ε�¼û������,ֱ�ӻس���,��¼�ɹ�)