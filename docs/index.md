---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: motainzhang
  text:
  tagline: 不积跬步无以至千里，不积小流无以成江海
  image:
    src: https://mp-0971f295-ba06-4d1c-8c5f-e03738f37c87.cdn.bspapp.com/cloudstorage/19672766-4860-4ab2-ba29-91882f45eb49.jpeg
    alt: motainzhang
  actions:
    - text: 前端日记
      link: /fe/es6/
    - text: 工作日常
      link: /pit/npm/npm
      theme: alt
features:
  - icon: 📒
    title: 前端日记
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /fe/javascript/types
    linkText: 前端常用知识
  - icon: 📚
    title: 技巧笔记
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /workflow/utils/library
    linkText: 常用工具库
  - icon: 📝
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /efficiency/online-tools
    linkText: 提效工具
  - icon: 📖
    title: 工作日常
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /pit/npm/npm
    linkText: 工作日常
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src {
  border-radius: 50%;
}
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
