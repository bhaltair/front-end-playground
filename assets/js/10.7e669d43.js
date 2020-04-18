(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{345:function(t,r,a){"use strict";a.r(r);var e=a(16),v=Object(e.a)({},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("该系列用于记录在工作中的一些技能补全。什么技能？大概是前端所缺的很多的知识和技术吧。本节我们一起来了解下关系型数据库与非关系型数据库。")]),t._v(" "),a("h1",{attrs:{id:"sql-与-nosql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-与-nosql","aria-hidden":"true"}},[t._v("#")]),t._v(" SQL 与 NoSQL")]),t._v(" "),a("p",[t._v("上一节我们认识了数据库，了解了数据库事务是什么，索引是如何提升数据库性能的，现在我们来学习下大家常说的一些数据库，MySQL、mongoDB、kv 等等这些又有什么区别。本文中，SQL 与 NoSQL 代表关系型数据库与非关系型数据库，当然，SQL ≠ 关系型数据库，这里用作简写。")]),t._v(" "),a("h2",{attrs:{id:"关系型数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库","aria-hidden":"true"}},[t._v("#")]),t._v(" 关系型数据库")]),t._v(" "),a("h3",{attrs:{id:"什么是关系型数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是关系型数据库","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是关系型数据库")]),t._v(" "),a("p",[t._v("**关系数据库（Relational database），是创建在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。**现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数据库")]),t._v("：包括一个或多个表")]),t._v(" "),a("li",[a("strong",[t._v("表（关系 Relation）")]),t._v("：是以列和行的形式组织起来的数据的集合")]),t._v(" "),a("li",[a("strong",[t._v("列（属性 Attribute）")]),t._v("：在数据库中经常被称为字段")]),t._v(" "),a("li",[a("strong",[t._v("行（值组 Tuple）")]),t._v("：在数据库中经常被称为记录")])]),t._v(" "),a("p",[t._v("我们可以理解为：系型数据库，是指采用了关系模型来组织数据的数据库。")]),t._v(" "),a("p",[t._v("例如，可能有一个有关作者信息的名为 authors 的表（关系 Relation）。每列（值组 Tuple）都包含特定类型的信息，如作者的姓氏。每行（属性 Attribute）都包含有关特定作者的所有信息：姓、名、住址等等。")]),t._v(" "),a("p",[a("strong",[t._v("在关系型数据库当中一个表就是一个关系，一个关系数据库可以包含多个表。")])]),t._v(" "),a("p",[t._v("关系型数据库的主要代表：SQL Server，Oracle，MySQL，PostgreSQL。")]),t._v(" "),a("h3",{attrs:{id:"关系型数据库优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库优点","aria-hidden":"true"}},[t._v("#")]),t._v(" 关系型数据库优点")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("事务一致性")]),t._v("：通过事务处理保持数据的一致性")]),t._v(" "),a("li",[a("strong",[t._v("复杂查询")]),t._v("：支持 SQL，可以进行 JOIN 等复杂查询")]),t._v(" "),a("li",[a("strong",[t._v("容易理解")]),t._v("：二维表结构是非常贴近逻辑世界的一个概念，关系模型相对网状、层次等其他模型来说更容易理解")]),t._v(" "),a("li",[a("strong",[t._v("使用方便")]),t._v("：通用的 SQL 语言使得操作关系型数据库非常方便")]),t._v(" "),a("li",[a("strong",[t._v("易于维护")]),t._v("：丰富的完整性(实体完整性、参照完整性和用户定义的完整性)大大减低了数据冗余和数据不一致的概率")])]),t._v(" "),a("h3",{attrs:{id:"关系型数据库缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 关系型数据库缺点")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("读写性能")]),t._v("：在数据量达到一定规模时，由于关系型数据库的系统逻辑非常复杂，为了维护一致性，使得其非常容易发生死锁等的并发问题，所以导致其读写速度下滑非常严重")]),t._v(" "),a("li",[a("strong",[t._v("表结构更新")]),t._v("：表结构可以在被定义之后更新，但是如果有比较大的结构变更的话就会变得比较复杂")]),t._v(" "),a("li",[a("strong",[t._v("高并发")]),t._v("：网站的用户并发性非常高，往往达到每秒上万次读写请求，对于传统关系型数据库来说，硬盘 I/O 是一个很大的瓶颈")]),t._v(" "),a("li",[a("strong",[t._v("海量数据")]),t._v("：对于关系型数据库来说，在一张包含海量数据的表中查询，效率是非常低的")])]),t._v(" "),a("h2",{attrs:{id:"非关系型数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非关系型数据库","aria-hidden":"true"}},[t._v("#")]),t._v(" 非关系型数据库")]),t._v(" "),a("h3",{attrs:{id:"什么是非关系型数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是非关系型数据库","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是非关系型数据库")]),t._v(" "),a("p",[t._v("非关系型数据库（NoSQL）是对不同于传统的关系数据库的数据库管理系统的统称。")]),t._v(" "),a("p",[t._v("当代典型的关系数据库在一些数据敏感的应用中表现了糟糕的性能，例如为巨量文档创建索引、高流量网站的网页服务，以及发送流式媒体。关系型数据库的典型实现主要被调整用于执行规模小而读写频繁，或者大批量极少写访问的事务。")]),t._v(" "),a("p",[t._v("NoSQL 的结构通常提供弱一致性的保证，如最终一致性，或交易仅限于单个的数据项。")]),t._v(" "),a("p",[t._v("NoSQL 提出另一种理念，例如，以键值对存储，且结构不固定，每一个元组可以有不一样的字段，每个元组可以根据需要增加一些自己的键值对，这样就不会局限于固定的结构，可以减少一些时间和空间的开销。")]),t._v(" "),a("p",[t._v("**NoSQL 与 SQL 存在许多显著的不同点，其中最重要的是 NoSQL 不使用 SQL 作为查询语言。**其数据存储可以不需要固定的表格模式，也经常会避免使用 SQL 的 JOIN 操作，一般有水平可扩展性的特征。")]),t._v(" "),a("p",[t._v("非关系型数据库包括：")]),t._v(" "),a("ul",[a("li",[t._v("临时性键值存储：memcached、Redis")]),t._v(" "),a("li",[t._v("永久性键值存储：ROMA、Redis")]),t._v(" "),a("li",[t._v("面向文档的数据库：MongoDB、CouchDB")]),t._v(" "),a("li",[t._v("面向列的数据库：Cassandra、HBase\n"),a("blockquote",[a("p",[t._v("主要代表：MongoDB，Redis，CouchDB")])])])]),t._v(" "),a("h3",{attrs:{id:"非关系型数据库分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非关系型数据库分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 非关系型数据库分类")]),t._v(" "),a("p",[t._v("由于非关系型数据库本身天然的多样性，以及出现的时间较短，相比关系型数据库，非关系型数据库非常多，并且大部分都是开源的。")]),t._v(" "),a("p",[t._v("非关系型数据库严格上不是一种数据库，应该是一种数据结构化存储方法的集合。依据结构化方法以及应用场合的不同，主要分为以下几类：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("面向高性能并发读写的 key-value 数据库")]),t._v("：key-value 数据库的主要特点即使具有极高的并发读写性能，Redis，Tokyo Cabinet，Flare 就是这类的代表")]),t._v(" "),a("li",[a("strong",[t._v("面向海量数据访问的面向文档数据库")]),t._v("：这类数据库的特点是，可以在海量的数据中快速的查询数据，典型代表为 MongoDB 以及 CouchDB")]),t._v(" "),a("li",[a("strong",[t._v("面向可扩展性的分布式数据库")]),t._v("：这类数据库想解决的问题就是传统数据库存在可扩展性上的缺陷，这类数据库可以适应数据量的增加以及数据结构的变化")])]),t._v(" "),a("h3",{attrs:{id:"非关系型数据库优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非关系型数据库优点","aria-hidden":"true"}},[t._v("#")]),t._v(" 非关系型数据库优点")]),t._v(" "),a("p",[t._v("非关系型数据库的出现，多是源于关系型数据库的性能不足，故非关系型数据库的优点也很明显：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("读写性能")]),t._v("：无需经过 SQL 层的解析，读写性能很高。主要例子有 Redis，由于其逻辑简单，而且纯内存操作，使得其性能非常出色，单节点每秒可以处理超过 10 万次读写操作")]),t._v(" "),a("li",[a("strong",[t._v("简单的扩展")]),t._v("：基于键值对，数据没有耦合性，容易扩展。典型例子是 Cassandra，由于其架构是类似于经典的 P2P，所以能通过轻松地添加新的节点来扩展这个集群")]),t._v(" "),a("li",[a("strong",[t._v("存储格式多")]),t._v("：支持 key-value 形式、文档形式、图片形式，而关系型数据库则只支持基础类型")]),t._v(" "),a("li",[a("strong",[t._v("低廉的成本")]),t._v("：这是大多数分布式数据库共有的特点，因为主要都是开源软件，没有昂贵的 License 成本")])]),t._v(" "),a("h3",{attrs:{id:"非关系型数据库缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非关系型数据库缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 非关系型数据库缺点")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("不提供对 SQL 的支持")]),t._v("：如果不支持 SQL 这样的工业标准，将会对用户产生一定的学习和应用迁移成本")]),t._v(" "),a("li",[a("strong",[t._v("支持的特性不够丰富")]),t._v("：现有产品所提供的功能都比较有限，大多数 NoSQL 数据库都不支持事务，也不像 MS SQL Server 和 Oracle 那样能提供各种附加功能，比如 BI 和报表等")]),t._v(" "),a("li",[a("strong",[t._v("现有产品的不够成熟")]),t._v("：大多数产品都还处于初创期，和关系型数据库几十年的完善不可同日而语")])]),t._v(" "),a("h2",{attrs:{id:"关系型数据库与-nosql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库与-nosql","aria-hidden":"true"}},[t._v("#")]),t._v(" 关系型数据库与 NoSQL")]),t._v(" "),a("h3",{attrs:{id:"nosql-使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nosql-使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" NoSQL 使用场景")]),t._v(" "),a("p",[t._v("并不是任何场景，NoSQL 都要优于关系型数据库。NoSQL 使用场景常见如下：")]),t._v(" "),a("p",[a("strong",[t._v("数据库表 schema 经常变化")]),t._v("\n比如在线商城，维护产品的属性经常要增加字段，这就意味着 ORMapping 层的代码和配置要改，如果该表的数据量过百万，新增字段会带来额外开销（重建索引等）。")]),t._v(" "),a("p",[a("strong",[t._v("数据库表字段是复杂数据类型")]),t._v("\n对于复杂数据类型，比如 SQL Sever 提供了可扩展性的支持，像 xml 类型的字段。DB 层对 xml 字段很难建高效索引，应用层又要做从字符流到 dom 的解析转换。NoSQL 以 json 方式存储，提供了原生态的支持，在效率方便远远高于传统关系型数据库。")]),t._v(" "),a("p",[a("strong",[t._v("高并发数据库请求")]),t._v("\n此类应用常见于 web2.0 的网站，很多应用对于数据一致性要求很低，而关系型数据库的事务以及大表 JOIN 反而成了”性能杀手”。")]),t._v(" "),a("p",[a("strong",[t._v("海量数据的分布式存储")]),t._v("\n海量数据的存储如果选用大型商用数据，如 Oracle，那么整个解决方案的成本是非常高的，要花很多钱在软硬件上。NoSQL 分布式存储，可以部署在廉价的硬件上，是一个性价比非常高的解决方案。")]),t._v(" "),a("h3",{attrs:{id:"nosql-和关系数据库结合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nosql-和关系数据库结合","aria-hidden":"true"}},[t._v("#")]),t._v(" NoSQL 和关系数据库结合")]),t._v(" "),a("p",[a("strong",[t._v("一般把 NoSQL 和关系数据库进行结合使用，各取所长，需要使用关系特性的时候我们使用关系数据库，需要使用 NoSQL 特性的时候我们使用 NoSQL 数据库，各得其所")]),t._v("。NoSQL 数据库是关系数据库在某些方面（性能，扩展）的一个弥补。")]),t._v(" "),a("p",[t._v("举个简单的例子吧，比如用户评论的存储，评论大概有主键 id、评论的对象 aid、评论内容 content、用户 uid 等字段。我们能确定的是评论内容 content 肯定不会在数据库中用 where content=’’ 查询，评论内容也是一个大文本字段。那么我们可以把主键 id、评论对象 aid、用户 id 存储在数据库，评论内容存储在 NoSQL，这样数据库就节省了存储 content 占用的磁盘空间，从而节省大量 IO，对 content 也更容易做 Cache。")]),t._v(" "),a("p",[t._v("另外，"),a("strong",[t._v("可使用 NoSQL 作为缓存服务器")]),t._v("。MySQL + Memcached 的架构中，Memcached 这类内存缓存服务器缓存的数据大小受限于内存大小，如果用 NoSQL 来代替 Memcached 来缓存数据库的话，就可以不再受限于内存大小。虽然可能有少量的磁盘 IO 读写，可能比 Memcached 慢一点，但是完全可以用来缓存数据库的查询操作。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/SQL",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科-SQL"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/NoSQL",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科-NoSQL"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/xgf415/article/details/75370783",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么使用 NoSQL：NoSQL 与 SQL 的区别"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/lijinqi1987/article/details/51823506",target:"_blank",rel:"noopener noreferrer"}},[t._v("关系型数据库和非关系型数据库的特性以及各自的优缺点"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/oChangWen/article/details/53423301",target:"_blank",rel:"noopener noreferrer"}},[t._v("关系型数据库和非关系型数据库区别、oracle 与 mysql 的区别"),a("OutboundLink")],1)])]),t._v(" "),a("h1",{attrs:{id:"结束语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),a("p",[t._v("本节主要针对关系型数据库和非关系型数据库的特性和区别，由于在数据库相关的经验还很缺，大多数的内容也都是摘抄整理来的。"),a("br"),t._v("\n对于数据库的理解，还有后台存储的设计，以及在不同场景下的方案使用，或许还差的有些远呢。")])])},[],!1,null,null,null);r.default=v.exports}}]);