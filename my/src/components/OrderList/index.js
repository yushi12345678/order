import React, { Component } from "react";
import OrderItem from "../OrderItem";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch("/mock/orders.json").then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          });
        });
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.data.map(item => {
          return (
            <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
          );
        })}
      </div>
    );
  }
  handleSubmit = (id, comment, stars) => {
    //如果后后台API支持的写法，把评价内容传到后台
    // fetch('/saveComment').then(()=>{
    //   35-44行代码
    // })
    const newData = this.state.data.map(item => {
      return item.id === id
        ? {
            ...item,
            comment,
            stars,
            ifCommented: true
          }
        : item;
    });
    this.setState({
      data: newData
    });
  };
}

export default OrderList;
