// AI建议配置文件 - 固定建议
// 每个建议包含：range（行范围）、oldCode（原代码）、newCode（新代码）、description（描述）等信息

const suggestionExamples = [
    // 建议1：优化 createUser 函数
    {
        range: {
            startLineNumber: 12,
            startColumn: 1,
            endLineNumber: 18,
            endColumn: 2,
        },
        oldCode: `function createUser(userData) {
    if (validateUser(userData)) {
        console.log("Creating user: " + userData.name);
        return { id: Date.now(), ...userData };
    }
    return null;
}`,
        newCode: `// ✨ AI建议：增强用户创建逻辑
function createUser(userData) {
    if (!validateUser(userData)) {
        throw new Error('Invalid user data provided');
    }
    
    const user = {
        id: Date.now(),
        createdAt: new Date().toISOString(),
        ...userData
    };
    
    console.log(\`Creating user: \${userData.name} (\${userData.email})\`);
    return user;
}`,
        description: "优化 createUser 函数：增强错误处理和数据结构",
        confidence: 0.9,
        tags: ["error-handling", "logging", "enhancement"],
    },
    // 建议2：优化 processOrder 函数
    {
        range: {
            startLineNumber: 34,
            startColumn: 1,
            endLineNumber: 38,
            endColumn: 2,
        },
        oldCode: `function processOrder(order) {
    const total = calculateTotal(order.items);
    console.log("Order total: " + total);
    return total;
}`,
        newCode: `// ✨ AI建议：增强订单处理逻辑
function processOrder(order) {
    if (!order || !Array.isArray(order.items)) {
        throw new Error('Invalid order: order must have items array');
    }
    
    const total = calculateTotal(order.items);
    const orderInfo = {
        orderId: order.id || Date.now(),
        total: total,
        itemCount: order.items.length,
        processedAt: new Date().toISOString()
    };
    
    console.log(\`Processing order #\${orderInfo.orderId}: \${orderInfo.itemCount} items, total: $\${total.toFixed(2)}\`);
    return orderInfo;
}`,
        description: "优化 processOrder 函数：增加验证和返回详细信息",
        confidence: 0.88,
        tags: ["validation", "enhancement", "logging"],
    },
    // 建议3：删除 filterActiveItems 函数
    {
        range: {
            startLineNumber: 54,
            startColumn: 1,
            endLineNumber: 62,
            endColumn: 2,
        },
        oldCode: `function filterActiveItems(items) {
    var result = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].active === true) {
            result.push(items[i]);
        }
    }
    return result;
}`,
        newCode: ``,
        description: "删除 filterActiveItems 函数：推荐使用原生 filter 方法",
        confidence: 0.85,
        tags: ["cleanup", "modern-js", "simplification"],
    },
];

// 导出配置（支持ES6模块和CommonJS）
if (typeof module !== "undefined" && module.exports) {
    module.exports = { suggestionExamples };
} else if (typeof window !== "undefined") {
    window.suggestionExamples = suggestionExamples;
}
