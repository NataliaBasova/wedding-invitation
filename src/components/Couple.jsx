import React, { Component } from 'react';

export default class Couple extends Component {
    render() {
        return (
           <section className="couple">
               <div className="couple-container container">

                    <div className="couple-item flex-item">
                        <div className="his-her-photo"><img src="./img/couple/bride.jpg" alt="Наташа"/></div>
                        <h2>Наташа<small>Невеста</small></h2>
                        <p>Первый раз мы встретились в 2013 году. Тогда я подумать не могла, что мы решим быть вместе.
                            Скоро наступит самый счастливый и волнительный день в нашей жизни. Мы очень готовились к нему. Надеюсь, все пройдет хорошо.</p>
                     </div>
                   <span className="ampersant flex-item">&</span>
                   <div className="couple-item flex-item">
                       <div className="his-her-photo"><img src="./img/couple/groom.jpg" alt="Дима"/></div>
                       <h2>Дима <small>Жених</small></h2>
                       <p>Никогда не думал, что встречу человека, ради которого буду спешить домой, но встретил.
                           Просыпаясь рядом - радуюсь, дышу, люблю, живу и каждую секунду благодарен за то, что просто, не прошла мимо меня!</p>
                   </div>

               </div>
               <div className="image-divider"></div>
           </section>
        );
    }
}