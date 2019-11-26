

## webpack与vue-router

1. 创建组件(vue文件)
2. 把组件导入到路由模块中

```
var router = new VueRouter({
  routes: [
    // account  goodslist
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register }
      ]
    },
    { path: '/goodslist', component: goodslist }
  ]
})
```

3. 在main.js中导入路由模块

```
// 导入 自定义路由模块
import router from './router.js'
```

4. 在vue对象中进行注册

```
var vm = new Vue({
  el: '#app',
  render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  router // 4. 将路由对象挂载到 vm 上
})
```

5. 最后调用组件

```
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>

    <router-view></router-view>
```



