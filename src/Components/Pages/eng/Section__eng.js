import React, {Component} from 'react';
import '../../Style/eng/Index__eng.scss'; // Или другой корректный путь



class Section__eng extends Component {
    render() {
        return (
            <>
                    <section>
                        <hr/>

                        <div className="tt">
                            <h2 className="h22">projects I have done :</h2>
                        </div>

                        <div className="d-flexx">
                            <div className="card1">
                                <h2>maxway Site</h2>
                                <img src="./imgs/Gamburger.png" alt=""/>
                                <h3>
                                    This site is about Burger, and this site allows you to filter, cart, add items to cart, and view the total price.
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
                                <h3>
                                    big site about medicines, <br/>
                                    on the adaptive site, and many features
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
                                <h3>
                                    big site about medicines, <br/>
                                    on the adaptive site, and many features
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
                                    This site is a big project with a team of 4 people, and the project is not functional
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
                            <h3 className="all">that's not all</h3>
                            <h3>soon</h3>
                        </div>

                        <hr/>
                    </section>



            </>
        );
    }
}

export default Section__eng;