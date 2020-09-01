const Koa = require("koa");
const bodyParser = require("koa-body");

var app = new Koa();

const tasks = require("./routes/tasks");
const members = require("./routes/members");

app.use(bodyParser());
app.use(tasks.routes());
app.use(members.routes());

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
