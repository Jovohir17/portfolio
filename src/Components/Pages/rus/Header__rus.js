import React, {Component} from 'react';
import '../../Style/rus/Index__rus.scss'; // Или другой корректный путь


class Header__rus extends Component {
    render() {
        return (
            <>
                    <header>
                        <nav>
                            <div className="nav__item">
                                <p><a href="#">JT</a></p>

                                <div className="launges">
                                    <p><a href="/">ENG</a></p>
                                    <p className="active">RUS</p>
                                </div>
                            </div>
                        </nav>

                        <div className="header__item">
                            <h1>Jovohir Tursunov</h1>
                            <div className="text1">
                                <div className="circle"></div>
                                <h2>Профессиональная Разработка Фронтенда</h2>
                            </div>

                            <div className="text2">
                                <div className="circle"></div>
                                <h2>Инновационный Дизайн и Функциональность</h2>
                            </div>

                            <div className="text3">
                                <div className="circle"></div>
                                <h2>Создание Дизайнов в Figma</h2>
                            </div>
                        </div>

                        <div className="contacts__ico">
                            <div className="telegram">
                                <a href=""><img src="./imgs/icons/telegram.png" alt="Telegram"/></a>
                            </div>

                            <div className="instagram">
                                <a href=""><img src="./imgs/icons/Instagram.png" alt="Instagram"/></a>
                            </div>
                        </div>

                        <img className="oblako1" src="./imgs/oblaka1.png" alt=""/>
                            <img className="oblako2" src="./imgs/oblaka2.png" alt=""/>
                            <img className="programmer" src="./imgs/programmer.png" alt=""/>
                            <img className="pc" src="./imgs/pc.png" alt=""/>
                            <img className="Code1" src="./imgs/Code1.png" alt=""/>
                            <img className="Code2" src="./imgs/Code2.png" alt=""/>
                            <img className="Mobile" src="./imgs/Mobile.png" alt=""/>
                    </header>
            </>
        );
    }
}

export default Header__rus;