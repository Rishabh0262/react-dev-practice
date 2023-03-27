import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

  // (2nd way) if the project supports "public class field" Syntax
  static contextType = UserContext

  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

// ComponentE.contextType = UserContext      // 1st way to use Context!

export default ComponentE

/*      *** DEMERIT of Using ContextType ***  example...
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />       // just to use this line, we need to get nested this much.
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
*/