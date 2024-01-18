(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{637:function(t,a,s){"use strict";s.r(a);var i=s(0),e=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),a("p",[t._v("GitHub 或 Gitee 平台的私有库只能免费 5 个人，当公司里多人开发一个项目，又不希望公开出去，那么就可以自建代码托管平台：GitLab。")]),t._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[t._v("2022-02-08 @Young Kbt")])])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#gitlab简介"}},[t._v("GitLab简介")])]),a("li",[a("a",{attrs:{href:"#gitlab安装"}},[t._v("GitLab安装")]),a("ul",[a("li",[a("a",{attrs:{href:"#服务器准备"}},[t._v("服务器准备")])]),a("li",[a("a",{attrs:{href:"#安装包准备"}},[t._v("安装包准备")])]),a("li",[a("a",{attrs:{href:"#编写安装脚本"}},[t._v("编写安装脚本")])])])]),a("li",[a("a",{attrs:{href:"#gitlab使用"}},[t._v("GitLab使用")]),a("ul",[a("li",[a("a",{attrs:{href:"#初始化gitlab服务"}},[t._v("初始化GitLab服务")])]),a("li",[a("a",{attrs:{href:"#启动gitlab服务"}},[t._v("启动GitLab服务")])]),a("li",[a("a",{attrs:{href:"#使用浏览器访问gitlab"}},[t._v("使用浏览器访问GitLab")])]),a("li",[a("a",{attrs:{href:"#gitlab创建远程库"}},[t._v("GitLab创建远程库")])])])]),a("li",[a("a",{attrs:{href:"#idea集成gitlab"}},[t._v("IDEA集成GitLab")]),a("ul",[a("li",[a("a",{attrs:{href:"#安装gitlab插件"}},[t._v("安装GitLab插件")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"gitlab简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab简介"}},[t._v("#")]),t._v(" GitLab简介")]),t._v(" "),a("p",[t._v("GitLab 是由 GitLabInc 开发，使用 MIT 许可证的基于网络的 Git 仓库管理工具，且具有 wiki 和 issue 跟踪功能。使用 Git 作为代码管理工具，并在此基础上搭建起来的 web 服务。")]),t._v(" "),a("p",[t._v("GitLab 由乌克兰程序员 DmitriyZaporozhets 和 ValerySizov 开发，它使用 Ruby 语言写成。后来，一些部分用 Go 语言重写。截止 2018 年 5 月，该公司约有 290 名团队成员，以及 2000 多名开源贡献者。GitLab 被 IBM，Sony，JülichResearchCenter，NASA，Alibaba，Invincea，O’ReillyMedia，Leibniz-Rechenzentrum(LRZ)，CERN，SpaceX 等组织使用。")]),t._v(" "),a("blockquote",[a("p",[t._v("官网地址："),a("code",[t._v("https://about.gitlab.com/")])]),t._v(" "),a("p",[t._v("安装说明："),a("code",[t._v("https://about.gitlab.com/installation/")])])]),t._v(" "),a("h2",{attrs:{id:"gitlab安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab安装"}},[t._v("#")]),t._v(" GitLab安装")]),t._v(" "),a("h3",{attrs:{id:"服务器准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器准备"}},[t._v("#")]),t._v(" 服务器准备")]),t._v(" "),a("p",[t._v("准备一个系统为 CentOS7 以上版本的服务器，要求内存 4G，磁盘 50G。")]),t._v(" "),a("p",[t._v("关闭防火墙，并且配置好主机名和 IP，保证服务器可以上网。")]),t._v(" "),a("p",[t._v("本内容使用虚拟机：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("主机名：gitlab-server")])]),t._v(" "),a("li",[a("p",[t._v("IP 地址：192.168.6.200")])])]),t._v(" "),a("h3",{attrs:{id:"安装包准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装包准备"}},[t._v("#")]),t._v(" 安装包准备")]),t._v(" "),a("p",[t._v("Yum 在线安装 gitlab- ce 时，需要下载几百 M 的安装文件，非常耗时，所以最好提前把所需 RPM 包下载到本地，然后使用离线 rpm 的方式安装。")]),t._v(" "),a("blockquote",[a("p",[t._v("下载地址："),a("code",[t._v("https://packages.gitlab.com/gitlab/gitlab-ce/packages/el/7/gitlab-ce-13.10.2-ce.0.el7.x86_64.rpm")])])]),t._v(" "),a("h3",{attrs:{id:"编写安装脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写安装脚本"}},[t._v("#")]),t._v(" 编写安装脚本")]),t._v(" "),a("p",[t._v("安装 GitLab 步骤比较繁琐，因此我们可以参考官网编写 GitLab 的安装脚本")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" gitlab-install.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ivh")]),t._v(" /opt/module/gitlab-ce-13.10.2-ce.0.el7.x86_64.rpm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" policycoreutils-python openssh-server cronie\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" lokkit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" postfix\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" postfix start\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" postfix on\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EXTERNAL_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://gitlab.example.com"')]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gitlab-ce\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("给脚本增加执行权限")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x gitlab-install.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后执行该脚本，开始安装 gitlab-ce。注意一定要保证服务器可以上网")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./gitlab-install.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"gitlab使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab使用"}},[t._v("#")]),t._v(" GitLab使用")]),t._v(" "),a("h3",{attrs:{id:"初始化gitlab服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化gitlab服务"}},[t._v("#")]),t._v(" 初始化GitLab服务")]),t._v(" "),a("p",[t._v("执行以下命令初始化 GitLab 服务，过程大概需要几分钟，耐心等待 ...")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("gitlab-ctl reconfigure\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"启动gitlab服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动gitlab服务"}},[t._v("#")]),t._v(" 启动GitLab服务")]),t._v(" "),a("p",[t._v("执行 "),a("code",[t._v("itlab-ctl stop")]),t._v(" 命令启动 GitLab 服务，如需停止，执行 "),a("code",[t._v("gitlab-ctl stop")]),t._v(" 命令")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("gitlab-ctl start  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启服务")]),t._v("\n\ngitlab-ctl stop "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止服务")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"使用浏览器访问gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用浏览器访问gitlab"}},[t._v("#")]),t._v(" 使用浏览器访问GitLab")]),t._v(" "),a("p",[t._v("使用主机名或者 IP 地址即可访问 GitLab 服务。如果使用主机名访问，则需要提前配一下 Windows 的 hosts 文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190130.png",alt:"image-20220208190124667"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190138.png",alt:"image-20220208190137170"}})]),t._v(" "),a("p",[t._v("或者通过 IP 地址访问")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190157.png",alt:"image-20220208190156955"}})]),t._v(" "),a("p",[t._v("首次登陆之前，需要修改下 GitLab 提供的 root 账户的密码，要求 8 位以上，包含大小写子母和特殊符号。")]),t._v(" "),a("p",[t._v("然后使用修改后的密码登录 GitLab")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190231.png",alt:"image-20220208190230628"}})]),t._v(" "),a("p",[t._v("GitLab 登录成功")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190238.png",alt:"image-20220208190238124"}})]),t._v(" "),a("h3",{attrs:{id:"gitlab创建远程库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab创建远程库"}},[t._v("#")]),t._v(" GitLab创建远程库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190302.png",alt:"image-20220208190302145"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190309.png",alt:"image-20220208190308134"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190316.png",alt:"image-20220208190315555"}})]),t._v(" "),a("h2",{attrs:{id:"idea集成gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idea集成gitlab"}},[t._v("#")]),t._v(" IDEA集成GitLab")]),t._v(" "),a("h3",{attrs:{id:"安装gitlab插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装gitlab插件"}},[t._v("#")]),t._v(" 安装GitLab插件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190346.png",alt:"image-20220208190345703"}})]),t._v(" "),a("p",[t._v("设置 GitLab 插件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190353.png",alt:"image-20220208190353074"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190405.png",alt:"image-20220208190404986"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190412.png",alt:"image-20220208190411322"}})]),t._v(" "),a("p",[t._v("push 本地代码到 GitLab 远程库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190424.png",alt:"image-20220208190423845"}})]),t._v(" "),a("p",[t._v("自定义远程连接")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190439.png",alt:"image-20220208190438140"}})]),t._v(" "),a("p",[t._v("注意：GitLab 网页上复制过来的连接是："),a("code",[t._v("http://gitlab.example.com/root/git-test.git")]),t._v("，需要手动修改为："),a("code",[t._v("http://gitlab-server/root/git-test.git")]),t._v("。")]),t._v(" "),a("p",[t._v("选择 GitLab 远程连接，进行 push")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190523.png",alt:"image-20220208190522569"}})]),t._v(" "),a("p",[t._v("首次向连接 GitLab，需要登录帐号和密码，用 root 帐号和我们修改的密码登录即可")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190539.png",alt:"image-20220208190537955"}})]),t._v(" "),a("p",[t._v("代码 push 成功")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/git/20220208190550.png",alt:"image-20220208190549793"}})]),t._v(" "),a("p",[t._v("只要 GitLab 的远程库连接定义好以后，对 GitLab 远程库进行 pull 和 clone 的操作和 Github 和码云一致，此处不再赘述。")])])}),[],!1,null,null,null);a.default=e.exports}}]);