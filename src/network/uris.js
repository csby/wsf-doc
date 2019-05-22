const uris = {
    // 获取平台信息
    getServerInfo: '/doc.api/info',
    // 获取目录
    getCatalogTree: '/doc.api/catalog/tree',
    // 获取函数: /doc.api/function/:id
    getFunction: '/doc.api/function/',
    // 获取创建凭证项目：/doc.api/token/ui/:id
    getTokenUI: '/doc.api/token/ui/',
    // 创建凭证： /doc.api/token/create/:id
    createToken: '/doc.api/token/create/',
}

export default {
    uris
}