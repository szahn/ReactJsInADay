import React, {Component} from 'react';
import ChatMessage from './ChatMessage';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      messages : [],
      message: 'Hello'
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

    return true;
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    const sortDateDesc = (a, b) => a.created > b.created ? -1 : 1;
    const messages = this.state.messages.sort(sortDateDesc).map((msg) => <ChatMessage key={msg.id} {...msg}/>);
    return (
      <div>
        <div id="helloWorld">
          <input
            id="input"
            name="message"
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={this.state.message}
          />
        </div>
        <div>
          <ul className="chat-messages">
            {messages}
          </ul>
        </div>
      </div>
    );
  }

  handleKeyPress(ev){
    if (ev.key !== "Enter") return;
    if (this.state.message === "") return;
    this.setState({
      messages: this.state.messages.concat({id: this.state.messages.length, 
        content: this.state.message, 
        created: new Date(),
        name: this.props.name}),
      message: "",
    })
  }
  
  handleChange(event) {
    this.setState({message: event.target.value});
  }

}
