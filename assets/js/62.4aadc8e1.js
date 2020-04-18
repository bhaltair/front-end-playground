(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{316:function(t,a,v){"use strict";v.r(a);var r=v(16),_=Object(r.a)({},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("第一章介绍 Box2D 的相关知识，包括物理引擎、图像引擎，以及 Box2D 的一些相关概念。")]),t._v(" "),v("h2",{attrs:{id:"有关物理引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有关物理引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" 有关物理引擎")]),t._v(" "),v("h3",{attrs:{id:"物理效果"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#物理效果","aria-hidden":"true"}},[t._v("#")]),t._v(" 物理效果")]),t._v(" "),v("p",[t._v("所谓物理效果，就是在游戏中模仿现实中真实物理世界的运动方式。")]),t._v(" "),v("p",[t._v("在游戏中，玩家甚至能感受到箱子、石头、布料的触感是怎样的。游戏之所以能实现如此多的动态效果，都要归功于物理运算。")]),t._v(" "),v("p",[t._v("但是，在游戏中实现物理运算效果绝非易事。物理运算效果是一种对计算性能要求极高的环境，以一整套独特的物理学算法为基础，需要大量同步运算的能力。")]),t._v(" "),v("p",[t._v("游戏开发者通常使用功能强大的物理引擎来实现想要达到的物理效果。")]),t._v(" "),v("h3",{attrs:{id:"物理引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#物理引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" 物理引擎")]),t._v(" "),v("p",[t._v("物理引擎是一个由计算机模拟牛顿力学的模型。它通过定义刚体（刚性物体）的参数，如质量、速度、摩擦力、动量、扭矩和阻力等，来赋予刚体真实的物理属性，以此计算它们的运动、旋转、碰撞等反应，测试不同情况下的刚体运动效果。")]),t._v(" "),v("p",[t._v("物理引擎主要用在科学模拟和电子游戏中。")]),t._v(" "),v("p",[t._v("相比之前游戏中的“物理效果”，在游戏中加入了物理引擎之后，游戏不再单纯只是按照预定脚本执行，而是按照预先设定的物理参数遵照宏观世界里的物理规律来运行，换句话说，只要显卡和处理器足够强大，加入了物理引擎的游戏可以模拟真实世界中各种物体的运动，使得游戏效果不再刻板单一，一成不变。")]),t._v(" "),v("p",[t._v("通过利用物理引擎，模拟并实现物体之间的相互影响效果是非常简单的，但是，所谓物理引擎并不是指实实在在的物理效果，它只是提供一个平台，游戏开发者可以通过几行简单的代码实现某个特定的效果，非常方便。")]),t._v(" "),v("h3",{attrs:{id:"百度百科-物理引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#百度百科-物理引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"http://baike.baidu.com/view/721450.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度百科-物理引擎"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("物理引擎通过为刚性物体赋予真实的物理属性的方式来计算运动、旋转和碰撞反映。为每个游戏使用物理引擎并不是完全必要的—简单的“牛顿”物理（比如加速和减速）也可以在一定程度上通过编程或编写脚本来实现。然而，当游戏需要比较复杂的物体碰撞、滚动、滑动或者弹跳的时候（比如赛车类游戏或者保龄球游戏），通过编程的方法就比较困难了。")]),t._v(" "),v("p",[t._v("物理引擎使用对象属性（动量、扭矩或者弹性）来模拟刚体行为，这不仅可以得到更加真实的结果，对于开发人员来说也比编写行为脚本要更加容易掌握。好的物理引擎允许有复杂的机械装置，像球形关节、轮子、气缸或者铰链。有些也支持非刚性体的物理属性，比如流体。物理引擎可以从另外的厂商购买，而一些游戏开发系统具备完整的物理引擎。但是要注意，虽然有的系统在其特性列表中说他们有物理引擎，但其实是一些简单的加速和碰撞检测属性而已。")]),t._v(" "),v("h2",{attrs:{id:"有关图像引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有关图像引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" 有关图像引擎")]),t._v(" "),v("h3",{attrs:{id:"二维图像引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二维图像引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" 二维图像引擎")]),t._v(" "),v("p",[t._v("二维图像引擎是主要使用在二维游戏中，绘制图像，并向外部表达图像的系统。在三维游戏中，亦有使用二维引擎来绘制游戏界面以及一些二维元素。")]),t._v(" "),v("p",[t._v("由于二维游戏的图像都是平面结构，所以图像引擎在显示图像之前也往往只对图像本身进行处理，而不像三维游戏那样还要处理图像周围的环境。这种处理一般是将图像伸缩，变形，色彩处理，图像合成等。")]),t._v(" "),v("p",[t._v("二维图像引擎由角色图像、场景地图、动态、光影和特效组成，功能强大。")]),t._v(" "),v("h3",{attrs:{id:"百度百科-二维图像引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#百度百科-二维图像引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" "),v("a",{attrs:{href:"http://baike.baidu.com/view/4432674.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度百科-二维图像引擎"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("一般来说，一套引擎可以使用在多个不同的游戏中，即“可重用性”，由于引擎研发的投资较大，一个商业公司往往开发一款引擎，反复用于多款游戏，从而获得较高利润。如大宇公司的《轩辕剑系列》其正传和外传就是采用同一款引擎开发。也有本身不制作游戏，专门开发引擎并出售的公司。这样的引擎也称作“商业引擎”。出于游戏开发周期和开发成本的考虑，一些商业游戏公司更愿意购买“商业引擎”。")]),t._v(" "),v("p",[t._v("游戏引擎的程序基础是建立在使用图形 API 函数基础之上的，而不是直接控制显卡，主要适用于 2D 图像的 API 是 DirectX，而纯 2D 图形 API 往往不能提供更丰富的图像操作支持，一些引擎也使用用于 3D 图像的 API 如 OpenGL，Direct3D 等来模拟 2D。")]),t._v(" "),v("h3",{attrs:{id:"三维图像引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三维图像引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" 三维图像引擎")]),t._v(" "),v("p",[t._v("目前，计算机图形学已进入三维时代，三维图形在人们周围无所不在。编写三维图形应用一般使用 OpenGL 或 DirectX，但是它们在系统开发中仍存在一些缺点：")]),t._v(" "),v("ol",[v("li",[t._v("它们都是非面向对象的，设计场景和操作场景中的对象比较困难。")]),t._v(" "),v("li",[t._v("它们主要使用基层图元，在显示比较复杂的场景时，编写程序相对困难。")]),t._v(" "),v("li",[t._v("没有与建模工具很好的结合。")]),t._v(" "),v("li",[t._v("缺乏对一些十分重要的关键技术如 LOD(Level of Detail)、动态裁剪等的支持。")])]),t._v(" "),v("p",[t._v("基于以上情况，游戏开发者需要一个封装了硬件操作和图形算法、简单易用、功能丰富的三维图形开发环境，这个环境即三维图像引擎。")]),t._v(" "),v("p",[t._v("相比二维图像引擎，三维引擎需要解决场景构造、对象处理、场景渲染、事件处理、碰撞检测等问题。")]),t._v(" "),v("h2",{attrs:{id:"box2d"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box2d","aria-hidden":"true"}},[t._v("#")]),t._v(" Box2D")]),t._v(" "),v("h3",{attrs:{id:"box2d-介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box2d-介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" Box2D 介绍")]),t._v(" "),v("p",[t._v("Box2D 是一个用于游戏的 2D 刚体仿真库，它是一个非常出名的物理引擎。")]),t._v(" "),v("p",[t._v("程序员可以在他们的游戏里使用它，它可以使物体的运动更加可信，让世界看起来更具交互性。\n从游戏的视角来看，物理引擎就是一个程序性动画(procedural animation)的系统，而不是由动画师去移动你的物体。你可以让牛顿来做导演。")]),t._v(" "),v("p",[t._v("它通过用户设定的参数如重力，密度，摩擦，弹性等参数计算碰撞，角度，力和动力等，使物体运动完全遵循牛顿定律，使游戏中物体的运动更加真实，增强游戏世界中物体动作的真实感，从而提高游戏质量，让游戏场景看起来更具交互性。这些计算需要大量的物理和数学知识。")]),t._v(" "),v("h3",{attrs:{id:"box2d-版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box2d-版本","aria-hidden":"true"}},[t._v("#")]),t._v(" Box2D 版本")]),t._v(" "),v("p",[t._v("Box2D 提供 C++、Java、flash 等版本。")]),t._v(" "),v("h3",{attrs:{id:"box2d-基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#box2d-基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" Box2D 基本概念")]),t._v(" "),v("p",[t._v("Box2D 中有一些基本的对象，这里我们先做一个简要的定义，在随后的文档里会有更详细的描述。")]),t._v(" "),v("ul",[v("li",[t._v("刚体(rigid body)")])]),t._v(" "),v("p",[t._v("一块十分坚硬的物质，它上面的任何两点之间的距离都是完全不变的。它们就像钻石那样坚硬。在后\n面的讨论中，我们用物体(body)来代替刚体。")]),t._v(" "),v("ul",[v("li",[t._v("形状(shape)")])]),t._v(" "),v("p",[t._v("一块严格依附于物体(body)的 2D 碰撞几何结构(collision geometry)。形状具有摩擦(friction)和恢\n复(restitution)的材料性质。")]),t._v(" "),v("ul",[v("li",[t._v("约束(constraint)")])]),t._v(" "),v("p",[t._v("一个约束(constraint)就是消除物体自由度的物理连接。在 2D 中，一个物体有 3 个自由度。如果我\n们把一个物体钉在墙上(像摆锤那样)，那我们就把它约束到了墙上。这样，此物体就只能绕着这个钉子旋\n转，所以这个约束消除了它 2 个自由度。")]),t._v(" "),v("ul",[v("li",[t._v("接触约束(contact constraint)")])]),t._v(" "),v("p",[t._v("一个防止刚体穿透，以及用于模拟摩擦(friction)和恢复(restitution)的特殊约束。你永远都不必创建\n一个接触约束，它们会自动被 Box2D 创建。")]),t._v(" "),v("ul",[v("li",[t._v("关节(joint)")])]),t._v(" "),v("p",[t._v("它是一种用于把两个或多个物体固定到一起的约束。Box2D 支持的关节类型有：旋转，棱柱，距离等\n等。关节可以支持限制(limits)和马达(motors)。")]),t._v(" "),v("ul",[v("li",[t._v("关节限制(joint limit)")])]),t._v(" "),v("p",[t._v("一个关节限制(joint limit)限定了一个关节的运动范围。例如人类的胳膊肘只能做某一范围角度的运\n动。")]),t._v(" "),v("ul",[v("li",[t._v("关节马达(joint motor)")])]),t._v(" "),v("p",[t._v("一个关节马达能依照关节的自由度来驱动所连接的物体。例如，你可以使用一个马达来驱动一个肘的\n旋转。")]),t._v(" "),v("ul",[v("li",[t._v("世界(world)")])]),t._v(" "),v("p",[t._v("一个物理世界就是物体，形状和约束相互作用的集合。Box2D 支持创建多个世界，但这通常是不必要\n的。")]),t._v(" "),v("h2",{attrs:{id:"helloworld"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#helloworld","aria-hidden":"true"}},[t._v("#")]),t._v(" HelloWorld")]),t._v(" "),v("h3",{attrs:{id:"步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),v("ol",[v("li",[t._v("建立一个世界，这个世界基于一个 b2AABB 框，并设立了一个 g 值和一个是否允许休眠的 bool 型变量。")]),t._v(" "),v("li",[t._v("建立一个静态刚体地表，这里讲述了定义 Box2D 物理引擎中最为重要的一个东西——刚体的详细过程：")])]),t._v(" "),v("ul",[v("li",[t._v("首先是定义一个形状（可以是复合形状，这个在第二部分讲述）")]),t._v(" "),v("li",[t._v("然后把形状通过 AddShape 添加进刚体定义，创建这个刚体。")])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("重复创建刚体这个过程，直至你没有需求了。")]),t._v(" "),v("li",[t._v("在你的循环中加入世界的更新函数。")])]),t._v(" "),v("h3",{attrs:{id:"概念定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念定义")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("世界(b2World)：\n世界就是一个环境，所有物理运算都在这个里面进行。")])]),t._v(" "),v("li",[v("p",[t._v("形状定义(b2ShapeDef)：\n形状定义是什么？说简单点形状定义就是定义你这个对象的样子，它用来做什么？就是用来确定你的碰撞。")])]),t._v(" "),v("li",[v("p",[t._v("刚体定义(b2BodyDef)：\n刚体定义就是设定刚体的初始具体，在目前来说，最大的功能就是把你定义好的形状加到你想到的刚体上。")])]),t._v(" "),v("li",[v("p",[t._v("刚体(b2Body)：\n刚体就是物理引擎里面的东西（对象），它可以受力的作用进行当前位置的变化旋转等。你要在世界中使用的所有物体目前来说都是刚体。")])])])])},[],!1,null,null,null);a.default=_.exports}}]);