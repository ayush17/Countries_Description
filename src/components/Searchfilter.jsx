import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
const { Search } = Input;

class Searchfilter extends Component {
   
    state = {  }
     handleMenuClick=(e)=> {
        message.info('Click on menu item.');
        e.preventDefault();
        console.log('click', e);
      }
    render() { 
        const menu = (
            <Menu onClick={this.props.handleSearchCountryByRegion}>
              <Menu.Item key="1">
                Africa
              </Menu.Item>
              <Menu.Item key="2">
                Americas
              </Menu.Item>
              <Menu.Item key="3">
                Asia
              </Menu.Item>
              <Menu.Item key="3">
              Europe
              </Menu.Item>
              <Menu.Item key="3">
              Oceania
              </Menu.Item>
            </Menu>
          );
        return ( 
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"1.5vw"}}>
            <Search
            placeholder="Search for a country..."
            onSearch={value => this.props.handleSearchCounrty(value)}
            style={{ width: 350,border:"none",borderRadius:"0.2vw" ,height:"2.5vw"}}
          />
           <Dropdown overlay={menu} style={{ width: 350,border:"none" }}>
      <Button style={{ border:"none"}}>
       Filter by Region <DownOutlined />
      </Button>
    </Dropdown>
    </div>
          );
    }
}
 
export default Searchfilter;