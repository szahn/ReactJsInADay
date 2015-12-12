import React, {Component} from 'react'
export default class ChatMessage extends Component{

	constructor(props){
		super(props);

	}

	render(){
		return (<li className="chat-message"><i className="created">{this.props.created.toDateString()} {this.props.created.toTimeString()}</i> <b>{this.props.name}</b>: {this.props.content}</li>);
	}


}	