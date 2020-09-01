const Router = require("koa-router");
const router = new Router();
const Task = require("../models/Task");

router.get("/api/tasks", async (ctx) => {
  await Task.findAll()
    .then((tasks) => {
      ctx.body = tasks;
    })
    .catch((err) => {
      ctx.body = "error" + err;
    });
});

router.get("/api/task/:id", async (ctx) => {
  await Task.findOne({
    where: {
      id: ctx.params.id,
    },
  })
    .then((task) => {
      if (task) {
        ctx.body = task;
      } else {
        ctx.body = "Task does not exist";
      }
    })
    .catch((err) => {
      ctx.body = "error" + err;
    });
});

router.post("/api/task", async (ctx) => {
  if (!ctx.request.body.task_name) {
    ctx.body = {
      error: "Bad Data post",
    };
  } else {
    await Task.create(ctx.request.body)
      .then((data) => {
        ctx.body = data;
      })
      .catch((err) => {
        ctx.body = "error" + err;
      });
  }
});

router.delete("/api/task/:id", async (ctx) => {
  await Task.destroy({
    where: {
      id: ctx.params.id,
    },
  })
    .then((tasks) => {
      ctx.body = { status: "Task Deleted" };
    })
    .catch((err) => {
      ctx.body = "error" + err;
    });
});

router.put("/api/task/:id", async (ctx) => {
  //여기에 데이터가 넘어오지를 못함
  if (!ctx.request.body.task_name) {
    ctx.body = {
      error: "Bad Data update",
    };
  } else {
    await Task.update(
      { where: { id: ctx.params.id } },
      { task_name: ctx.request.body.task_name }
    ).then(() => {
      ctx.body = { status: "Task Updated!" };
    });
  }
});

module.exports = router;
