//导入包
import React from "react";
import PropTypes from "prop-types";
export default class Life extends React.Component {
  // static propTypes = {
  //   count: PropTypes.number
  // };
  // static defaultProps = {
  //     count:99
  //   }
  render() {
    return <div>您传过来的值：{this.props.count}</div>;
  }
}
Life.propTypes = {
  count: PropTypes.string.isRequired
};
Life.defaultProps = {
  count: 99
};
