import React from 'react'
import { Link } from 'react-router-dom'

const Article = () => {
  return (
    <div>
    <div className="container">
    <div className="header">
      <div className="header-logo">
        <img src="adilet.svg" alt="" />
      </div>
      <div className="header-links">
        <li><a href="#">О нас</a></li>
        <li><a href="#">Сотрудничество</a></li>
        <li className="header-langs">
          <a className="active" href="#">KG</a>
          <a href="#">RU</a>
        </li>
      </div>
      <button type="button">
        +
      </button>
      </div>
    </div>

    <div className="article">
    <div className="container">
      <div className="article-header">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
      </div>
      <div className="article-deckription">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus incidunt labore nemo officiis accusantium earum, neque adipisci facilis. Beatae animi, blanditiis rem perspiciatis! Repellendus perspiciatis, ipsa maxime non reprehenderit optio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur modi, mollitia voluptatum harum incidunt ducimus in atque distinctio aliquid, impedit vero culpa nam! Quidem autem aliquam, dolorum inventore officia iste.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam distinctio voluptatum voluptates? Ratione culpa, praesentium incidunt maxime. Ipsum ipsam accusamus, facere minus sapiente fugit, eligendi neque itaque officia pariatur temporibus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde eligendi voluptates aliquam delectus aperiam reprehenderit accusantium voluptate, saepe dignissimos. Unde labore a quod, alias tenetur necessitatibus vitae fugit nam, quos.</p>
      </div>
      <div className="article-links">
        <div className="article-item">
          <div className="article-item-header">
          lorem
          </div>
          <div className="article-item-description">
          <a href="">Lorem</a>
          </div>
        </div>
        <div className="article-item">
          <div className="article-item-header">
          lorem
          </div>
          <div className="article-item-description">
          <a href="">Lorem</a>
          </div>
        </div>
        <div className="article-item">
          <div className="article-item-header">
          lorem
          </div>
          <div className="article-item-description">
          <a href="">Lorem</a>
          </div>
        </div>
        <div className="article-item">
          <div className="article-item-header">
          lorem
          </div>
          <div className="article-item-description">
          <a href="">Lorem</a>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div className="container">
      <div className="footer-l">
      <div className="footer-links col-lg-6 col-sm-6 ">
        <p>Карта сайта</p>
        <a href="#">О нас</a>
        <a href="#">Сотрудничесиво</a>
        <a href="#">Обучение</a>
      </div>
      <div className="footer-map col-lg-6 col-sm-6 ">
        <p>Контакты</p>
        <a href="#">+416516134564</a>
        <a href="#">+546165191616</a>
        <a href="#">+616516546516</a>
        <a href="#">+651616546513</a>
      </div>
      </div>

    </div>
    <div className="copyright col-lg-12">
      blablablablakek
    </div>
    </div>
  )
}

Article.propTypes = {}

export default Article
