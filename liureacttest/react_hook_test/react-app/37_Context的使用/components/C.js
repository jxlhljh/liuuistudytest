import React, { Component } from 'react';
import TestContext from "../store/testContext";

export default class C extends Component {
    //声明接收context
	static contextType = TestContext;
    render() {
        const {name,age} = this.context;
        return (
            <div>
                <h3>我是C组件</h3>
                <h4>我接收到的: {name} -- {age} </h4>
            </div>
        );
    }
}
