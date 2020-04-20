import React from "react";
import "./TodayCoffee.scss";

function TodayCoffee() {
  return (
    <main className="TodayCoffee">
      <h1>오늘의 커피</h1>
      <p>
        멈춰버린 시간과 공간 속에서 퍼져나가는 맛과 향을 바라보다.
        <br />
        오늘 하루와 가장 어울리는 커피를 추천해 드립니다.
      </p>
      <section className="TodayCoffee__coffee-container">
        <img src="https://picsum.photos/514/514" alt="sketch" />
        <article className="TodayCoffee__coffee-container__coffee">
          <h2>에티오피아 예가체프 파라살라</h2>
          <ul>
            <li>
              <span className="TodayCoffee__coffee-container__coffee__label">
                농장
              </span>{" "}
              | 파라살라
            </li>
            <li>
              <span className="TodayCoffee__coffee-container__coffee__label">
                지역
              </span>{" "}
              | 예가체프
            </li>
            <li>
              <span className="TodayCoffee__coffee-container__coffee__label">
                품종
              </span>{" "}
              | 에티오피안
            </li>
            <li>
              <span className="TodayCoffee__coffee-container__coffee__label">
                가공
              </span>{" "}
              | 네추럴 프로세싱
            </li>
            <li>
              <span className="TodayCoffee__coffee-container__coffee__label">
                로스팅
              </span>{" "}
              | 2017. 9. 17
            </li>
            <li>
              <span className="TodayCoffee__coffee-container__coffee__label">
                향미
              </span>{" "}
              | 라즈베리, 코코아, 라운드, 크리미, 긴 여운, 라즈베리
            </li>
          </ul>
          <button>구매하기</button>
        </article>
      </section>
    </main>
  );
}

export default TodayCoffee;
