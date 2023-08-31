import React, {Component} from 'react';
import Header__rus from "./rus/Header__rus";
import Section__rus from "./rus/Section__rus";
import Footer__rus from "./rus/Footer__rus";

class Rus extends Component {
    render() {
        return (
            <>
                <div className="main__backround">
                    <Header__rus/>
                    <Section__rus/>
                    <Footer__rus/>
                </div>
            </>
        );
    }
}

export default Rus;