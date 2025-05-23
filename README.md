# [WIP] Brisk Tab

> [!WARNING]
> WIP FOR NEW BEGINNING.

超级迷你的新标签页，整合了一些有用的功能

## Feature

1. 功能不同于浏览器收藏夹，旨在打开新标签页快速找到网页，而不是在浏览器那窄窄的收藏夹区域小心翼翼地移动鼠标选择网页
2. 批量回收 / 释放标签页，实现不同设备之间的同步
3. 实现更多的标签管理逻辑，满足需求

## Why do this?

- 老牌标签管理插件 OneTab 有重复打开 Bug，并且保存的标签无法跨设备同步
- 新标签页插件 Infinity New Tab (Pro) 占用内存太大，页面内容占用率低
- 两个插件的功能都不可或缺，需要一个新的插件整合功能，解决痛点
- ~~目前 `dev` 阶段仅实现了 web 静态部署，所以日常那两个插件还是得继续用~~

## TODO

- [x] 动态请求服务端的标签信息
- [ ] 手动添加、修改和删除网页
- [x] 显示屏分辨率适配
- [ ] 暗黑模式
- [ ] 滴答清单 API 接入（只实现今日代办展示）
- [ ] 固定指定的网站到头部
- [ ] 插件化
  - [ ] 集中回收 / 释放关闭的标签（类似 OneTab）
  - [ ] 浏览器收藏夹接入
