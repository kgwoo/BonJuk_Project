import React, { Component } from "react";
import GoodsList from "./GoodsList";
import MenuFooter from "./MenuFooter";
import "./Menu.scss";
import "../../Styles/common.scss";
import "../../Components/TitleSection/TitleSection";
import TitleSection from "../../Components/TitleSection/TitleSection";
import url from "../../Config";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      data: [],
    };
  }
  componentDidMount = () => {
    fetch(`/data/menu${this.state.num}.json`)
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          menu1: json.products,
          num: this.state.num + 1,
        })
      );
    console.log("componentDidMount");
  };

  // componentDidMount = () => {
  //   fetch(url + "/product/category/" + this.state.num)
  //     .then((res) => res.json())
  //     .then((json) =>
  //       this.setState({ data: json.products, num: this.state.num + 1 })
  //     );
  //   console.log("컴디마1");
  // };

  componentDidUpdate = () => {
    if (this.state.num < 5) {
      fetch(`/data/menu${this.state.num}.json`)
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            [`menu${this.state.num}`]: json.products,
            num: this.state.num + 1,
          });
        });
      console.log("componentDidUpdate");
      // console.log(this.state.menu);
    }
  };

  handleClick = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    // console.log(this.state.menu2);
    // console.log("렌더");
    // console.log(this.state.data);
    // console.log(typeof this.state.data);
    return (
      <div className="Menu">
        <TitleSection
          title={"메뉴소개"}
          img={"/Images/sub_visual_bonjuk.jpg"}
        />
        <GoodsList
          menu1={this.state.menu1}
          menu2={this.state.menu2}
          menu3={this.state.menu3}
          menu4={this.state.menu4}
        />
        <MenuFooter />
      </div>
    );
  }
}

export default Menu;
