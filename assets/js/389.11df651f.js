(window.webpackJsonp=window.webpackJsonp||[]).push([[389],{737:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#symbols-介绍"}},[s._v("Symbols 介绍")])]),t("li",[t("a",{attrs:{href:"#unique-symbol"}},[s._v("unique symbol")])]),t("li",[t("a",{attrs:{href:"#知名的-symbols"}},[s._v("知名的 Symbols")]),t("ul",[t("li",[t("a",{attrs:{href:"#symbol-hasinstance"}},[s._v("Symbol.hasInstance")])]),t("li",[t("a",{attrs:{href:"#symbol-isconcatspreadable"}},[s._v("Symbol.isConcatSpreadable")])]),t("li",[t("a",{attrs:{href:"#symbol-iterator"}},[s._v("Symbol.iterator")])]),t("li",[t("a",{attrs:{href:"#symbol-match"}},[s._v("Symbol.match")])]),t("li",[t("a",{attrs:{href:"#symbol-replace"}},[s._v("Symbol.replace")])]),t("li",[t("a",{attrs:{href:"#symbol-search"}},[s._v("Symbol.search")])]),t("li",[t("a",{attrs:{href:"#symbol-species"}},[s._v("Symbol.species")])]),t("li",[t("a",{attrs:{href:"#symbol-split"}},[s._v("Symbol.split")])]),t("li",[t("a",{attrs:{href:"#symbol-toprimitive"}},[s._v("Symbol.toPrimitive")])]),t("li",[t("a",{attrs:{href:"#symbol-tostringtag"}},[s._v("Symbol.toStringTag")])]),t("li",[t("a",{attrs:{href:"#symbol-unscopables"}},[s._v("Symbol.unscopables")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"symbols-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbols-介绍"}},[s._v("#")]),s._v(" Symbols 介绍")]),s._v(" "),t("p",[s._v("从 ECMAScript 2015 开始，symbol 是一种原始的数据类型，就像 number 和 string 一样。")]),s._v(" "),t("p",[s._v("symbol 值是通过调用 Symbol 构造函数创建的。")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sym1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sym2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可选的字符串 key")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Symbols 是不可改变的，而且是独一无二的。")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sym2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sym3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsym2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" sym3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false, symbols 是唯一的")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("就像字符串一样，Symbols 可以被用作对象属性的键。")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sym "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sym"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sym"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "value"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("Symbols 也可以与计算属性声明结合起来，以声明对象属性和类成员。")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" getClassNameSymbol "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("getClassNameSymbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" className "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("getClassNameSymbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "C"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"unique-symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unique-symbol"}},[s._v("#")]),s._v(" unique symbol")]),s._v(" "),t("p",[s._v("为了能够将 symbols 作为唯一的字面符号，我们提供了一个特殊的类型 "),t("code",[s._v("unique symbol")]),s._v("。"),t("code",[s._v("unique symbol")]),s._v(" 是 symbol 的一个子类型，只在调用 "),t("code",[s._v("Symbol()")]),s._v(" 或 "),t("code",[s._v("Symbol.for()")]),s._v(" 或明确的类型注释时产生。这种类型只允许在常量声明和只读静态属性中使用，为了引用一个特定的唯一符号，你必须使用 typeof 操作符。每个对唯一符号的引用都意味着一个完全独特的身份，它与一个给定的声明相联系。")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sym1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" unique "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sym2 只能是一个常数参考。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sym2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" unique "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("symbol")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Ⓧ 类型为 "唯一符号 "的变量必须是 "const"类型。')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行正确--指的是一个独特的 symbol，但其身份与 'sym1' 相联系。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sym3"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" sym1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sym1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 也是正确的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("readonly")]),s._v(" StaticSymbol"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" unique "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("symbol")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("因为每个 unique symbol 都有一个完全独立的身份，没有两个 unique symbol 类型是可以相互分配或比较的。")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sym2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sym3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个条件将总是返回 'false'，因为 'typeof sym2' 和 'typeof sym3' 的类型没有重合。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sym2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" sym3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"知名的-symbols"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知名的-symbols"}},[s._v("#")]),s._v(" 知名的 Symbols")]),s._v(" "),t("p",[s._v("除了用户定义的 symbols 外，还有著名的内置 symbols。内置符号被用来表示内部语言行为。")]),s._v(" "),t("p",[s._v("下面是一个著名的 symbols 列表：")]),s._v(" "),t("h3",{attrs:{id:"symbol-hasinstance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-hasinstance"}},[s._v("#")]),s._v(" Symbol.hasInstance")]),s._v(" "),t("p",[s._v("一个确定构造函数对象，是否识别一个对象为构造函数的实例之一的方法。由 instanceof 操作符的语义调用。")]),s._v(" "),t("h3",{attrs:{id:"symbol-isconcatspreadable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-isconcatspreadable"}},[s._v("#")]),s._v(" Symbol.isConcatSpreadable")]),s._v(" "),t("p",[s._v("一个布尔值，表示一个对象应该被 "),t("code",[s._v("Array.prototype.concat")]),s._v(" 平铺到其数组元素。")]),s._v(" "),t("h3",{attrs:{id:"symbol-iterator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-iterator"}},[s._v("#")]),s._v(" Symbol.iterator")]),s._v(" "),t("p",[s._v("返回一个对象的默认迭代器的方法。被 "),t("code",[s._v("for-of")]),s._v(" 语句的语义所调用。")]),s._v(" "),t("h3",{attrs:{id:"symbol-match"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-match"}},[s._v("#")]),s._v(" Symbol.match")]),s._v(" "),t("p",[s._v("一个正则表达式方法，与字符串的正则表达式相匹配。由 "),t("code",[s._v("String.prototype.match")]),s._v(" 方法调用。")]),s._v(" "),t("h3",{attrs:{id:"symbol-replace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-replace"}},[s._v("#")]),s._v(" Symbol.replace")]),s._v(" "),t("p",[s._v("一个正则表达式方法，用于替换一个字符串中匹配的子串。由 "),t("code",[s._v("String.prototype.replace")]),s._v(" 方法调用。")]),s._v(" "),t("h3",{attrs:{id:"symbol-search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-search"}},[s._v("#")]),s._v(" Symbol.search")]),s._v(" "),t("p",[s._v("一个正则表达式方法，返回字符串中符合正则表达式的索引。由 "),t("code",[s._v("String.prototype.search")]),s._v(" 方法调用。")]),s._v(" "),t("h3",{attrs:{id:"symbol-species"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-species"}},[s._v("#")]),s._v(" Symbol.species")]),s._v(" "),t("p",[s._v("一个函数值的属性，是用于创建派生对象的构造函数。")]),s._v(" "),t("h3",{attrs:{id:"symbol-split"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-split"}},[s._v("#")]),s._v(" Symbol.split")]),s._v(" "),t("p",[s._v("一个正则表达式方法，在符合正则表达式的索引处分割一个字符串。由 "),t("code",[s._v("String.prototype.split")]),s._v(" 方法调用。")]),s._v(" "),t("h3",{attrs:{id:"symbol-toprimitive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-toprimitive"}},[s._v("#")]),s._v(" Symbol.toPrimitive")]),s._v(" "),t("p",[s._v("将一个对象转换为一个相应的基元值的方法。由 ToPrimitive 抽象操作调用。")]),s._v(" "),t("h3",{attrs:{id:"symbol-tostringtag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-tostringtag"}},[s._v("#")]),s._v(" Symbol.toStringTag")]),s._v(" "),t("p",[s._v("一个字符串值，用于创建一个对象的默认字符串描述。由内置方法 "),t("code",[s._v("Object.prototype.toString")]),s._v(" 调用。")]),s._v(" "),t("h3",{attrs:{id:"symbol-unscopables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-unscopables"}},[s._v("#")]),s._v(" Symbol.unscopables")]),s._v(" "),t("p",[s._v("一个对象，其自身的属性名是被排除在相关对象的 'with' 环境绑定之外的属性名。")])])}),[],!1,null,null,null);t.default=e.exports}}]);