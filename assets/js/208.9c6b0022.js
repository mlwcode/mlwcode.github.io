(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{556:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#环境"}},[a._v("环境")])]),s("li",[s("a",{attrs:{href:"#下载"}},[a._v("下载")]),s("ul",[s("li",[s("a",{attrs:{href:"#下载rabbitmq"}},[a._v("下载RabbitMQ")])]),s("li",[s("a",{attrs:{href:"#下载erlang"}},[a._v("下载Erlang")])])])]),s("li",[s("a",{attrs:{href:"#安装"}},[a._v("安装")]),s("ul",[s("li",[s("a",{attrs:{href:"#传输"}},[a._v("传输")])]),s("li",[s("a",{attrs:{href:"#安装erlang"}},[a._v("安装Erlang")])]),s("li",[s("a",{attrs:{href:"#安装rabbitmq"}},[a._v("安装RabbitMQ")])]),s("li",[s("a",{attrs:{href:"#启动"}},[a._v("启动")])])])]),s("li",[s("a",{attrs:{href:"#管理界面及授权操作"}},[a._v("管理界面及授权操作")])]),s("li",[s("a",{attrs:{href:"#docker安装rabbitmq"}},[a._v("Docker安装RabbitMQ")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[a._v("#")]),a._v(" 环境")]),a._v(" "),s("p",[a._v("Linux 的 "),s("code",[a._v("CentOS 7.x")]),a._v(" 版本。")]),a._v(" "),s("p",[s("code",[a._v("Xftp")]),a._v(" 传输安装包到 Linux。")]),a._v(" "),s("p",[s("code",[a._v("Xshell")]),a._v(" 连接 Linux，进行解压安装。")]),a._v(" "),s("h2",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),s("p",[a._v("首先我们需要2个 "),s("code",[a._v("rpm")]),a._v(" 安装包，分别是 RabbitMQ 安装包和 Erlang 环境安装包，后者提供环境给前者运行。")]),a._v(" "),s("h3",{attrs:{id:"下载rabbitmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载rabbitmq"}},[a._v("#")]),a._v(" 下载RabbitMQ")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/rabbitmq/rabbitmq-server/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("RabbitMQ最新版下载地址"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("选择以 "),s("code",[a._v("noarch.rpm")]),a._v(" 结尾的安装包")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108231726.png",alt:"image-20211108231724901"}})]),a._v(" "),s("h3",{attrs:{id:"下载erlang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载erlang"}},[a._v("#")]),a._v(" 下载Erlang")]),a._v(" "),s("p",[a._v("RabbitMQ 是采用 Erlang 语言开发的，所以系统环境必须提供 Erlang 环境，需要先安装 Erlang。")]),a._v(" "),s("p",[s("code",[a._v("Erlang")]),a._v(" 和 "),s("code",[a._v("RabbitMQ")]),a._v(" 版本对照："),s("a",{attrs:{href:"https://www.rabbitmq.com/which-erlang.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击跳转"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108231930.png",alt:"image-20211108231929107"}})]),a._v(" "),s("p",[a._v("这里安装的是 3.9.8 版本的 RabbitMQ，因为官方没有及时更新版本比较图，猜测需要的 Erlang 版本依然是24.x，但是目前 Erlang 版本最高是 23.3，所以直接下载最新版本的 Erlang。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://packagecloud.io/rabbitmq/erlang/packages/el/7/erlang-23.3.4.8-1.el7.x86_64.rpm",target:"_blank",rel:"noopener noreferrer"}},[a._v("Erlang 23.3下载地址"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108232320.png",alt:"image-20211108232316667"}})]),a._v(" "),s("p",[a._v("点击右上角的 Download 即可下载到本地。")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("版本选择")]),a._v(" "),s("p",[a._v("CentOs 7.x 版本需要e17。")]),a._v(" "),s("p",[a._v("CentOs 8.x 版本需要e18。包括 Red Hat 8,modern Fedora 版本。")]),a._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[a._v("2021-11-08 @Young Kbt")])])]),a._v(" "),s("p",[a._v("最终下载的两个安装包，如图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108233037.png",alt:"image-20211108233036290"}})]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("h3",{attrs:{id:"传输"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传输"}},[a._v("#")]),a._v(" 传输")]),a._v(" "),s("p",[a._v("将在 Windows 或 Mac 下载好的安装包传输到 Linux 中。")]),a._v(" "),s("p",[a._v("首先在 Linux 的 "),s("code",[a._v("/usr/local")]),a._v(" 目录下创建一个文件夹 "),s("code",[a._v("rabbitmq")]),a._v("。请根据需求自定义路径")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /usr/local/rabbitmq\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("利用 "),s("code",[a._v("xftp")]),a._v(" 工具将两个 "),s("code",[a._v(".rpm")]),a._v(" 文件传输到刚刚创建的文件夹里")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108233831.png",alt:"image-20211108233830378"}})]),a._v(" "),s("h3",{attrs:{id:"安装erlang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装erlang"}},[a._v("#")]),a._v(" 安装Erlang")]),a._v(" "),s("p",[a._v("进入 "),s("code",[a._v("/usr/local/rabbitmq")]),a._v(" 目录，解压安装 Erlang")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/rabbitmq\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ivh")]),a._v(" erlang-23.3.4.8-1.el7.x86_64.rpm\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108234545.png",alt:"image-20211108234543727"}})]),a._v(" "),s("p",[a._v("安装完成后输入指令查看到版本号，代表成功")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("erl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108234636.png",alt:"image-20211108234635518"}})]),a._v(" "),s("p",[s("strong",[a._v("问题记录")])]),a._v(" "),s("p",[a._v("如果安装 Erlang 过程出现了如下问题：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211110164338.png",alt:"image-20211110164335789"}})]),a._v(" "),s("p",[a._v("出现这个错误的主要原因是没有"),s("code",[a._v("libcrypto.so.10(OPENSSL_1.0.2)(64bit)")]),a._v("依赖，我们去下载一个就可以了")]),a._v(" "),s("p",[a._v("下载地址："),s("a",{attrs:{href:"https://rpmfind.net/linux/rpm2html/search.php?query=libcrypto.so.10%28OPENSSL_1.0.2%29%2864bit%29&submit=Search%20...&system=&arch=",target:"_blank",rel:"noopener noreferrer"}},[a._v("libcrypto.so.10(OPENSSL_1.0.2)(64bit)"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("滑到最下面，下载最后一个")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211110164441.png",alt:"image-20211110164440458"}})]),a._v(" "),s("p",[a._v("下载到本地后通过 "),s("code",[a._v("Xftp")]),a._v(" 上传到 Linux 中，传输目录一致。接着使用命令安装")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ivh")]),a._v(" openssl-libs-1.0.2k-19.el7.x86_64.rpm "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--force")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("安装好这个后，再次安装 Erlang 即可成功")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211110164705.png",alt:"image-20211110164704354"}})]),a._v(" "),s("h3",{attrs:{id:"安装rabbitmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装rabbitmq"}},[a._v("#")]),a._v(" 安装RabbitMQ")]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("RabiitMQ")]),a._v(" 安装过程中需要依赖 "),s("code",[a._v("socat")]),a._v(" 插件，首先安装该插件")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" socat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("解压 "),s("code",[a._v("RabbitMQ")]),a._v(" 安装包")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ivh")]),a._v(" rabbitmq-server-3.9.8-1.el7.noarch.rpm\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108234804.png",alt:"image-20211108234803774"}})]),a._v(" "),s("p",[s("code",[a._v("i")]),a._v(" 代表 install")]),a._v(" "),s("p",[s("code",[a._v("vh")]),a._v(" 代表显示安装进度过程")]),a._v(" "),s("h3",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动服务")]),a._v("\nsystemctl start rabbitmq-server\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看服务状态")]),a._v("\nsystemctl status rabbitmq-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("启动 "),s("code",[a._v("RabbitMQ")]),a._v(" 服务后，查看该服务状态，显示绿色的 "),s("code",[a._v("active")]),a._v(" 则表示服务安装并启动成功")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211108235042.png",alt:"image-20211108235041361"}})]),a._v(" "),s("p",[a._v("其他指令：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开机自启动")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq-server\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止服务")]),a._v("\nsystemctl stop rabbitmq-server\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启服务")]),a._v("\nsystemctl restart rabbitmq-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"管理界面及授权操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理界面及授权操作"}},[a._v("#")]),a._v(" 管理界面及授权操作")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("默认端口")]),a._v(" "),s("p",[a._v("RabbitMQ 的默认访问端口是 15672")]),a._v(" "),s("p",[a._v("如果 Linux 有防火墙，记得开放 15672 端口，否则 Windows 无法访问")]),a._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[a._v("2021-11-09 @Young Kbt")])])]),a._v(" "),s("p",[a._v("默认情况下，RabbiMQ 没有安装 Web 端的客户端软件，需要安装才可以生效")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("rabbitmq-plugins "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rabbitmq_management\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("安装完毕以后，重启服务")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("systemctl restart rabbitmq-server\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("通过 "),s("code",[a._v("http://ip:15672")]),a._v(" 访问，ip 为 Linux 的 ip。"),s("code",[a._v("rabbitmq")]),a._v(" 有一个默认的账号密码 "),s("code",[a._v("guest")]),a._v("，但是登录该账号密码会出现权限问题")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/RabbitMQ/20211109000143.png",alt:"image-20211109000142149"}})]),a._v(" "),s("p",[a._v("默认的账号密码仅限于本机 localhost 进行访问，所以需要添加一个远程登录的用户")]),a._v(" "),s("code-group",[s("code-block",{attrs:{title:"添加用户模板",active:""}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建账号和密码")]),a._v("\nrabbitmqctl add_user 用户名 密码\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置用户角色")]),a._v("\nrabbitmqctl set_user_tags 用户名 角色\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为用户添加资源权限，添加配置、写、读权限")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set_permissions [-p <vhostpath>] <user> <conf> <write> <read>")]),a._v("\nrabbitmqctl set_permissions "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/"')]),a._v(" y "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])])]),a._v(" "),s("code-block",{attrs:{title:"我的模板"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建账号和密码")]),a._v("\nrabbitmqctl add_user admin "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# administrator 拥有所有权限")]),a._v("\nrabbitmqctl set_user_tags admin administrator\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为用户添加资源权限，添加配置、写、读权限")]),a._v("\nrabbitmqctl set_permissions "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/"')]),a._v(" admin "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".*"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])])])],1),a._v(" "),s("p",[a._v("角色固定有四种级别：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("administrator")]),a._v("：可以登录控制台、查看所有信息、并对rabbitmq进行管理")]),a._v(" "),s("li",[s("code",[a._v("monToring")]),a._v("：监控者；登录控制台，查看所有信息")]),a._v(" "),s("li",[s("code",[a._v("policymaker")]),a._v("：策略制定者；登录控制台指定策略")]),a._v(" "),s("li",[s("code",[a._v("managment")]),a._v("：普通管理员；登录控制")])]),a._v(" "),s("p",[a._v("添加用户和权限后，再次访问 "),s("code",[a._v("http://ip:15672")]),a._v(" 登录，输入添加好的用户名和密码，即可进入后台")]),a._v(" "),s("p",[a._v("其他指令：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改密码")]),a._v("\nrabbitmqctl change_ password 用户名 新密码\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除用户")]),a._v("\nrabbitmqctl delete_user 用户名\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看用户清单")]),a._v("\nrabbitmqctl list_users\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h2",{attrs:{id:"docker安装rabbitmq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker安装rabbitmq"}},[a._v("#")]),a._v(" Docker安装RabbitMQ")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装启动 rabbitmq 容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" myRabbitMQ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_DEFAULT_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("用户名 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RABBITMQ_DEFAULT_PASS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("密码 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15672")]),a._v(":15672 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5672")]),a._v(":5672 rabbitmq:3.8.14-management\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);