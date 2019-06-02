## Vue与MVVM

## 1.MVVM

MVVM 由 Model,View,ViewModel 三部分构成，Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑； 

在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的，因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。 

因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。 

## 2. Vue

vue是一个兴起的前端js库，是一个精简的MVVM。在开发的时候很方便，业务逻辑和页面布局分得很清楚，在网上很多与jQuery进行对比，对于jQuery没有用过，不太懂，但是使用vue使用MVVM模型，很快就能够入手。