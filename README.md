# AI 代码建议系统

一个基于 Monaco Editor 的智能代码建议演示系统，支持多段代码同时建议和个性化接受/拒绝功能。

## 📁 文件结构

```
AI-Code-Suggestions/
├── suggestion-peration.html    # 主演示页面
├── initial-code.js             # 初始代码文件
├── suggestions-config.js       # AI建议配置文件
└── README.md                   # 项目说明文档
```

## 🚀 功能特性

### ✨ 核心功能
- **外部代码管理** - 代码从独立文件加载，便于维护和更新
- **外部配置管理** - AI建议配置独立管理，便于扩展和定制
- **多段代码建议** - 支持在不同代码段同时生成多个建议
- **个性化控制** - 每个建议独立的接受/拒绝按钮
- **实时预览** - 建议效果实时显示，支持撤销

### 🎯 建议类型
- **代码现代化** - ES6+ 语法升级
- **性能优化** - 使用高效的数组方法
- **错误处理** - 参数验证和异常处理
- **功能增强** - 添加时间戳、日志等
- **代码简化** - 减少冗余代码

## 🛠️ 使用方法

### 1. 启动演示
```bash
# 启动本地服务器（推荐）
python -m http.server 8000
# 或使用其他HTTP服务器
```

### 2. 操作步骤
1. 打开 `suggestion-peration.html`
2. 等待代码和配置自动加载
3. 点击 "🤖 生成 AI 建议" 生成建议
4. 使用建议右下角的 ✓/✕ 按钮进行个别控制

### 3. 按钮说明
- **🤖 生成 AI 建议** - 生成新的代码建议
- **🗑️ 接受建议** - 接受所有当前建议
- **🔄 拒绝建议** - 恢复到原始代码
- **✓** - 接受单个建议
- **✕** - 拒绝单个建议

## 📝 配置文件说明

### initial-code.js
包含各种类型的示例代码：
- 用户管理函数
- 计算相关函数  
- 数组处理函数
- 字符串处理函数

### suggestions-config.js
AI建议配置，每个建议包含：
```javascript
{
    range: { startLineNumber: 2, startColumn: 1, endLineNumber: 8, endColumn: 1 },
    oldCode: "原始代码...",
    newCode: "改进后代码...",
    description: "建议描述",
    confidence: 0.85,
    tags: ["标签1", "标签2"]
}
```

## 🔧 扩展和定制

### 添加新的AI建议
1. 编辑 `suggestions-config.js`
2. 在 `suggestionExamples` 数组中添加新配置
3. 指定正确的行范围和代码内容

### 修改初始代码
1. 编辑 `initial-code.js`
2. 添加或修改函数
3. 相应调整 `suggestions-config.js` 中的行号

### 自定义样式
在 `suggestion-peration.html` 中修改CSS样式：
- `.suggestion-buttons` - 按钮容器样式
- `.suggestion-btn` - 按钮基础样式
- `.suggestion-btn.accept` - 接受按钮样式
- `.suggestion-btn.reject` - 拒绝按钮样式

## 🎨 视觉效果

- 绿色高亮表示新增代码
- 红色半透明显示被删除的代码
- 按钮有悬停缩放效果
- 平滑的动画过渡

## 🔒 安全注意事项

当前版本使用 `eval()` 加载配置文件，在生产环境中建议：
1. 使用 JSON 格式的配置
2. 实现更安全的配置加载机制
3. 添加配置验证功能

## 🚧 技术栈

- **Monaco Editor** - 代码编辑器
- **Vanilla JavaScript** - 主要逻辑
- **CSS3** - 样式和动画
- **HTML5** - 页面结构

## 💡 最佳实践

1. **逐个测试** - 先生成一个建议，测试接受/拒绝功能
2. **批量操作** - 生成多个建议后进行批量测试
3. **配置管理** - 修改配置文件时注意行号对应关系
4. **错误处理** - 观察控制台输出，及时发现加载问题