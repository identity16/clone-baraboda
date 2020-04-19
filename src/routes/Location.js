import React from "react";
import "./Location.scss";
import Map from "../components/Map";

function Location() {
  return (
    <main className="Location">
      <h1>위치안내</h1>
      <p>
        바라보다는 나무가 있고, 바람이 기분 좋게 부는 이곳에 있어요.
        <br />
        커피와 창 밖을, 그리고 우리 만나요.
      </p>
      <section className="Location__info">
        <ul>
          <li>
            <strong>영업안내</strong>평일 오전 11시~오후 10시
          </li>
          <li>금/토요일은 오후 11시까지 영업합니다.</li>
        </ul>
        <ul>
          <li>
            <strong>전화번호</strong>
            <a href="tel:031-576-0007">031-576-0007</a>
          </li>
          <li>
            <strong>주소</strong>
            경기도 남양주시 조안면 다산로 566-3
          </li>
        </ul>
      </section>
      <section className="Location__map">
        <Map />
        <button>네이버 지도로 보기</button>
      </section>
      <section className="Location__check">
        <ul>
          <li>
            <img src="https://picsum.photos/85/84" alt="no food" />
            <p>
              <strong>외부음식</strong>
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/85/84" alt="no food" />
            <p>
              <strong>애완견</strong>
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/85/84" alt="no food" />
            <p>
              <strong>담배</strong>
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/85/84" alt="no food" />
            <p>
              <strong>와이파이</strong>
            </p>
          </li>
          <li>
            <img src="https://picsum.photos/85/84" alt="no food" />
            <p>
              <strong>CCTV</strong>
            </p>
          </li>
        </ul>
      </section>
      <section className="Location__typo">
        <p>
          사람 기억 그리고 커피 모두가 함께 추억이 되는 공간
          <br />
          세상밖으로 나온 커피, 세상과 함께하는 카페
        </p>
        <h3>바라보다</h3>
      </section>
      <img
        className="Location__sketch"
        src="https://picsum.photos/1127/572"
        alt="sketch"
      />
    </main>
  );
}

export default Location;
