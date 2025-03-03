---
outline: 2
---

# PC 踩坑记录

## `transform` 导致字体不清晰

`transform` 在**渲染非整数的 `px` 时**就会出现字体模糊

#### 解决方法

```css
/* 方案一 */
目标元素 {
  -webkit-font-smoothing: antialiased;
}

/* 方案二 */
目标元素 {
  transform: perspective(1px);
}
```

[详细说明 CSS-TRACKS](https://css-tricks.com/forums/topic/transforms-cause-font-smoothing-weirdness-in-webkit/)

## 删除 `PWA` 服务后，浏览器无法更新到最新页面

本站之前使用了 `PWA`，在切换到 `vitepress` 后移除了 `PWA` 服务，在部署后浏览器仍然访问的是 `vuepress` 版本的

#### 解决方法

```js
/* 注销 PWA 服务 */
if (window.navigator && navigator.serviceWorker) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister()
    }
  })
}

/* 删除浏览器中的缓存 */
if ('caches' in window) {
  caches.keys().then(function (keyList) {
    return Promise.all(
      keyList.map(function (key) {
        return caches.delete(key)
      })
    )
  })
}
```

## angularJS拦截页面返回弹窗问题
# 业务需求

需要在一些表单填写页，并且只是一个单页面，在填写过程中点击浏览器返回按钮，或者是微信浏览器等场景，弹窗继续填写，确认退出的dialog

# 分析

1.首先理解到只是一个单页面的话，我们的浏览器返回后退按钮是置灰的不可点击的 我们是需要往浏览器去添加一个历史记录 来显示浏览的返回按钮2.添加空白页面首先想到的是用浏览器的pushState方法去push一个新的空记录，再window.addListenerpopState去监听浏览器返回操作3.事与愿违我们是有一个列表页，有进详情的操作，进入此页面就加一条空的历史记录，导致返回好几次才能触发到弹窗

# 最终解决方案

添加一个临时页面，在controller gopage一次产生一条历史记录

```
; (function (app) {
  app.controller('healthCtrl', [
    '$scope',
    function (
      $scope
    ) {
      wx.hideOptionMenu();
      $scope.setTitle('COVID Case Management System');
      $scope.goPage('app/page/ems-health/ems-health-form');
    },
  ])
})(angular.module(appName));
```

实际页面监听，需要注意的是手机一进页面就会触发locationChangeStart，需要注意的是ios手机一进页面就会触发locationChangeStart，所以首次进入页面需要先延迟不让dialog弹出来

```
// 避免新进页面时触发监听
  $scope.pageState = false;
  $timeout(function () {
	$scope.pageState = true;
  }, 1000);
  // 监听浏览器后退事件
  $scope.$on("$locationChangeStart", function (ev) {
	console.log('locationChangeStart')
	if ($scope.pageState) {
	  ev.preventDefault();
	  // 以下为监听到返回的操作
	  $scope.showExitDialog();
	}
  });
},
```
