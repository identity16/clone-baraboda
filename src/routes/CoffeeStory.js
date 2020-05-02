import React from "react";
import "./CoffeeStory.scss";
// import MasonryLayout from "../components/MasonryLayout";
import Card from "../components/Card";
import Masonry from "react-masonry-component";

function CoffeeStory() {
  return (
    <main className="CoffeeStory">
      <h1>커피 이야기</h1>
      <Masonry className="CoffeeStory__masonry-container">
        <Card>1</Card>
        <Card>2</Card>
        <Card>3</Card>
        <Card>4</Card>
        <Card>5</Card>
        <Card>6</Card>
        <Card>7</Card>
      </Masonry>
    </main>
  );
}

export default CoffeeStory;
