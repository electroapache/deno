// 单行核心：启动 HTTP 服务并响应请求（适配 Deno Deploy 环境）
Deno.serve(() => new Response("<h1>Hello Deno Deploy!</h1><p>部署成功 ✅</p>", { headers: { "Content-Type": "text/html" } }));