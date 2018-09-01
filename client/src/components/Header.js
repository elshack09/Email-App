import React, { Component } from "react";
import { connect } from 'react-redux'

class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return
      case false:
        return(
          <li><a href ="/auth/google/">Login With Google</a></li>
        )

      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper pink accent-4" >
          <a className="left brand-logo">Email App</a>
          <ul className="right">
           {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}){
  return{ auth}
}
export default connect(mapStateToProps) (Header);
//  <nav>
//           <div class="nav-wrapper">
//             <a href="#" class="brand-logo">
//               Logo
//             </a>
//             <ul id="nav-mobile" class="right hide-on-med-and-down">
//               <li>
//                 <a href="sass.html">Sass</a>g
//               </li>
//               <li>
//                 <a href="badges.html">Components</a>
//               </li>
//               <li>
//                 <a href="collapsible.html">JavaScript</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
