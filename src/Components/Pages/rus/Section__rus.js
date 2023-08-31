import React, {Component} from 'react';
import '../../Style/rus/Index__rus.scss'; // Или другой корректный путь
import '../../Style/text.scss';


class Section__rus extends Component {
    render() {
        return (
            <>
                    <section>
                        <hr/>

                        <div className="tt">
                            <h2>Проекты, которые я сделал:</h2>
                        </div>
                        <div className="d-flexx">
                            <div className="card1">
                                <h2>maxway Site</h2>
                                <img src="./imgs/Gamburger.png" alt=""/>
                                <h3 className="sans">
                                    Этот сайт о бургер, и на этом сайте вы можете фильтровать, добавлять товары в корзину, просматривать корзину и видеть общую стоимость.
                                </h3>
                                <div className="button__link">
                                    <a href="">
                                        <button>
                                                READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="card2">
                                <h2>atlas site</h2>
                                <img src="../imgs/medicine.png" alt=""/>
                                <h3 className="sans">
                                    Крупный сайт о медицинских препаратах, <br/>
                                     адаптивный дизайн и множество функций.
                                </h3>
                                <div className="button__link">
                                    <a href="">
                                        <button>
                                            READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="d-flexx">
                            <div className="card3">
                                <h2>atlas site</h2>
                                <img src="../imgs/medicine.png" alt=""/>
                                <h3 className="sans">
                                    Крупный сайт о медицинских препаратах, <br/> 
                                    адаптивный дизайн и множество функций.
                                </h3>
                                <div className="button__link">
                                    <a href="">
                                        <button>
                                            READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="card4">
                                <h2>pizza site</h2>
                                <img src="./imgs/pizza.png" alt=""/>
                                <h3>
                                    Этот сайт о пицце, и на этом сайте вы можете фильтровать, добавлять товары в корзину, просматривать корзину и видеть общую стоимость.
                                </h3>
                                <div className="button__link">
                                    <a href="">
                                        <button>
                                            READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="more">
                            <h3 className="all">Это еще не всё</h3>
                            <h3>Скоро</h3>
                        </div>

                        <hr/>
                    </section>



            </>
        );
    }
}

export default Section__rus;