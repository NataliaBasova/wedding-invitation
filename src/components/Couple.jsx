import React from 'react';

const Couple = React.createClass({
    render() {
        return (
           <section className="couple">
               <div className="couple-container">
                    <div className="photo-item">
                        <img src="./img/couple/groom1.jpg" alt="Дима"/>
                        <div className="his-her-name">
                            <h2>ШМАТОВ<span className="last-name">&nbsp;Дима</span></h2>
                        </div>
                    </div>
                    <div className="photo-item">
                        <img src="./img/couple/groom1.jpg" alt="Дима"/>
                        <div className="his-her-name">
                            <h2>БАСОВА<span className="last-name">&nbsp;Наташа</span></h2>
                        </div>
                     </div>   
               </div>
           </section>
        );
    }
});

export default Couple;