






class App extends React.Component {
  

  render() {
    return (
      <div class="App-body">
          <InputComponent nameComponent="Buton1"/>
          <InputComponent nameComponent="Buton2"/>
          <InputComponent nameComponent="Buton3"/>
      </div>
    );
  }
}





class ButtonComponent extends React.Component {
    


  render() {
    return (
        <button>{this.props.nameComponent}</button>
    );
  }

}


class InputComponent extends  React.Component  {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();

  }

  clickChange(){
    console.log(this.textInput);
  }

  render(){
    return (
      <div>
        <input type="text" ref={this.textInput} class="textInput"></input>
        <ButtonComponent onclick={this.clickChange()} nameComponent={this.props.nameComponent}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))