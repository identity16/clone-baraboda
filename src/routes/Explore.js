import React from "react";
import "./Explore.scss";

function Explore() {
  return (
    <main className="Explore">
      <h1>둘러보기</h1>
      <section className="Explore__gallery">
        <article className="Explore__gallery__item">
          <img src="https://picsum.photos/1024/518" alt="thumbnail" />
        </article>
      </section>
      <button className="Explore__btn-more">더보기</button>
    </main>
  );
}

export default Explore;
