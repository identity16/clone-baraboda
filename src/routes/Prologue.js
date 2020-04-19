import React from "react";
import "./Prologue.scss";
import Carousel from "../components/Carousel";

function Prologue() {
  return (
    <main className="Prologue">
      <h1>프롤로그</h1>
      <p>
        커피와 당신 사이에, 서로를 바라볼 수 있는 공간이 있습니다.
        <br />
        커피를 향한 우리의 마음은 카페 바라보다의 공간 속에서 향기로 전해집니다.
        <br />
        미스터콩의 좋은 로스팅 원두와 어울리는 카페 레시피로 당신을 만나는 카페
        바라보다 입니다.
      </p>
      <section className="Prologue__main-content">
        <img src="https://picsum.photos/853/844" alt="pouring coffee" />
        <div className="vtext-container">
          <p className="vertical-text">콩으로 시작하여</p>
          <p className="vertical-text">공간으로 완성되다.</p>
        </div>
      </section>
      <section className="Prologue__content1">
        <img
          className="Prologue__content--right"
          src="https://picsum.photos/213/305"
          alt="cup with coffee"
        />
        <p>
          미스터콩이 제공하는 좋은 원두가 미스터콩이 마련한 아름다운 공간에서
          <br />
          향기로운 커피 한잔과 함께 당신에게 소중한 추억이 될 수 있기를
          바라봅니다.
        </p>
      </section>
      <Carousel />
      <section className="Prologue__content2">
        <h2>
          우리의 시작은 미스터였지만
          <br />
          그것의 완성은 마스터입니다
        </h2>
        <p>
          단순히 좋은 원두와 커피용품을 소개하고
          <br />
          제공하는 것을 넘어 그 이상을 원하기 때문입니다.
          <br />
          커피를 향한 관심과 사랑이 있는 문화를 우리가 앞장 서 모두에게 제안하려
          합니다.
          <br />
          맛과 향, 품질, 제공 이것의 다음으로 우리는
          <br />
          경험과 이야기 추억과 낭만, 인연과 공간을 나누기를 바라봅니다.
        </p>
      </section>
      <section className="Prologue__content3">
        <img src="https://picsum.photos/760/356" alt="cafe" />
        <p>
          언제부턴가 우리의 일상 속 작은 부분부터 특별한 순간에 이르기까지 많은
          <br />
          부분을 함께하고 있는 커피. 모두들 다양한 삶의 방식 만큼이나 다양한
          방법과 언어, 시간,
          <br />
          그리고 공간으로 커피를 만나게 됩니다.
          <br />
          이곳 바라보다에서 커피와 함께하는 순간들이 좀더 즐거워지고 여유롭고
          설레는
          <br />
          시간이 되면 좋겠습니다.
        </p>
      </section>
    </main>
  );
}

export default Prologue;
