import React, {Component} from 'react';
import Header__eng from "./eng/Header__eng";
import Section__eng from "./eng/Section__eng";
import Footer__eng from "./eng/Footer__eng";

class Eng extends Component {
    render() {
        return (
            <>
                <div className="main__backround">
                    <Header__eng/>
                    <Section__eng/>
                    <Footer__eng/>
                </div>
            </>
        );
    }
}

export default Eng;