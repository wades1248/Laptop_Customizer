import React from "react";
import Summary from './Summary';
import Total from './Total';

class MainSummary extends React.Component {
    render(){
        return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                <Summary selected={this.props.selected} />
                <Total selected={this.props.selected} />
            </section>
        )
    }
}
export default MainSummary;