import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./routes/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Prologue from "./routes/Prologue";

export default function App() {
  const menus = [
    {
      name: "바라보다 소개",
      link: "/prologue",
      subMenus: [
        {
          name: "프롤로그",
          link: "/prologue"
        },
        {
          name: "브랜드 이야기",
          link: "/"
        },
        {
          name: "둘러보기",
          link: "/"
        },
        {
          name: "위치안내",
          link: "/"
        }
      ]
    },
    {
      name: "메뉴안내",
      link: "/",
      subMenus: [
        {
          name: "바라보다 메뉴",
          link: "/"
        },
        {
          name: "오늘의 커피",
          link: "/"
        }
      ]
    },
    {
      name: "소통공간",
      link: "/",
      subMenus: [
        {
          name: "커피이야기",
          link: "/"
        },
        {
          name: "공지사항",
          link: "/"
        }
      ]
    }
  ];
  return (
    <div className="App">
      <Router>
        <Navigation logoSrc="https://picsum.photos/185/48" menus={menus} />
        <Route path="/" exact component={Main} />
        <Route path="/prologue" component={Prologue} />
        <Footer />
      </Router>
    </div>
  );
}
