import React, { Component } from 'react';

class Welcome extends Component {
    render(props) {
        const {name, alternateName, heroName, children} = this.props            // destructuring props & state [alt. syntax => rfc (Greet.js)]
        // const {state1, state2} = this.state
        return (
            <div>
                {/* <h1>Welcome Hero!</h1> */}
                <h1>Welcome {name}{alternateName}, a.k.a. {heroName}</h1>
                {children}
            </div>
        )
    }
}

export default Welcome;
