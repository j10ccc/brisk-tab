# Brisk Tab

[![Release CRX](https://github.com/SummersDays/brisk-tab/actions/workflows/release-crx.yaml/badge.svg)](https://github.com/SummersDays/brisk-tab/actions/workflows/release-crx.yaml)

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

## Roadmap

### 书签

- [x] 动态请求服务端的标签信息
- [x] 手动从浏览器书签导出文件中解析，并导入
- [x] 插件版本直接从浏览器读取书签，解析并导入
- [x] 全局搜索，按照 url 和书签名字
- [ ] 替代新标签页，点击工具栏插件进行收藏
- [ ] 同步本地书签快照至远程服务，例如 S3
- [ ] 手动管理单个分组和单个书签
- [ ] 解析算法升级，支持解析出分组结构

### 标签管理

- [ ] 集中回收 / 释放关闭的标签（类似 OneTab）
- [ ] 固定指定的网站到头部

### 其他

- [x] 应用 & 浏览器插件双形态
- [ ] 暗黑模式
- [ ] Firefox 插件兼容
