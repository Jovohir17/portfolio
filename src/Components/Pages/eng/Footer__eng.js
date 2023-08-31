import React, {Component} from 'react';
import '../../Style/eng/Index__eng.scss'; // Или другой корректный путь




class Footer__eng extends Component {
    render() {
        return (
            <>
                <footer>
                    <h2>networks to contact me :</h2>

                    <div className="d-flexx">
                        <a href="https://t.me/joha_17">
                            <div className="telegram">
                                <img src="../imgs/icons/telegram.png" alt="1"/>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/jaavooh">
                            <div className="instagram">
                                <img src="../imgs/icons/instagram.png" alt="2"/>
                            </div>
                        </a>
                        <a href="https://discord.gg/5qDtSCs4">
                            <div className="discord">
                                <img src="../imgs/icons/discord.png" alt="3"/>
                            </div>
                        </a>

                        <a href="mailto:johax9@gmail.com">
                            <div className="gmail">
                                <img src="../imgs/icons/gmail.png" alt="4"/>
                            </div>
                        </a>


                    </div>

                    <div className="text__about">
                        <h3>Innovative Design and Functionality</h3>
                        <h3>Professional Frontend Development</h3>
                        <h3>Creating Designs in Figma</h3>
                    </div>

                    <div className="Coder">
                        <img className="Coder1" src="../imgs/Coder1.png" alt=""/>
                        <img className="Coder2" src="../imgs/Coder2.png" alt=""/>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer__eng;