// AI建议配置文件
// 每个建议包含：range（行范围）、oldCode（原代码）、newCode（新代码）、description（描述）等信息

const suggestionExamples = [
    {
        range: { startLineNumber: 2, startColumn: 1, endLineNumber: 8, endColumn: 1 },
        oldCode: `function validateUser(user) {
    if (!user.name) {
        return false;
    }
    if (!user.email) {
        return false;
    }
    return true;
}`,
        newCode: `// ✨ AI建议：简化用户验证逻辑
function validateUser(user) {
    return !!(user?.name && user?.email && user.email.includes('@'));
}`,
        description: "优化用户验证函数",
        confidence: 0.85,
        tags: ["simplification", "validation"]
    },
    {
        range: { startLineNumber: 17, startColumn: 1, endLineNumber: 23, endColumn: 1 },
        oldCode: `function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}`,
        newCode: `// ✨ AI建议：使用现代JavaScript和错误处理
function calculateTotal(items) {
    if (!Array.isArray(items)) {
        throw new Error('Items must be an array');
    }
    
    return items.reduce((total, item) => {
        if (typeof item.price !== 'number' || item.price < 0) {
            throw new Error(\`Invalid price for item: \${item.name || 'unknown'}\`);
        }
        return total + item.price;
    }, 0);
}`,
        description: "现代化计算函数",
        confidence: 0.92,
        tags: ["modern-js", "error-handling", "reduce"]
    },
    {
        range: { startLineNumber: 35, startColumn: 1, endLineNumber: 43, endColumn: 1 },
        oldCode: `function findItemById(items, id) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return items[i];
        }
    }
    return null;
}`,
        newCode: `// ✨ AI建议：使用数组内置方法
function findItemById(items, id) {
    if (!Array.isArray(items) || id == null) {
        return null;
    }
    return items.find(item => item.id === id) || null;
}`,
        description: "使用find方法简化查找",
        confidence: 0.90,
        tags: ["modern-js", "array-methods"]
    },
    {
        range: { startLineNumber: 45, startColumn: 1, endLineNumber: 53, endColumn: 1 },
        oldCode: `function filterActiveItems(items) {
    var result = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i].active === true) {
            result.push(items[i]);
        }
    }
    return result;
}`,
        newCode: `// ✨ AI建议：使用filter方法和现代语法
function filterActiveItems(items) {
    if (!Array.isArray(items)) {
        return [];
    }
    return items.filter(item => item.active === true);
}`,
        description: "现代化过滤函数",
        confidence: 0.88,
        tags: ["modern-js", "filter", "es6"]
    },
    {
        range: { startLineNumber: 10, startColumn: 1, endLineNumber: 16, endColumn: 1 },
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
        description: "增强用户创建功能",
        confidence: 0.87,
        tags: ["error-handling", "logging", "enhancement"]
    },
    {
        range: { startLineNumber: 25, startColumn: 1, endLineNumber: 27, endColumn: 1 },
        oldCode: `function calculateDiscount(total, discountPercent) {
    return total * (discountPercent / 100);
}`,
        newCode: `// ✨ AI建议：增强折扣计算
function calculateDiscount(total, discountPercent) {
    if (typeof total !== 'number' || total < 0) {
        throw new Error('Total must be a positive number');
    }
    if (typeof discountPercent !== 'number' || discountPercent < 0 || discountPercent > 100) {
        throw new Error('Discount percent must be between 0 and 100');
    }
    
    return Number((total * (discountPercent / 100)).toFixed(2));
}`,
        description: "添加参数验证和精度处理",
        confidence: 0.89,
        tags: ["validation", "precision", "error-handling"]
    },
    {
        range: { startLineNumber: 33, startColumn: 1, endLineNumber: 35, endColumn: 1 },
        oldCode: `function sendNotification(user, message) {
    console.log("Sending to " + user.email + ": " + message);
}`,
        newCode: `// ✨ AI建议：增强通知功能
function sendNotification(user, message) {
    if (!user?.email || !message) {
        throw new Error('User email and message are required');
    }
    
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Sending notification to \${user.email}: \${message}\`);
    
    // 模拟异步发送
    return Promise.resolve({
        sent: true,
        timestamp,
        recipient: user.email,
        message
    });
}`,
        description: "异步化通知发送",
        confidence: 0.86,
        tags: ["async", "promise", "logging"]
    }
];

// 导出配置（支持ES6模块和CommonJS）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { suggestionExamples };
} else if (typeof window !== 'undefined') {
    window.suggestionExamples = suggestionExamples;
}