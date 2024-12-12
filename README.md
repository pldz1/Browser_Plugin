# 🚀 PLDZ Browser Tool

**PLDZ Browser Tool** 是一个基于 **Chrome Manifest V3** 的浏览器扩展，提供多种功能如弹窗操作、背景任务管理和选项页面设置。

---

## 📋 项目简介

- **名称**：PLDZ Browser Tool
- **版本**：0.0.1
- **基于技术**：Vue 3、Webpack、Chrome Manifest V3
- **主要功能**：
  - 自定义弹窗页面。
  - 扩展选项页面配置。
  - 后台任务执行与浏览器事件监听。

---

## 🛠️ 安装步骤

### 1. 克隆项目到本地

```bash
git clone https://github.com/pldz1/Browser_Plugin.git
```

### 2. 安装依赖

使用 npm 安装项目依赖：

```bash
npm install
```

### 3. 构建项目

运行打包命令，生成生产版本：

```bash
npm run build
```

构建完成后，打包文件位于 **`dist/`** 目录下。

### 4. 加载到 Chrome 浏览器

1. 打开 Chrome 浏览器并进入 `chrome://extensions` 页面。
2. 启用 **开发者模式**。
3. 点击 **加载已解压的扩展程序**。
4. 选择项目中的 **`dist/`** 文件夹。

---

## 🖥️ 使用说明

### 功能概述

- **弹窗页面 (popup.html)**  
  点击浏览器工具栏上的扩展图标，打开弹窗页面，显示功能操作。

- **后台任务 (background.js)**  
  监听浏览器事件并执行后台任务，如右键菜单、标签页管理等。

- **选项页面 (options.html)**  
  提供扩展设置页面，可自定义功能参数。

### 快捷操作

1. 在扩展图标上 **左键单击**，显示弹窗页面。
2. 在网页上 **右键菜单**，使用扩展提供的快捷操作。

---

## ⚙️ 开发指南

### 本地开发

使用以下命令启动开发环境：

```bash
npm run dev
```

### 文件结构

```plaintext
pldz-browser-tool/
├── dist/                 # 打包输出目录
├── public/               # 静态资源
├── src/
│   ├── pages/
│   │   ├── popup/        # 弹窗页面
│   │   ├── background/   # 后台脚本
│   │   ├── options/      # 选项页面
│   │   └── content/      # 内容脚本
│   ├── assets/           # 资源文件
│   ├── manifest.json     # Chrome 扩展清单文件
│   └── vue.config.js     # Vue 和 Webpack 配置
├── package.json          # 项目依赖与脚本
└── README.md             # 项目文档
```

### 技术栈

- **Vue 3**：构建用户界面。
- **Webpack**：模块打包和构建工具。
- **Chrome API**：实现浏览器扩展功能。

---

## 🧩 常见问题

### 1. **如何启用无痕模式支持？**

- 在 `chrome://extensions` 页面，找到你的扩展，点击 **详细信息**。
- 开启 **允许在无痕模式下运行**。

### 2. **如何修改扩展图标？**

- 替换 `public` 目录下的图标文件（如 `icon.png`）。
- 更新 `manifest.json` 中的 `icons` 配置。

---

## 📜 许可证

本项目基于 **MIT License** 开源发布，详情请查看 [LICENSE](LICENSE) 文件。

---

## 🙌 感谢

感谢使用 **Pldz Browser Tool**！如有任何问题或建议，请提交 [Issues](https://github.com/yourusername/pldz-browser-tool/issues) 或贡献代码。🎉
