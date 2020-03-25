const koa = require("koa");
// const Router = require("koa-router");
const koaBodyParser = require("koa-bodyparser");
const home = require("./home");
const product = require('./product')
const app = new koa();
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
app.use(product.routes()).use(product.allowedMethods())

app.listen(6010, "127.0.0.1", () => {
  console.log("server start...");
});
