import React, { Component } from "react";
import { getMember } from "../LoginFunction";

class Login extends Component {
  constructor() {
    //this라는 키워드를 쓰기 위해서 쓴다.
    //props도 사용하고 싶으면 super안에 props까지 넣기
    super();

    this.state = {
      id: "",
      term: "",
      items: [],
    };
  }

  //Login이란 Component가 생성되었을 때 실행시킨다.
  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    getMember().then((data) => {
      this.setState(
        {
          term: "",
          items: [...data],
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };

  render() {
    return (
      <>
        <table className="table">
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td className="text-left">{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Login;
