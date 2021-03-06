import React, { Component } from "react";
import Origin from "./Origin";
import "./Introduction.scss";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClass: "myMenu",
      menuImage: "/Images/menu.png",
      borderColor: "",
      originClass: "Origin",
    };
  }

  handleBtnColor = () => {
    this.setState({
      menuClass: this.state.menuClass === "myMenu" ? "activeMyMenu" : "myMenu",
    });
  };

  handleImg1 = () => {
    this.setState({
      menuImage: "/Images/menu.png",
    });
  };

  handleImg2 = () => {
    this.setState({
      menuImage: "/Images/menu_subimage.png",
    });
  };

  handleOriginClass = () => {
    this.setState({
      originClass: "activeOrigin",
    });
  };

  closeOriginProps = () => {
    this.setState({
      originClass: "Origin",
    });
  };

  render() {
    return (
      <div className="Introduction">
        <div className="detailContainer">
          <div className="infoContainer">
            <img alt="menu" className="menu" src="/Images/menu.png" />
            <div className="wholeContainer">
              <p className="name">삼계전복죽</p>
              <p className="intro">
                삼복 더위 이기는 영양 가득 최고의 보양 한 그릇
              </p>
              <div className="priceContainer">
                <strong className="price">15000</strong>
                <span className="unit">원</span>
              </div>
              <div className="btnContainer">
                <div className="btn">
                  <button
                    onClick={this.handleBtnColor}
                    className={this.state.menuClass}
                    type="button"
                  >
                    <div className="likeIcon" alt="like-icon" />
                    MY메뉴
                  </button>
                  <button
                    onClick={this.handleOriginClass}
                    className="origin"
                    type="button"
                  >
                    원산지정보
                  </button>
                </div>
              </div>
              <div className="bar"></div>
              <p className="summary">
                푹 고아 부드럽고 진한 닭고기에 전복까지 더해진 최고의 보양식!
                <br />
                국내산 수삼 한 뿌리까지 통째로 들어간 완벽한 영양 한 그릇으로
                <br />
                깊고 진한 진짜 보양식을 만나보세요.
              </p>

              <div className="previewImage">
                <img
                  onClick={this.handleImg1}
                  alt="subimage1"
                  className={
                    this.state.menuImage === "menu.png" ? "subImage1" : ""
                  }
                  src="/Images/menu.png"
                />
                <img
                  onClick={this.handleImg2}
                  alt="subimage2"
                  className={
                    this.state.menuImage === "menu.png" ? "subImage2" : ""
                  }
                  src="/Images/menu_subimage.png"
                />
              </div>
            </div>
            <div className="shareContainer">
              <div className="fbContainer">
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fshare.php%3Fu%3Dhttps%253A%252F%252Fwww.bonif.co.kr%252Fmenu%252Fsns%252Fshare%253FcmdtIdx%253D11&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ko_KR">
                  <div alt="facebookIcon" className="facebook"></div>
                </a>
              </div>
              <div className="linkContainer">
                <div alt="linkIcon" className="link"></div>
              </div>
            </div>
          </div>
        </div>
        <Origin
          originClass={this.state.originClass}
          closeOriginProps={this.closeOriginProps}
        />
      </div>
    );
  }
}

export default Introduction;
