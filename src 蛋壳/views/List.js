import React, { Component } from 'react';
import Myseach from '../component/Myseach'
import Dialog from '../component/Dialog'
import list from '../../src/list.json'
import Item from '../component/Item';
class List extends Component {
    state={
        num:0,
        list:list,
        show:false,
        data0: [
            {
                type: null,
                txt: '不限'
            },
            {
                type: 0,
                txt: '整租'
            },
            {
                type: 1,
                txt: '合租'
            },
            {
                type: 2,
                txt: '月租'
            }
        ]
    }
    render() {
        let {show,num,list,data0} = this.state
        console.log(this.state);    
        return (
            <div className="list">  
              <Myseach changeShow={this.changeShow} />
              {
                  list.map((item,index)=><Item {...item} key={index} />)
              } 
              {
                    show&&num===0&&<Dialog data={data0}><p>1111</p></Dialog>
              }
              {
                    show&&num===1&&<Dialog><p>2222</p></Dialog>
              }
              {
                    show&&num===2&&<Dialog><p>3333</p></Dialog>
              }
              {
                    show&&num===3&&<Dialog><p>4444</p></Dialog>
              }
            </div>
        );
    }
    changeShow=(num)=>{
        if(this.state.num === num){
            this.setState({
                show:!this.state.show,
                num:num
            })
        }else{
            this.setState({
                num:num
            })
        }
        
    }
}

export default List;