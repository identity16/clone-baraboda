import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="Footer">
      <img src="https://picsum.photos/85/106" alt="footer" />
      <p>
        미스터콩이 제공하는 좋은 원두가 미스터콩이 마련한 아름다운 공간에서
        좋은커피 한잔과 함께
        <br />
        소중한 경험으로 남을 수 있도록 하겠습니다.
      </p>
      <button>미스터콩 쇼핑몰 바로가기</button>
      <p className="Footer__info">
        <address>주소 : 경기도 남양주시 조안면 다산로 566-3</address>
        TEL.<a href="tel:031-576-0007">031-576-0007</a>
      </p>
      <p className="Footer__copyright">
        COPYRIGHT © BARABODA. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}

export default Footer;
