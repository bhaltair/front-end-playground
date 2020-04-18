(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{420:function(_,t,v){"use strict";v.r(t);var r=v(16),e=Object(r.a)({},function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("该篇主要整理网络协议相关的概念，包括 TCP/IP、DNS、HTTP 等等基础认识。")]),_._v(" "),v("h1",{attrs:{id:"网络协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络协议","aria-hidden":"true"}},[_._v("#")]),_._v(" 网络协议")]),_._v(" "),v("h2",{attrs:{id:"tcp-ip-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议","aria-hidden":"true"}},[_._v("#")]),_._v(" TCP/IP 协议")]),_._v(" "),v("p",[_._v("TCP/IP 提供点对点的链接机制，将数据应该如何封装、定址、传输、路由以及在目的地如何接收，都加以标准化。"),v("br"),_._v("\n它将软件通信过程抽象化为四个抽象层，采取协议堆栈的方式，分别实现出不同通信协议。协议套组下的各种协议，依其功能不同，被分别归属到这四个层次结构之中，常被视为是简化的七层 OSI 模型。"),v("br"),_._v("\n可参考"),v("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F",target:"_blank",rel:"noopener noreferrer"}},[_._v("Wiki-TCP/IP 协议族"),v("OutboundLink")],1),_._v("。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("TCP/IP 协议分层")]),_._v(" "),v("ul",[v("li",[_._v("数据链路层：用来处理连接网络的硬件、设备驱动、网卡、光纤等")]),_._v(" "),v("li",[_._v("网络层：用来处理在网络上滚动的数据包（选路线）")]),_._v(" "),v("li",[_._v("传输层：TCP/UDP")]),_._v(" "),v("li",[_._v("应用层：FTP/DNS 域名系统/HTTP 协议等")])])]),_._v(" "),v("li",[v("p",[_._v("IP 协议")]),_._v(" "),v("ul",[v("li",[_._v("把各种数据包准确无误地传递")]),_._v(" "),v("li",[_._v("ARP 惬意、RARP 协议等")])])]),_._v(" "),v("li",[v("p",[_._v("TCP 协议")]),_._v(" "),v("ul",[v("li",[_._v("可靠传输（对比 UDP）：确认数据送达，把数据安全可靠传输")]),_._v(" "),v("li",[_._v("三次握手：建立一个 TCP 连接需要客户端和服务端总共发送三个包以确认连接存在")]),_._v(" "),v("li",[_._v("四次挥手\n"),v("blockquote",[v("p",[_._v("可以参考"),v("a",{attrs:{href:"http://www.cnblogs.com/zmlctt/p/3690998.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("《TCP 三次握手四次挥手详解》"),v("OutboundLink")],1)])])])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/0_131271823564Rx.gif",alt:"images"}})]),_._v(" "),v("h2",{attrs:{id:"dns-域名系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns-域名系统","aria-hidden":"true"}},[_._v("#")]),_._v(" DNS 域名系统")]),_._v(" "),v("p",[_._v("让用户电脑和服务器（网页存放电脑）连接起来并不是靠域名进行，网络上计算机之间实现连接是通过每台计算机在网络中拥有的惟一的 IP 地址来完成的。"),v("br"),_._v('\nDNS 的全称是 Domain Name System。它负责把 FQDN(就是以"."分隔结尾的名字)翻译成一个 IP。')]),_._v(" "),v("p",[_._v("DNS 速度优化是网站优化 SEO 中的一部分，优化 DNS 解析就必须了解 DNS 解析原理及过程。")]),_._v(" "),v("p",[_._v("当用户访问我们网站一个网页时，他需要经过以下步骤：")]),_._v(" "),v("ol",[v("li",[_._v("找到这个网页的存放服务器；")]),_._v(" "),v("li",[_._v("服务器将用户的请求信息接入；")]),_._v(" "),v("li",[_._v("服务器通过文件路径（URL）查找用户请求网页；")]),_._v(" "),v("li",[_._v("用户将该网页内容下载到自己电脑上。")])]),_._v(" "),v("p",[_._v("我们所讲的 DNS 解析主要是第一个步骤，即让用户通过 URL 找到文件存放的服务器。")]),_._v(" "),v("p",[_._v("DNS 解析主要有递归查询，就是在某个 DNS 服务器缓存中查找不到相应的域名与 IP 地址对应关系时，自动跳转到到下一步骤通过下一个 DNS 服务器进行查找。")]),_._v(" "),v("ul",[v("li",[_._v("参考\n"),v("ul",[v("li",[v("a",{attrs:{href:"http://www.ecdoer.com/post/dns.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("《DNS 解析过程原理【深入浅出详解】》"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"http://www.jianshu.com/p/4394aaf97492",target:"_blank",rel:"noopener noreferrer"}},[_._v("《DNS 服务原理详解》"),v("OutboundLink")],1)])])])]),_._v(" "),v("h2",{attrs:{id:"http-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-协议","aria-hidden":"true"}},[_._v("#")]),_._v(" HTTP 协议")]),_._v(" "),v("p",[_._v("关于 HTTP 协议相关的，需要了解和学习的太多太多了，这里本骚年先大概讲讲相关的，后面有空再进行深入分享。")]),_._v(" "),v("p",[_._v('通常，由 HTTP 客户端发起一个请求，建立一个到服务器指定端口（默认是 80 端口）的 TCP 连接。HTTP 服务器则在那个端口监听客户端发送过来的请求。一旦收到请求，服务器（向客户端）发回一个状态行，比如"HTTP/1.1 200 OK"，和（响应的）消息，消息的消息体可能是请求的文件、错误消息、或者其它一些信息。'),v("br"),_._v("\nHTTP 使用 TCP 而不是 UDP 的原因在于（打开）一个网页必须传送很多数据，而 TCP 协议提供传输控制，按顺序组织数据，和错误纠正。")]),_._v(" "),v("p",[_._v("HTTP 协议的主要特点可概括如下：")]),_._v(" "),v("ol",[v("li",[_._v("支持客户/服务器模式。")]),_._v(" "),v("li",[_._v("简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有 GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于 HTTP 协议简单，使得 HTTP 服务器的程序规模小，因而通信速度很快。")]),_._v(" "),v("li",[_._v("灵活：HTTP 允许传输任意类型的数据对象。正在传输的类型由 Content-Type 加以标记。")]),_._v(" "),v("li",[_._v("无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。")]),_._v(" "),v("li",[_._v("无状态：HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。")])]),_._v(" "),v("p",[_._v("具体的请求、相应等等，后面一章会讲解，这里就大概讲个理解吧。"),v("br"),_._v("\n这里有篇超详细的讲解："),v("a",{attrs:{href:"http://www.cnblogs.com/li0803/archive/2008/11/03/1324746.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("《HTTP 协议详解（真的很经典）》"),v("OutboundLink")],1),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"代理与反代理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代理与反代理","aria-hidden":"true"}},[_._v("#")]),_._v(" 代理与反代理")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("代理")]),_._v(" "),v("ul",[v("li",[_._v("用户希望代理服务器帮助自己，和要访问服务器通信，为了实现此目标，需要以下工作：\n"),v("ul",[v("li",[_._v("用户 IP 报文的目的 IP = 代理服务器 IP")]),_._v(" "),v("li",[_._v("用户报文端口号 = 代理服务器监听端口号")]),_._v(" "),v("li",[_._v("HTTP 消息里的 URL 要提供服务器的链接")])])]),_._v(" "),v("li",[_._v("代理服务器可以根据以上链接与服务器直接通信")]),_._v(" "),v("li",[_._v("服务器返回网页")]),_._v(" "),v("li",[_._v("代理服务器打包网页，返回用户")])])]),_._v(" "),v("li",[v("p",[_._v("反向代理")]),_._v(" "),v("ul",[v("li",[_._v("反向代理的实现\n"),v("ul",[v("li",[_._v("需要有一个负载均衡设备来分发用户请求，将用户请求分发到空闲的服务器上")]),_._v(" "),v("li",[_._v("服务器返回自己的服务到负载均衡设备")]),_._v(" "),v("li",[_._v("负载均衡将服务器的服务返回用户\n"),v("blockquote",[v("p",[_._v("在计算机世界里，由于单个服务器的处理客户端（用户）请求能力有一个极限，当用户的接入请求蜂拥而入时，会造成服务器忙不过来的局面，可以使用多个服务器来共同分担成千上万的用户请求，这些服务器提供相同的服务，对于用户来说，根本感觉不到任何差别。")])])])])])])]),_._v(" "),v("li",[v("p",[_._v("参考自"),v("a",{attrs:{href:"https://www.zhihu.com/question/24723688",target:"_blank",rel:"noopener noreferrer"}},[_._v("知乎的回答-反向代理为何叫反向代理？"),v("OutboundLink")],1)])])]),_._v(" "),v("h1",{attrs:{id:"结束语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[_._v("#")]),_._v(" 结束语")]),_._v(" "),v("p",[_._v("这里面只讲述最简单的一些概念和认识，作为前端，http 相关的还是需要深入理解的呢，后面我们也会一点点补充讲述一下。")])])},[],!1,null,null,null);t.default=e.exports}}]);