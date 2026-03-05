// main.ts - 简单的 HTTP 服务，用于测试部署
import { serve } from "https://deno.land/std@0.210.0/http/server.ts";

// 处理所有请求
const handler = (req: Request): Response => {
  return new Response(`
    <h1>Hello Deno Deploy!</h1>
    <p>部署成功！当前时间：${new Date().toLocaleString()}</p>
  `, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};

// 启动服务（Deno Deploy 自动处理端口，无需指定）
serve(handler);