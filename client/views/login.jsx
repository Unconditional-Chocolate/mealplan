/** @jsx React.DOM */
var Login = React.createClass({
  
  mixins: [Backbone.Events],

  getInitialState: function() {
    return {email: null, password: null, login: true};
  },
  
  handleEmailChange: function(e) {
     this.setState({email: e.target.value});
  },

  handlePasswordChange: function(e) {
     this.setState({password: e.target.value});
  },

  handleLogin: function() {
    var user = new UserModel(this.state);
    
    user.save({}, {
      success: function(model, res){
        console.log("SUCCESS!");
      },
      error: function(model, err){
        console.log("ERROR!");
      }
    });
  },

  render : function() {
    return (
      <div>
        <button>Sign Up</button>
        <button>Log In</button>
        <form>
          <input type="text" name="email" placeholder="Email" onChange={this.handleEmailChange} />
          <input type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          <button type="button" onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    );
  }

});