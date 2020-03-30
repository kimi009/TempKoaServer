const koa = require("koa");
// const Router = require("koa-router");
const koaBodyParser = require("koa-bodyparser");
const home = require("./home");
const product = require("./product");
const static = require("koa-static");
const app = new koa();

/*static(root,opts); root为静态文件资源下的文件目录,opts为可选项
  opts: maxage浏览器缓存的最大寿命（以毫秒为单位）。默认为0
        hidden允许传输隐藏文件。默认为false
        index 默认文件名，默认为“ index.html”
        defer如果为true，则在服务之后return next()，允许任何下游中间件首先响应。
        gzip 当客户端支持gzip且所请求的扩展名为.gz的文件存在时，请尝试自动提供文件的gzip压缩版本。默认为true。
        br 当客户端支持brotli并且存在所请求的扩展名为.br的文件时，请尝试自动提供文件的brotli版本（请注意，仅通过https接受brotli）。默认为true。
        setHeaders函数，用于在响应时设置自定义标头。
        extensionsURL中没有扩展名时，尝试匹配传递的数组中的扩展名以搜索文件。首次发现是送达的。（默认为false）
*/
app.use(static("./public"));
// const router = new Router();
app.use(
  koaBodyParser({
    extendTypes: ["json", "form", "text"]
  })
);

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method === "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});

// router.get("/user/info", async ctx => {
//   const res = await new Promise(resolve => {
//     const list = [];
//     for (let index = 0; index < 3; index++) {
//       list.push({
//         id: index,
//         name: `test--${index}`,
//         des: `中软国际事业${index}部`
//       });
//     }
//     setTimeout(() => {
//       resolve(list);
//     }, 200);
//   });
//   ctx.body = {
//     list: res
//   };
// });

// router.post("/user/detail", async ctx => {
//   //   const { id } = ctx.request.body
//   const res = await new Promise(resolve => {
//     const list = [];
//     for (let index = 0; index < 20; index++) {
//       list.push({
//         key: index,
//         name: `张三--${index}`,
//         age: index,
//         address: `雁塔区---${index}`,
//         tags: ["成功", "失败"]
//       });
//     }
//     setTimeout(() => {
//       resolve(list);
//     }, 200);
//   });
//   ctx.body = {
//     list: res
//   };
// });

// app.use(router.routes()).use(router.allowedMethods());
app.use(home.routes()).use(home.allowedMethods());
app.use(product.routes()).use(product.allowedMethods());

app.listen(6010, "127.0.0.1", () => {
  console.log("server start...");
});
