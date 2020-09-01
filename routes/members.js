const Router = require("koa-router");
const router = new Router();
const Member = require("../models/Member");

router.get("/api/Login", async (ctx) => {
  await Member.findAll()
    .then((task) => {
      ctx.body = task;
    })
    .catch((err) => {
      ctx.body = "error" + err;
    });
});

module.exports = router;
