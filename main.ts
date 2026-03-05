// Deno Deploy 服务器：处理 POST 请求并获取指定地址内容
Deno.serve(async (request) => {
  try {
    // 检查是否为 POST 请求
    if (request.method === 'POST') {
      // 解析请求体
      const requestBody = await request.json();
      const url = requestBody.url;

      if (!url) {
        return new Response(JSON.stringify({
          code: 400,
          message: "缺少 url 参数",
          data: null
        }), {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        });
      }

      // 获取指定地址的内容
      const response = await fetch(url);
      const content = await response.text();

      // 返回响应
      return new Response(JSON.stringify({
        code: 200,
        message: "获取成功",
        data: {
          url: url,
          content: content,
          time: new Date().toLocaleString()
        }
      }), {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
    } else {
      // 非 POST 请求返回提示信息
      return new Response(JSON.stringify({
        code: 405,
        message: "仅支持 POST 请求",
        data: null
      }), {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
    }
  } catch (error) {
    // 处理错误
    return new Response(JSON.stringify({
      code: 500,
      message: "服务器错误: " + error.message,
      data: null
    }), {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
  }
});