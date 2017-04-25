import React, { Component } from 'react';
import IconGlass from './icons/WineGlasses.jsx';
import IconBird from './icons/Bird.jsx';
import IconRings from './icons/Rings.jsx';
import IconDinner from './icons/Dinner.jsx'
import IconPhoto from './icons/Photo.jsx';

export default class Details extends Component {
    render () {
        return (
            <section className="detail">
                <div className="detail-conteiner">
                    <div className="h2">Как все будет проходить</div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconGlass/>
                        </div>
                        <div className="flex-item">
                            <h4>Фуршет</h4>
                            <p>Перед церемонией вас будет ждать небольшой фуршет, который будет проходить с 15.30 и до 16.00</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconRings/>
                        </div>
                        <div className="flex-item">
                            <h4>Церемония</h4>
                            <p>В 16.00 мы приглашаем вас разделить самый важный и волнительный момент</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconDinner/>
                        </div>
                        <div className="flex-item">
                            <h4>Праздничный ужин</h4>
                            <p>В 17.00 мы приглашаем вас разделить самый важный и волнительный момент</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconPhoto/>
                        </div>
                        <div className="flex-item">
                            <h4>Фото</h4>
                            <p>В 18.00 мы покинем вас ненадолго. Вы в это время можете сделать фото себе на память об этом дне</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconBird/>
                        </div>
                        <div className="flex-item">
                            <h4>Вечерняя церемония</h4>
                            <p>В 20.30 мы хотим устроить еще одну церемонию, которая будет окончанием вечера</p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}