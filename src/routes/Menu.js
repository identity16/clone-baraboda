import React from "react";
import "./Menu.scss";

function Menu() {
  return (
    <main className="Menu">
      <h1>바라보다 메뉴</h1>
      <p>
        세계 각국의 신선한 원두, 6명의 커피 전문가들이
        <br />
        최신 로스팅 시설로 연구하고 테스트한 커피를 제공합니다.
        <br />
        대중들이 선호하는 로스팅 포인트와 블렌딩으로 깊이 있는 맛과 향을
        <br />
        바라보다에서 즐기세요.
      </p>
      <section className="Menu__menu-board">
        <section className="Menu__menu-board__column">
          <article className="Menu__menu-board__menu-item">
            <h2 className="Menu__menu-board__menu-item__title">커피</h2>
            <ul>
              <li>
                <span className="Menu__menu-board__menu-item__name">
                  아메리카노
                </span>
                <span className="Menu__menu-board__menu-item__temperature">
                  핫/아이스
                </span>
                <span className="Menu__menu-board__menu-item__price">5.0</span>
              </li>
            </ul>
          </article>
          <article className="Menu__menu-board__menu-item">
            <h2>커피</h2>
            <ul>
              <li>
                <span className="Menu__menu-board__menu-item__name">
                  아메리카노
                </span>
                <span className="Menu__menu-board__menu-item__temperature">
                  핫/아이스
                </span>
                <span className="Menu__menu-board__menu-item__price">5.0</span>
              </li>
            </ul>
          </article>
        </section>
        <section className="Menu__menu-board__column">
          <article className="Menu__menu-board__menu-item">
            <h2 className="Menu__menu-board__menu-item__title">커피</h2>
            <ul>
              <li>
                <span className="Menu__menu-board__menu-item__name">
                  아메리카노
                </span>
                <span className="Menu__menu-board__menu-item__temperature">
                  핫/아이스
                </span>
                <span className="Menu__menu-board__menu-item__price">5.0</span>
              </li>
            </ul>
          </article>
          <article className="Menu__menu-board__menu-item">
            <h2>커피</h2>
            <ul>
              <li>
                <span className="Menu__menu-board__menu-item__name">
                  아메리카노
                </span>
                <span className="Menu__menu-board__menu-item__temperature">
                  핫/아이스
                </span>
                <span className="Menu__menu-board__menu-item__price">5.0</span>
              </li>
              <li>
                <span className="Menu__menu-board__menu-item__name">
                  아메리카노
                </span>
                <span className="Menu__menu-board__menu-item__temperature">
                  핫/아이스
                </span>
                <span className="Menu__menu-board__menu-item__price">5.0</span>
              </li>
              <li>
                <span className="Menu__menu-board__menu-item__name">
                  아메리카노
                </span>
                <span className="Menu__menu-board__menu-item__temperature">
                  핫/아이스
                </span>
                <span className="Menu__menu-board__menu-item__price">5.0</span>
              </li>
            </ul>
          </article>
        </section>
      </section>
      <section className="Menu__purchase">
        <p>
          바라보다에서 마시는 커피는
          <br />
          미스터콩 쇼핑몰에서 구입하실 수 있습니다.
        </p>
        <button>미스터콩 쇼핑몰 가기</button>
      </section>
    </main>
  );
}

export default Menu;
