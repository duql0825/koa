<h1> TodoList </h1>  

> CRUD Todolist 
> mysql 연동 phpMyAdmin

<h2> How to run </h2>

### Installation  
```
$ npm install koa
$ npm install --save axios
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


### Listfunction.js : axios rest
> 함수로 만들어 쉽게 꺼낼수 있도록 처리  
```
export const addTodoList = (term) => {
  return axios
    .post(
      "/api/task",
      {
        task_name: term,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      console.log(response);
    });
};
```

### components/List.js : CRUD 처리 
- componentDidMount시 getAll 함수를 호출해서 todolist 목록 새로고침 

### Sequelize
nodejs에서 mysql을 사용할때 미리 지정해줌으로써 좀더 편하게 다룰수 있는 라이브러리  
위에서와 같이 module.exports를 사용해서 가져올 수 있다.

### database : db 주소 
> module.exports = db를 사용해서 접근  
> table : nodejs_tasks   
> column : id , tasks    


### koa를 써보면서
> request next를 쓰지 않고 async await ctx 차이점이 있었다.  
> 좀 더 코드가 간단해지고 메모리를 많이 잡아먹지 않는다.  
> 하지만 express와 비슷하게 쓰다보니 koa의 장점을 잘 못 살린거 같다.  

## 버그들  
로그인 컴포넌트는 아직 완성되지 않았다.  

## 참고 자료
https://www.youtube.com/watch?v=NY7dYjwC_NI&t=1131s
