import React, { Component } from "react";
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <nav>
        <div className="nav-wrapper pink accent-4" >
          <a className="left brand-logo">Email App</a>
          <ul className="right">
            <li>
              <a>Login With Google</a>
            </li>
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
