(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{520:function(t,s,v){"use strict";v.r(s);var a=v(0),_=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("p",[t._v("Redis 很强大，那么它的应用场景是什么样的，它能处理哪些问题呢？")]),t._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[t._v("2021-12-26 @Young Kbt")])])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#缓存穿透"}},[t._v("缓存穿透")]),s("ul",[s("li",[s("a",{attrs:{href:"#问题描述"}},[t._v("问题描述")])]),s("li",[s("a",{attrs:{href:"#解决方案"}},[t._v("解决方案")])])])]),s("li",[s("a",{attrs:{href:"#缓存击穿"}},[t._v("缓存击穿")]),s("ul",[s("li",[s("a",{attrs:{href:"#问题描述"}},[t._v("问题描述")])]),s("li",[s("a",{attrs:{href:"#解决方案"}},[t._v("解决方案")])])])]),s("li",[s("a",{attrs:{href:"#缓存雪崩"}},[t._v("缓存雪崩")]),s("ul",[s("li",[s("a",{attrs:{href:"#问题描述"}},[t._v("问题描述")])]),s("li",[s("a",{attrs:{href:"#解决方案"}},[t._v("解决方案")])])])]),s("li",[s("a",{attrs:{href:"#总结"}},[t._v("总结")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"缓存穿透"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),s("h3",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("在默认情况下，用户请求数据时，会先在缓存（Redis）中查找，若没找到即缓存未命中，再在数据库中进行查找，数量少可能问题不大，可是一旦大量的请求数据（例如秒杀场景）缓存都没有命中的话，就会全部转移到数据库上，造成数据库极大的压力，就有可能导致数据库崩溃。网络安全中也有人恶意使用这种手段进行攻击被称为洪水攻击。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226223430.png",alt:"image-20211226223430187"}})]),t._v(" "),s("p",[t._v("一个一定不存在缓存及查询不到的数据，由于缓存是不命中时被动写的，并且出于容错考虑，如果从存储层查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到存储层去查询，失去了缓存的意义。")]),t._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("布隆过滤器")])])]),t._v(" "),s("p",[t._v("布隆过滤器（Bloom Filter）是 1970 年由布隆提出的。它实际上是一个很长的二进制向量（位图）和一系列随机映射函数（哈希函数）。")]),t._v(" "),s("p",[t._v("布隆过滤器可以用于检索一个元素是否在一个集合中。它的优点是空间效率和查询时间都远远超过一般的算法，缺点是有一定的误识别率和删除困难。")]),t._v(" "),s("p",[t._v("对所有可能查询的参数以 Hash 的形式存储，以便快速确定是否存在这个值，在控制层先进行拦截校验，校验不通过直接打回，减轻了存储系统的压力。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226224012.png",alt:"image-20211226224010634"}})]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("缓存空值")])])]),t._v(" "),s("p",[t._v("如果一个查询返回的数据为空（不管是数据是否不存在），我们仍然把这个空结果（null）进行缓存，用于处理后续这个请求，设置空结果的过期时间会很短，最长不超过五分钟。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226224351.png",alt:"image-20211226224350918"}})]),t._v(" "),s("p",[t._v("这样做有一个缺陷：存储空对象也需要空间，大量的空对象会耗费一定的空间，存储效率并不高。解决这个缺陷的方式就是设置较短过期时间")]),t._v(" "),s("p",[t._v("即使对空值设置了过期时间，还是会存在缓存层和存储层的数据会有一段时间窗口的不一致，这对于需要保持一致性的业务会有影响。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("设置可访问的名单（白名单）")])])]),t._v(" "),s("p",[t._v("使用 bitmaps 类型定义一个可以访问的名单，名单 id 作为 bitmaps 的偏移量，每次访问和 bitmap 里面的 id 进行比较，如果访问 id 不在 bitmaps 里面，进行拦截，不允许访问。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("进行实时监控")])])]),t._v(" "),s("p",[t._v("当发现 Redis 的命中率开始急速降低，需要排查访问对象和访问的数据，和运维人员配合，可以设置黑名单限制服务。")]),t._v(" "),s("h2",{attrs:{id:"缓存击穿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[t._v("#")]),t._v(" 缓存击穿")]),t._v(" "),s("h3",{attrs:{id:"问题描述-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述-2"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("相较于缓存穿透，缓存击穿的目的性更强，一个存在的 key，在缓存过期的一刻，同时有大量的请求，这些请求都会击穿到 DB，造成瞬时 DB 请求量大、压力骤增。这就是缓存被击穿，只是针对其中某个 key 的缓存不可用而导致击穿，但是其他的 key 依然可以使用缓存响应。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226224515.png",alt:"image-20211226224514636"}})]),t._v(" "),s("p",[t._v("比如热搜排行上，一个热点新闻被同时大量访问就可能导致缓存击穿。")]),t._v(" "),s("h3",{attrs:{id:"解决方案-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("设置热点数据永不过期")])])]),t._v(" "),s("p",[t._v("在 Redis 高峰访问之前，把一些热门数据提前存入到 Redis 里面，加大这些热门数据 key 的时长，这样就不会出现热点数据过期的情况，但是当 Redis 内存空间满的时候也会清理部分数据，而且此种方案会占用空间，一旦热点数据多了起来，就会占用部分空间。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("加互斥锁(分布式锁)")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在缓存失效的时候（判断拿出来的值为空），不是立即去 load db")])]),t._v(" "),s("li",[s("p",[t._v("先使用缓存工具的某些带成功操作返回值的操作（比如 Redis 的 SETNX）去 set 一个 mutex key")])]),t._v(" "),s("li",[s("p",[t._v("当操作返回成功时，再进行 load db 的操作，并回设缓存，最后删除 mutex key")])]),t._v(" "),s("li",[s("p",[t._v("当操作返回失败，证明有线程在 load db，当前线程睡眠一段时间再重试整个 get 缓存的方法")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226224758.png",alt:"image-20211226224758012"}})]),t._v(" "),s("h2",{attrs:{id:"缓存雪崩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),s("h3",{attrs:{id:"问题描述-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述-3"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("大量的 key 设置了相同的过期时间，导致在缓存在同一时刻全部失效，此时若有大量并发请求过来，立即造成瞬时 DB 请求量大、压力骤增，引起雪崩。")]),t._v(" "),s("p",[t._v("缓存雪崩与缓存击穿的区别在于这里针对很多 key 缓存，前者则是某一个 key")]),t._v(" "),s("p",[t._v("产生雪崩的原因之一，比如在写本文的时候，马上就要到双十二零点，很快就会迎来一波抢购，这波商品时间比较集中的放入了缓存，假设缓存一个小时。那么到了凌晨一点钟的时候，这批商品的缓存就都过期了。而对这批商品的访问查询，都落到了数据库上，对于数据库而言，就会产生周期性的压力波峰。于是所有的请求都会达到存储层，存储层的调用量会暴增，造成存储层也会挂掉的情况。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211226225405.png",alt:"image-20211226225404269"}})]),t._v(" "),s("p",[t._v("其实集中过期，倒不是非常致命，比较致命的缓存雪崩，是缓存服务器某个节点宕机或断网。因为自然形成的缓存雪崩，一定是在某个时间段集中创建缓存，这个时候，数据库也是可以顶住压力的。无非就是对数据库产生周期性的压力而已。而缓存服务节点的宕机，对数据库服务器造成的压力是不可预知的，很有可能瞬间就把数据库压垮。")]),t._v(" "),s("h3",{attrs:{id:"解决方案-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-3"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("缓存失效时的雪崩效应对底层系统的冲击非常可怕！")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("构建多级缓存架构")])])]),t._v(" "),s("p",[t._v("Nginx 缓存 + Redis 缓存 + 其他缓存（ehcache 等）。或者多增设几台 Redis，这样一台挂掉之后其他的还可以继续工作，其实就是搭建的集群。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("使用锁或队列")])])]),t._v(" "),s("p",[t._v("用加锁或者队列的方式保证来保证不会有大量的线程对数据库一次性进行读写，从而避免失效时大量的并发请求落到底层存储系统上。不适用高并发情况。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("设置过期标志更新缓存")])])]),t._v(" "),s("p",[t._v("记录缓存数据是否过期（设置提前量），如果过期会触发通知另外的线程在后台去更新实际 key 的缓存。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("将缓存失效时间分散开")])])]),t._v(" "),s("p",[t._v("比如我们可以在原有的失效时间基础上增加一个随机值，比如 1-5 分钟随机，这样每一个缓存的过期时间的重复率就会降低，就很难引发集体失效的事件。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("限流降级")])])]),t._v(" "),s("p",[t._v("这个解决方案的思想是，在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个 key 只允许一个线程查询数据和写缓存，其他线程等待。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("数据预热")])])]),t._v(" "),s("p",[t._v("数据加热的含义就是在正式部署之前，我先把可能的数据先预先访问一遍，这样部分可能大量访问的数据就会加载到缓存中。在即将发生大并发访问前手动触发加载缓存不同的 key，设置不同的过期时间，让缓存失效的时间点尽量均匀。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("穿透：数据不存在，却一直请求，奔溃")]),t._v(" "),s("p",[t._v("击穿：对一个过期的 key 一直访问，奔溃")]),t._v(" "),s("p",[t._v("雪崩：短时间，对多个过期的 key 分别一直访问，奔溃")])])}),[],!1,null,null,null);s.default=_.exports}}]);