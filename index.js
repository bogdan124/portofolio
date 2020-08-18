

class App extends React.Component {
  

  render() {
    return (
      <div class="App-body">
          <HeaderComponent />
          <br/>
          <NameGRID/>
          
      </div>
    );
  }
}

class HeaderComponent extends React.Component{

  render() {
    return(
      <div class="header-class">
        <div class="ui large menu">
          <ButtonComponent name="Home"/>
          <ButtonComponent name="About" />
        </div>
      </div>
    );
  }

}

class ButtonComponent extends React.Component{

  render(){
    return (
      <a class="item">
          {this.props.name}
      </a>
    );
  }

}

class NameGRID extends App{

  render(){
    return(
      <div class="ui grid">
          <div class="four wide column"></div>
          <div class="four wide column card"><PhotoComponent/></div>
          <div class="four wide column card"><DataUserComponent/></div>
          <div class="four wide column"></div>
      </div>
    );
  }

}


class PhotoComponent extends App{

  render(){
    return(
      <img class=" medium ui image card" src="picProfile.jpg"></img>
    );
  }

}
class DataUserComponent extends App{

  render(){
    return(
      <div class="content">
        <a class="header nameUse" href="#">Steve Jobes</a>
        <div class="meta">
          <a>Last Seen 2 days ago</a>
        </div>
      </div>
    );
  }
}




ReactDOM.render(<App/>, document.getElementById('root'))