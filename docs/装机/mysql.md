# mysql

## 下载安装

[文章](https://www.cnblogs.com/yinzhengjie/p/10125609.html "文章")

1.[下载地址](https://dev.mysql.com/downloads/mysql/ "下载地址")、[中科大镜像](https://mirrors.ustc.edu.cn/mysql-ftp/Downloads/ "中科大镜像")

2.选择版本下载

3.跳过登录

4.安装包安装（安装过程中有初始密码记或者自己输入密码）， 12345678

5.[图形化工具](https://macwk.com/soft/navicat-premium "图形化工具")

6.[学习教程](https://www.yiibai.com/mysql/sample-database.html "学习教程")

7.[安装后终端环境变量问题](https://wenku.baidu.com/view/59e774567cd5360cba1aa8114431b90d6c85893f.html "安装后终端环境变量问题")

## 链接

服务器链接外网数据库

```bash
# 命令：
mysql -h hostname -u username -p

# 常规： 
# hostname：替换为目标 MySQL 数据库实例的外网地址
# port：替换为外网端口号
# username：替换为外网连接用户名

# 例子

mysql -h bj-cdb-bt5sq8g0.sql.tencentcdb.com -P 60187 -u jazh -p

# 如果是用navicat premium等工具需要先ssh登录服务器然后在链接
```

\*\*\*

## 打死也要记住法则

-   SELECT col,col,col 找什么？
-   FROM table 从哪找？
-   WHERE col 条件 条件是啥？
-   order by 排序。 order by year asc/desc ,年份升序/降序
-   group by 分组。
-   having   分组后在筛选的条件可以计算
-   limit    选取部分结果的长度
-   offset   从哪开始选结果

## select

select之后是逗号分隔列或星号(\ \*)的列表，表示要返回所有列。

-   count        计数
-   min            最小的
-   max          最大的
-   sum          求和
-   avg          平均数

## where

WHERE子句允许根据指定的过滤表达式或条件来指定要选择的行。

### 操作符：数字

-   \\=, !=, < <=, >, >= 比较
-   BETWEEN ... AND ... 在两个数之间
-   NOT BETWEEN … AND … 不在两个数之间
-   IN (…) 在一个列表
-   NOT IN(...) 不在一个列表

### 操作符：字符串

-   \\=                等于
-   !=               不等于
-   like             没有通配符的时候和=一样
-   %                % 和 like 一起用， LIKE "%AT%" 代表匹配 at-后是任意字符的字符串
-   \_               \_ 和 like 一起用， LIKE "AN\ \_" 代表匹配-并且后面有任意一个字符
-   IN (…)         在一个列表
-   NOT IN(...) 不在一个列表

## 例子

```sql
#cms
select
    attrs['spot_id'] as spotId,
    get_json_object(attrs['biz_content'], '$.campaignUnitId') as campaignUnitId,
    pt,
    count(DISTINCT(cip)) as uv,
    count(*) as pv
from
    htw_dw.dwd_htm_log_event_web_di
where
    '2021-05-01' <= pt and pt <= '2021-05-04'
    and eventid = 'phpub_cms_view_sw'
    and attrs['spot_id'] in ('bh-h5-all-campaign-panel')
    and get_json_object(attrs['biz_content'], '$.campaignUnitId') in ('94161')
group by
    attrs['spot_id'],
    pt,
    get_json_object(attrs['biz_content'], '$.campaignUnitId');

 

# 小程序
select
    eventid,
    attrs['is_havecar'] as is_havecar,
    count(attrs['is_havecar']) as num
from
    htw_dw.dwd_htm_log_event_mp_di
where
    pt >= '2021-02-07' and pt <= '2021-02-07'
    and eventid = 'qj_wx_homepage_searchbike_ck'
group by
    eventid,
    attrs['is_havecar'];

# 查询条件里
select
    Name
from
    Employee as a
where
    Salary > (
        SELECT
            Salary
        FROM
            Employee
        WHERE
            Id = a.Managerid
    )
 
# 或者
SELECT
    E1.Name AS Employee
FROM  
    Employee as E1,Employee as E2
WHERE
    E1.ManagerId = E2.Id
    AND E1.Salary > E2.Salary;

# ifnull,表达式的结果如果是null则返回第二个参数
select ifnull(
    (select distinct Salary as SecondHighestSalary
    from Employee
    order by Salary desc
    limit 1,1),
    null
) as SecondHighestSalary

# 查找重复的电子邮箱
# having, 在数据分组之后再次筛选
select
    Email
from
    Person
group by
    Email
having
    count(Email) > 1
```

### from跟select操作：

解释：from字段后跟表，可以先用select 筛出来一个表然后在用，例,先用grade和class字段排序之后在直接展示gradeName和className：

```sql
SELECT
  gradeName AS '年级',
  className AS '班级',
  _count AS '数量'
FROM
  (
        SELECT 
            gradeName, 
            className, 
            count(*) AS _count, 
            grade, 
            class 
        FROM 
            students 
        GROUP BY gradeName, 
            grade, 
            className, 
            class 
        ORDER BY grade, class 
    ) AS tables1
```

### 自定义列 + CASE

解释：select中，用 value as 'title'的方式可以自定义一个列，同时value可以用case来高一map

```sql
SELECT
  grade,
  ( 
    CASE grade 
      WHEN '1' THEN '高一' 
      WHEN '2' THEN '高二' 
      WHEN '3' THEN '高三' 
    END 
  ) AS '年级' ,
  count(*) as '人数'
FROM
  students
GROUP BY
  grade,
  '年级',
  '人数'
```
