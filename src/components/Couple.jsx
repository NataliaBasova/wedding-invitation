import React from 'react';

const Couple = React.createClass({
    render() {
        return (
           <section className="couple">
               <div className="couple-container container">

                    <div className="couple-item flex-item">
                        <div className="his-her-photo"><img src="./img/couple/bride.jpg" alt="Наташа"/></div>
                        <h2>Наташа<small>Невеста</small></h2>
                        <p>Первый раз мы встретились в 2013 году. Тогда я подумать не могла, что мы решим быть вместе, как говорится, и в горе и радости.</p>
                     </div>
                   <span className="ampersant flex-item">&</span>
                   <div className="couple-item flex-item">
                       <div className="his-her-photo"><img src="./img/couple/groom1.jpg" alt="Дима"/></div>
                       <h2>Дима <small>Жених</small></h2>
                       <p>Первый раз мы встретились в 2013 году. Тогда я подумать не могла, что мы решим быть вместе, как говорится, и в горе и радости.</p>
                   </div>

               </div>
               <div className="image-divider"></div>
           </section>
        );
    }
});

export default Couple;