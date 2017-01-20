import React from 'react'
import { Checkbox,Icon, Image, Statistic} from 'semantic-ui-react'

export default class TodoList extends React.Component{

constructor(props)
{
    super(props);
    this.state={
        decoration:false
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
}

handleCheckbox()
{
    if(this.state.decoration)
    {
        this.setState({decoration:false})
    }
    else {
        this.setState({decoration: true})
    }

}


render(){
    var  style={}
    if(this.state.decoration)
    {
     style={
            textDecoration:'line-through'
        }
    }
else {
     style={
        textDecoration:'none'
    }
}

  return(


    <div>
  <Checkbox label='Save the profile'  style={style} onChange= {this.handleCheckbox} />
  <br/>
  <Checkbox label='Send email ' />
  <br/>
  <Checkbox label='Refer your friend' />
  <br/>




</div>


);
}
}
