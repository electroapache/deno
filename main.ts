// Deno Deploy 最简 JSON 响应代码（含 utf-8 编码）
Deno.serve(() => {
  // 定义要返回的 JSON 数据
  const responseData = {
    code: 200,
    message: "部署成功 ✅",
    data: {
      time: new Date().toLocaleString(),
      tip: "Content-Type 已设置为 application/json; charset=utf-8"
    }
  };

  // 设置 Content-Type 为 JSON + utf-8 编码
  return new Response(JSON.stringify(responseData), {
    headers: {
      "Content-Type": "application/json; charset=utf-8" // 核心配置
    }
  });
});