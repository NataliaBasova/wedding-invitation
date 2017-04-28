import React, { Component } from 'react';
import IconGlass from './icons/WineGlasses.jsx';
import IconBird from './icons/Bird.jsx';
import IconRings from './icons/Rings.jsx';
import IconDinner from './icons/Dinner.jsx'
import IconPhoto from './icons/Photo.jsx';

export default class Details extends Component {
    render () {
        return (
            <section id="detail-section" className="detail" name="detail-section">
                <div className="detail-conteiner container">
                    <div className="h2">Как все будет проходить</div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconGlass/>
                        </div>
                        <div className="flex-item">
                            <h4>Фуршет</h4>
                            <p>Перед церемонией вас будет ждать небольшой фуршет, который будет проходить с <strong>15.30</strong> и до <strong>16.00</strong></p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconRings/>
                        </div>
                        <div className="flex-item">
                            <h4>Церемония</h4>
                            <p>В <strong>16.00</strong> мы приглашаем вас разделить самый важный и волнительный момент</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconDinner/>
                        </div>
                        <div className="flex-item">
                            <h4>Праздничный ужин</h4>
                            <p>В <strong>17.00</strong>, после церемонии, все мы сможем немножко отдохнуть и покушать) </p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconPhoto/>
                        </div>
                        <div className="flex-item">
                            <h4>Фото</h4>
                            <p>В <strong>18.00</strong> мы покинем вас ненадолго. Вы в это время можете сделать фото себе на память об этом дне</p>
                        </div>
                    </div>
                    <div className="detail-item">
                        <div className="flex-item">
                            <IconBird/>
                        </div>
                        <div className="flex-item">
                            <h4>Вечерняя церемония</h4>
                            <p>В <strong>20.30</strong> мы хотим устроить еще одну церемонию, которая будет окончанием вечера</p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}