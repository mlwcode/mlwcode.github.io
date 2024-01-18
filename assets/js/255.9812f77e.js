(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{603:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#使用背景"}},[t._v("使用背景")])]),s("li",[s("a",{attrs:{href:"#定时任务的优点"}},[t._v("定时任务的优点")])]),s("li",[s("a",{attrs:{href:"#springboot-实现定时任务"}},[t._v("SpringBoot 实现定时任务")])]),s("li",[s("a",{attrs:{href:"#cron-表达式"}},[t._v("Cron 表达式")]),s("ul",[s("li",[s("a",{attrs:{href:"#特殊字符"}},[t._v("特殊字符")])])])]),s("li",[s("a",{attrs:{href:"#其他方式"}},[t._v("其他方式")])]),s("li",[s("a",{attrs:{href:"#使用定时任务注意点"}},[t._v("使用定时任务注意点")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"使用背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用背景"}},[t._v("#")]),t._v(" 使用背景")]),t._v(" "),s("p",[t._v("定时任务在实际项目开发中很常见，并且定时任务可以在各种场景中应用，通过自动化操作和任务的规模化管理，提高效率、可靠性和工作质量。可以减少手动操作，避免疏忽和错误，并节省时间和人力资源的投入。")]),t._v(" "),s("h2",{attrs:{id:"定时任务的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时任务的优点"}},[t._v("#")]),t._v(" 定时任务的优点")]),t._v(" "),s("p",[t._v("简单易用：使用注解驱动的方式，简化了定时任务的配置和管理。通过添加 "),s("code",[t._v("@Scheduled")]),t._v(" 注解，可以将普通的方法标记为定时任务，而不需要手动编写定时任务调度的代码。")]),t._v(" "),s("p",[t._v("内置任务调度器：Spring Boot 内置了一个轻量级的任务调度器，可以方便地执行定时任务。它提供了线程池、任务管理和并发处理等功能，可以高效地管理和执行任务。")]),t._v(" "),s("p",[t._v("灵活的配置选项："),s("code",[t._v("@Scheduled")]),t._v(" 注解支持各种配置选项，例如 cron 表达式、fixedRate、fixedDelay 等，可以非常灵活地定义任务的触发时间和频率。这使得开发人员能够根据具体需求精确控制定时任务的执行方式。")]),t._v(" "),s("p",[t._v("总的来说，Spring Boot 定时任务提供了简单、灵活和可扩展的方式来进行任务调度。开发人员可以通过少量的配置和注解来创建定时任务，并利用 Spring 的特性和生态系统来增强定时任务的功能和性能。")]),t._v(" "),s("h2",{attrs:{id:"springboot-实现定时任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot-实现定时任务"}},[t._v("#")]),t._v(" SpringBoot 实现定时任务")]),t._v(" "),s("p",[t._v("pom.xml")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- web --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-web"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- lombok --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.projectlombok"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lombok"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("启动类使用 "),s("code",[t._v("@EnableScheduling")]),t._v(" 来开启定时任务注解")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootApplication")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scheduling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableScheduling")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启定时任务注解")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableScheduling")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledApplication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("测试类")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("lombok"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Slf4j")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scheduling"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Scheduled")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Slf4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduledTest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 每两秒执行一次 */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Scheduled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cron "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0/2 * * * * ?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduledTasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"根据cron表达式的定时执行规则，执行任务~"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[s("code",[t._v("@Scheduled")]),t._v(" 使用了 cron 表达式。")]),t._v(" "),s("h2",{attrs:{id:"cron-表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cron-表达式"}},[t._v("#")]),t._v(" Cron 表达式")]),t._v(" "),s("p",[t._v("Cron 表达式由空格分隔的 6 个或 7 个字段组成，每个字段代表一个时间单位。字段的取值范围如下:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("是否必须")]),t._v(" "),s("th",[t._v("范围")]),t._v(" "),s("th",[t._v("支持的特殊字符")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("秒（Seconds）")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("0 ~ 59")]),t._v(" "),s("td",[t._v("*，- /")])]),t._v(" "),s("tr",[s("td",[t._v("分（Minutes）")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("0 ~ 59")]),t._v(" "),s("td",[t._v("*，- /")])]),t._v(" "),s("tr",[s("td",[t._v("时（Hours）")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("0 ~ 23")]),t._v(" "),s("td",[t._v("*，- /")])]),t._v(" "),s("tr",[s("td",[t._v("日（DayofMonth）")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("1 ~ 31")]),t._v(" "),s("td",[t._v("*，- /? L W")])]),t._v(" "),s("tr",[s("td",[t._v("月（Month）")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("1 ~ 12")]),t._v(" "),s("td",[t._v("*，- /")])]),t._v(" "),s("tr",[s("td",[t._v("星期（DayofWeek）")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("1 ~ 7")]),t._v(" "),s("td",[t._v("*，- /? L #")])]),t._v(" "),s("tr",[s("td",[t._v("年（Year）")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("1970 ~ 2099")]),t._v(" "),s("td",[t._v("- * /")])])])]),t._v(" "),s("h3",{attrs:{id:"特殊字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符"}},[t._v("#")]),t._v(" 特殊字符")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("*（星号）：通配符，表示每个时间单位。例如 "),s("code",[t._v("* * * * ?")]),t._v(" 表示每一秒执行一次")])]),t._v(" "),s("li",[s("p",[t._v("?（问号）：该字符用于在日期和星期字段中指定「不指定值」。一般情况下，日期和星期两个字段只能指定一个值，另一个字段要使用问号进行占位。例如 "),s("code",[t._v("0 0 12 ? *")]),t._v("，表示在每个星期一至星期五的 12 点执行")])]),t._v(" "),s("li",[s("p",[t._v("-（连字符）：范围符号，用于指定一个时间单位的取值范围。例如 "),s("code",[t._v("10-30 * * * * ?")]),t._v(" 表示在每分钟的第 10 秒到第 30 秒之间执行")])]),t._v(" "),s("li",[s("p",[t._v(",（逗号）：枚举符号，用于指定多个时间单位取值的列表。例如 "),s("code",[t._v("1,3,5 * * * * ?")]),t._v(" 表示在每小时的第 1 分、第 3 分和第 5 分执行")])]),t._v(" "),s("li",[s("p",[t._v("/（斜杠）：间隔符号，用于指定时间单位的间隔。例如 "),s("code",[t._v("0/5 * * * * ?")]),t._v(" 表示每 5 秒执行一次")])]),t._v(" "),s("li",[s("p",[t._v("L（最后的）：特殊字符，用于指定某个时间单位的最后一个值。例如 "),s("code",[t._v("0 0 12 L * ?")]),t._v(" 表示在每个月的最后一天的 12 点执行")])]),t._v(" "),s("li",[s("p",[t._v("W（工作日）：特殊字符，用于指定距离给定日期最近的工作日（周一至周五）。例如 "),s("code",[t._v("15W * * * ?")]),t._v(" 表示在每个月的第 15 个工作日当天执行")])]),t._v(" "),s("li",[s("p",[t._v("#（井号）：特殊字符，用于指定某个月份的第几个星期几。例如 "),s("code",[t._v("0 0 12 ? * 6#3")]),t._v(" 表示在每个月的第三个星期五的 12 点执行")])])]),t._v(" "),s("p",[t._v("如果不记得规则，可以直接去 cron 在线网站生成即可，如："),s("a",{attrs:{href:"http://cron.ciding.cc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cron 在线表达式生成器"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"其他方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他方式"}},[t._v("#")]),t._v(" 其他方式")]),t._v(" "),s("p",[s("code",[t._v("@Scheduled")]),t._v(" 注解除了使用 cron，还有其他属性。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Slf4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SchedulerTask")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * @Scheduled(fixedRate = 6000) ：上一次开始执行时间点之后 6 秒再执行\n   * @Scheduled(fixedDelay = 6000) ：上一次执行完毕时间点之后 6 秒再执行\n   * @Scheduled(initialDelay=1000, fixedRate=6000) ：第一次延迟 1 秒后执行，之后按 fixedRate 的规则每 6 秒执行一次\n   * 默认是毫秒，可以通过 timeUnit 修改时间单位\n   */")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Scheduled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fixedRate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeUnit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MILLISECONDS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduled1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"使用 fixedRate 执行定时任务"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Scheduled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fixedRate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeUnit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MILLISECONDS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduled2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"使用 fixedDelay 执行定时任务"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Scheduled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cron "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*/6 * * * * ?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduled3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"使用 cron 执行定时任务"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br")])]),s("h2",{attrs:{id:"使用定时任务注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用定时任务注意点"}},[t._v("#")]),t._v(" 使用定时任务注意点")]),t._v(" "),s("blockquote",[s("p",[t._v("避免耗时操作")])]),t._v(" "),s("p",[t._v("定时任务的执行应尽量避免执行长时间运行的操作，或者涉及到大量数据处理的任务。因为定时任务是按照预定的时间间隔循环执行的，如果任务执行时间过长，可能会导致任务堆积和性能下降。")]),t._v(" "),s("blockquote",[s("p",[t._v("处理异常情况")])]),t._v(" "),s("p",[t._v("在定时任务的执行过程中，难免会遇到一些异常情况。需要确保任务的健壮性，即使出现异常也能够妥善处理，而不会导致整个任务调度系统的崩溃。")]),t._v(" "),s("blockquote",[s("p",[t._v("定时任务的幂等性")])]),t._v(" "),s("p",[t._v("在设计定时任务时，需要考虑任务的幂等性，即任务可以重复执行而不会影响最终结果。确保任务的执行逻辑和数据操作是幂等的，以避免数据错误和重复处理的问题。")]),t._v(" "),s("p",[t._v("注意这些要点可以帮助你使用定时任务更加稳定和可靠。根据实际情况，可能还需要考虑其他的因素，如分布式环境下的任务调度、任务依赖关系、任务优先级等。")])])}),[],!1,null,null,null);s.default=e.exports}}]);