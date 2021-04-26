import React from 'react';
class Nav extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div style={{"width":"100%","height":"80px","background":"#3e7f71"}}>
                    <h1 style={{"color":'white',"fontSize":"40px","marginLeft":"50px","lineHeight":"80px"}}>React:后台管理系统</h1>
                </div>
            </div>
        )
    }
}
export default Nav;