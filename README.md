# AI 代码建议系统

一个基于 Monaco Editor 的智能代码建议演示系统，支持多段代码同时建议、个性化接受/拒绝功能和批量处理操作。

## 🎯 演示效果

![AI 代码建议系统演示](https://github.com/GoodbyeMyself/AI-Code-Suggestions/blob/main/demo.png?raw=true)

*上图展示了系统的核心功能：智能代码建议生成、差异对比显示、单个建议控制按钮以及底部批量处理装饰器*

## 📁 文件结构

```
AI-Code-Suggestions/
├── AI Code Suggestions.html   # 主演示页面
├── initial-code.js            # 初始代码文件
├── suggestions-config.js      # AI建议配置文件
├── LICENSE                    # 开源许可证
└── README.md                  # 项目说明文档
```

## 🚀 功能特性

### ✨ 核心功能
- **外部代码管理** - 代码从独立文件加载，便于维护和更新
- **外部配置管理** - AI建议配置独立管理，便于扩展和定制
- **多段代码建议** - 支持在不同代码段同时生成多个建议
- **个性化控制** - 每个建议独立的接受/拒绝按钮
- **批量处理** - 支持一键接受或拒绝所有建议
- **实时预览** - 建议效果实时显示，支持撤销
- **智能差异显示** - 红色区域显示删除的代码，绿色高亮显示新增代码

### 🎯 建议类型
- **错误处理增强** - 参数验证和异常处理优化
- **代码现代化** - ES6+ 语法升级和模板字符串
- **功能增强** - 添加时间戳、详细日志和返回值优化
- **代码清理** - 删除冗余函数，推荐使用原生方法
- **数据处理** - 添加统计分析和报告生成功能

### 🎮 交互体验
- **平滑动画** - 建议出现和消失的过渡动画
- **悬停效果** - 按钮悬停时的视觉反馈
- **智能定位** - 自动滚动到建议位置
- **响应式布局** - 按钮宽度自适应编辑器大小

## 🛠️ 使用方法

### 1. 启动演示
```bash
# 方法1：使用 Python 启动本地服务器
python -m http.server 8000

# 方法2：使用 Node.js
npx http-server

# 方法3：使用其他HTTP服务器
# 然后访问 http://localhost:8000/AI%20Code%20Suggestions.html
```

### 2. 操作步骤
1. 打开 `AI Code Suggestions.html`
2. 等待代码和配置自动加载
3. 点击 "🤖 AI 建议" 生成所有建议
4. 使用单个建议的 ✓/✕ 按钮进行个别控制
5. 或使用底部批处理按钮进行批量操作

### 3. 控制按钮说明
- **🤖 AI 建议** - 生成所有配置的代码建议
- **🔄 重置代码** - 恢复到原始代码状态
- **✓ 接受此建议** - 接受单个建议（绿色按钮）
- **✕ 拒绝此建议** - 拒绝单个建议（灰色按钮）
- **✓ 接受全部建议** - 批量接受所有建议（底部绿色）
- **✕ 拒绝全部建议** - 批量拒绝所有建议（底部灰色）

## 📝 配置文件详解

### initial-code.js
包含完整的 JavaScript 示例代码，涵盖：
- **用户管理函数** - `validateUser()`, `createUser()`
- **计算相关函数** - `calculateTotal()`, `calculateDiscount()`
- **订单处理函数** - `processOrder()`, `sendNotification()`
- **数组处理函数** - `findItemById()`, `filterActiveItems()`
- **字符串处理函数** - `formatPrice()`, `capitalizeFirstLetter()`
- **示例数据** - 用户和商品数据

### suggestions-config.js
AI建议配置数组，每个建议对象包含：
```javascript
{
    range: {
        startLineNumber: 12,    // 起始行号
        startColumn: 1,         // 起始列号
        endLineNumber: 18,      // 结束行号
        endColumn: 2           // 结束列号
    },
    oldCode: "原始代码内容...",
    newCode: "改进后代码内容...",
    description: "建议描述信息",
    confidence: 0.9,           // 建议置信度 (0-1)
    tags: ["error-handling", "enhancement"]  // 标签分类
}
```

### 当前配置的建议
1. **优化 createUser 函数** - 增强错误处理和数据结构
2. **优化 processOrder 函数** - 增加验证和返回详细信息
3. **删除 filterActiveItems 函数** - 推荐使用原生 filter 方法
4. **添加数据处理函数** - 插入用户和商品统计分析功能

## 🔧 扩展和定制

### 添加新的AI建议
1. 编辑 `suggestions-config.js`
2. 在 `suggestionExamples` 数组中添加新配置对象
3. 确保 `range` 对象的行号与 `initial-code.js` 中的代码对应
4. 提供准确的 `oldCode` 和 `newCode` 内容

### 修改初始代码
1. 编辑 `initial-code.js` 添加或修改函数
2. **重要**：相应调整 `suggestions-config.js` 中的行号范围
3. 确保 `oldCode` 与实际代码完全匹配

### 自定义样式
在 `AI Code Suggestions.html` 中修改CSS样式：
```css
.suggestion-buttons { /* 建议按钮容器 */ }
.suggestion-btn { /* 按钮基础样式 */ }
.suggestion-btn.accept { /* 接受按钮样式 */ }
.suggestion-btn.reject { /* 拒绝按钮样式 */ }
.batch-decorator { /* 批处理装饰器容器 */ }
.batch-btn { /* 批处理按钮样式 */ }
```

## 🎨 视觉效果

### 代码差异显示
- **绿色高亮** - 新增的代码行，带有绿色边框
- **红色半透明** - 被删除的代码，显示在原位置上方
- **平滑过渡** - 建议出现时的渐入动画

### 交互反馈
- **按钮悬停** - 鼠标悬停时按钮背景色变化
- **批处理装饰器** - 底部居中显示，半透明背景
- **响应式宽度** - 按钮宽度随编辑器大小自动调整

## 🔒 安全注意事项

当前版本使用 `eval()` 动态执行配置文件，在生产环境中建议：
1. **使用 JSON 格式** - 将配置改为纯 JSON 数据
2. **实现安全加载** - 使用 `JSON.parse()` 替代 `eval()`
3. **添加数据验证** - 验证配置文件的结构和内容
4. **内容安全策略** - 设置 CSP 头部限制脚本执行

## 🚧 技术栈

- **Monaco Editor** - 微软开源的代码编辑器
- **Vanilla JavaScript** - 原生 JavaScript，无框架依赖
- **CSS3** - 现代 CSS 特性和动画
- **HTML5** - 语义化 HTML 结构

## 💡 最佳实践

### 开发建议
1. **逐步测试** - 先添加一个建议，测试功能正常后再添加更多
2. **行号对应** - 修改代码时务必同步更新配置中的行号
3. **代码匹配** - 确保 `oldCode` 与实际代码完全一致（包括空格和换行）
4. **置信度设置** - 根据建议质量合理设置 confidence 值

### 使用技巧
1. **批量操作** - 生成多个建议后可以先逐个预览，再批量处理
2. **错误排查** - 打开浏览器开发者工具查看控制台输出
3. **配置备份** - 修改配置前建议备份原文件
4. **渐进式应用** - 对于复杂项目，建议分批次应用建议

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目：
- 报告 Bug 或提出功能建议
- 优化代码结构和性能
- 完善文档和示例
- 添加新的建议类型和模板