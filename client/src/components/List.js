import React, { Component } from 'react'
import { getList, addTodoList, deleteItem, updateItem } from '../ListFunction'

class List extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      term: '',
      editDisabled: false,
      items: []
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.getAll()
  }

  onChange = (event) => {
    this.setState({ term: event.target.value, editDisabled: 'disabled' })
  }

  // todolist 목록을 다시 불러온다.
  getAll = () => {
    getList().then((data) => {
      this.setState(
        {
          term: '',
          items: [...data]
        },
        () => {
          console.log(this.state.items)
        }
      )
    })
  }

  onSubmit = (e) => {
    e.preventDefault() // preventDefault 기존의 이벤트를 종료한다. 새로고침 방지
    addTodoList(this.state.term).then(() => {
      // list 추가 후에 목록을 다시 불러옴
      this.getAll()
    })
    this.setState({ editDisabled: false })
  }

  onUpdate = (e) => {
    e.preventDefault()
    updateItem(this.state.term, this.state.id).then(() => {
      // 업데이트 후에 목록을 다시 불러옴
      this.getAll()
    })
    this.setState({ editDisabled: false })
  }

  onEdit = (item, itemid, e) => {
    e.preventDefault()
    this.setState({
      id: itemid,
      term: item
    })
  }

  onDelete = (val, e) => {
    e.preventDefault()
    deleteItem(val).then(() => {
      // 삭제 후에 목록을 다시 불러옴
      this.getAll()
    })
  }

  render() {
    return (
      <div className="col-md-12">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Task Name</label>
            <div className="row">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="InputEmail"
                  value={this.state.term || ''}
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-primary"
                  onClick={this.onUpdate.bind(this)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={this.onSubmit.bind(this)}
            className="btn btn-success btn-block"
          >
            Submit
          </button>
        </form>
        <table className="table">
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td className="text-left">{item.task_name}</td>
                <td className="text-right">
                  <button
                    href=""
                    className="btn btn-info mr-1"
                    disabled={this.state.editDisabled}
                    onClick={this.onEdit.bind(this, item.task_name, item.id)}
                  >
                    Edit
                  </button>
                  <button
                    href=""
                    className="btn btn-danger"
                    onClick={this.onDelete.bind(this, item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default List
