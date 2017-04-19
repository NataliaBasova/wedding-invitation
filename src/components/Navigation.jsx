import React from 'react';

const Navigation = React.createClass({
    render() {
        return (
            <nav className="nav">
              <ul>
                  <li><a href="">Наша свадьба</a></li>
                  <li><a href="">Приглашение</a></li>
                  <li><a href="">Программа</a></li>
                  <li><a href="">Фото</a></li>
                  <li><a href="">Книга пожеланий</a></li>
                  <li><a href="">Контакты</a></li>
              </ul>
            </nav>
        )
    }
});

export default Navigation;