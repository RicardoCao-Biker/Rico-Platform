import React, { Component } from 'react'
import { Layout } from 'antd';

import Navigator from "../components/navigator"
import Aside from "../components/aside"

const { Content } = Layout;


export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Navigator />
        <Layout>
          <Aside />
          <Layout style={{ padding: '0 12px 0 12px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 20,
                margin: 0
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
