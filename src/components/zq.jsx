//导入包
import React from "react";
import PropTypes from "prop-types";
export default class Zq extends React.Component {
  static propTypes = {
    count: PropTypes.number
  };
  static defaultProps = {
    count: 99
  };
  constructor(props) {
    super();
    this.state = {
      msg: "我是信息",
      num: props.count
    };
  }

  componentWillMount() {
    //created
    //console.log(111, this.state.msg, this.props.count);//111 "我是信息" 99
    //this.testFn();
  }
  render() {
    // console.log(
    //   document.getElementById("test") &&
    //     document.getElementById("test").innerHTML
    // );
    return (
      <div>
        <button onClick={() => this.add()}>点击按钮您传过来的值+1</button>
        <div id="test">
          您传过来的值：{this.state.num}---{this.props.count}
        </div>
      </div>
    );
  }

  componentDidMount() {
    //mounted
    //console.log(document.getElementById("test").innerHTML); //您传过来的值：99
  }
  shouldComponentUpdate(nextProps, nextState) {
    //console.log(nextProps.num);
    //console.log(this.state.num);
    // if (nextState.num % 2 === 0) {
    //   return false;
    // }
    // return true;
    //console.log(document.getElementById("test").innerHTML);
    return true;
  }
  // 运行阶段 第二个生命周期函数 【组件将要被更新】
  componentWillUpdate() {
    //console.log(document.getElementById("test").innerHTML);
  }

  componentDidUpdate() {
    //console.log(document.getElementById("test").innerHTML);
  }
  // 组件的 porps 被改变，会重新触发 componentWillRevceiveProps
  componentWillReceiveProps(nextProps) {
    // 组件将要接收新属性
    console.log("接收到了新属性" + this.props.count);
    console.log("nextProps 中的属性值是：" + nextProps.count);
    // 注意：如果在 componentWillReceiveProps 生命周期函数中，想要获取最新的 props 数据，
    // 不要使用 this.props.***，因为它是上一次的 props;
    // 最新的应该通过 componentWillReceiveProps(nextProps) 来获取；`

    this.setState({
      num: nextProps.count
    });
  }

  testFn = () => {
    console.log("你调用了我");
  };

  // 每当点击按钮，就让 吨位 + 1
  add = () => {
    // this.props.initcount++

    this.setState({
      num: this.state.num + 1
    });
  };
}
