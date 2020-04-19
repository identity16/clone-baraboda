import React from "react";
import "./BrandStory.scss";

function BrandStory() {
  return (
    <main className="BrandStory">
      <h1>브랜드 이야기</h1>
      <section className="BrandStory__content1">
        <p>
          내 작은 다이어리에, 혹은 수첩 속 구겨진 종이에
          <br />
          몇 번은 적어 보았을 그리움과 사람 그리고 바람에 대한 작은 이야기들
          <br />
          여러분들과 그 감성을 나누고 싶습니다.
        </p>
        <img src="https://picsum.photos/1136/673" alt="caligraphy" />
      </section>
      <section className="BrandStory__content2">
        <article className="BrandStory__content2__logo-images">
          <img
            className="logo1"
            src="https://picsum.photos/295/295"
            alt="logo"
          />
          <img
            className="logo2"
            src="https://picsum.photos/295/295"
            alt="logo"
          />
          <img
            className="logo3"
            src="https://picsum.photos/295/295"
            alt="logo"
          />
        </article>
        <article className="BrandStory__content2__description">
          <h2>
            그리움과 사람 그리고
            <br />
            바람에 대한 작은 이야기들.
          </h2>
          <p>
            바라보다는 마음 한 켠에 적어 둔 이야기를 표현하기 위해
            <br />
            작가가 직접 쓴 감성적인 캘리그라피로 로고를 제작하였습니다,
          </p>
        </article>
        <button>로고 다운로드</button>
      </section>
    </main>
  );
}

export default BrandStory;
