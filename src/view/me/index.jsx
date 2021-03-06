/**
 * @author lenjee (lenjee@outlook.com)
 * @website www.lenjee.com
**/
import React from 'react';
// 避免无效渲染 每个子组件必须添加
import PRXI from 'react-addons-pure-render-mixin';
// 引入组件
import FloorMenu from '@/components/floor/menu';
import Header from '@/components/header/headerLogo';
/**

**/
class Me extends React.Component {
  constructor(props){
    super(props);
    // 避免无效渲染
    this.shouldComponentUpdate=PRXI.shouldComponentUpdate.bind(this);
    this.state={
      headTitle:{
        title:'我', // 标题
        show:{}, // 是否显示
      }
    };
  }

  render() {
    return (
      <div className='me'>
        <Header info={this.state.headTitle} />
        Me
        <FloorMenu />
      </div>
    );
  }

}
export default Me;
