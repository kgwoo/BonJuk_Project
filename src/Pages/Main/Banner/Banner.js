import React, { Component} from "react";
import{Link} from "react-router-dom"
import Slider from "react-slick";
import "./Banner.scss"

 const params = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };

class Banner extends Component {
  state = {  }
  render() { 
    return (
      <div className="Banner">
        <div className="BannerImageSize">
          <Slider {...params}>
            <div>
              <img src="./Images/banner1.png"></img>
            </div>
            <div>
              <img src="./Images/banner2.png"></img>
            </div>
            <div>
              <img src="./Images/banner3.png"></img>
            </div>
            <div>
              <img src="./Images/banner4.png"></img>
            </div>
            <div>
              <img src="./Images/banner5.png"></img>
            </div>
            <div>
              <img src="./Images/banner6.png"></img>
            </div>
          </Slider>
        </div>
        <div className="mainOrderBox">
          {MAIN_ORDER_CONTENTS.map((v) => {
            return (
              <div>
                <Link to="#">
                  <dl>
                    <dt>{v.title}</dt>
                    <dd>{v.mainContent}</dd>
                    <img src="./Images/main_arrow.png"></img>
                  </dl>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const MAIN_ORDER_CONTENTS =[
  {
  title:"주문하기",
  mainContent: "간편한 결제와 신속한 배달"
  },
  {
    title:"선물하기",
    mainContent: "본으로 전하는 따뜻한 마음"
  },
  {
    title:"단체주문",
    mainContent: "02-6908-6377 (200개 이상 주문 시)"
  }
]
 
export default Banner;
