<h1> 개요 </h1>  

> Koa를 써보기 위해서 만든 Project  
> CRUD Todolist & Chat 
> Chat은 socket 통신을 이용해서 만들었다.

<h2> How to run </h2>

### Koa Installation  
```
$ npm install koa
```

### Socket io
```
$ npm install socket.io-client
import io from 'socket-io-client';
```

## Getting started
```  
npm run dev
```  
concurrently를 사용해 react 서버와 express 서버를 동시에 실행시켜준다.

# 설명

-------------------------------------------------------
## 구성요소
-------------------------------------------------------


### database : db 주소
> module.exports = db를 사용해서 접근


### models : 테이블등록 
- 가져오려면 require해서 변수에 저장
> 
```
ex) const Member = require("../models/Member");
```
> module.exports를 사용하기

### Sequelize
nodejs에서 mysql을 사용할때 미리 지정해줌으로써 좀더 편하게 다룰수 있는 라이브러리  
위에서와 같이 module.exports를 사용해서 가져올 수 있다.

### routes : router
/api/login
```
ex) 
router.	get	("/api/login", async (ctx) => { 
  await Member.findOne({
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
```

-------------------------------------------------------
## 
-------------------------------------------------------

## 버그들
Chat 기능에서 보내는 내용이 몇개씩 보내진다.  
로그인이 아닌 랜덤유저를 생성해서 Chat한다.  
<Login>은 아직 완성되지 않았다.  

## 참고 자료
https://www.youtube.com/watch?v=hiiaHyhhwBU&t=1366s  
https://www.youtube.com/watch?v=NY7dYjwC_NI&t=1131s
