import React from "react";
import "./Inspiration.scss";
import cloudtea from "../../../assets/image/Inspiration/cloudtea.png";
import cloudteainfo from "../../../assets/image/Inspiration/cloudteainfo.png";

const Inspiration = () => {
  return (
    <div className="Inspiration">
      <div className="inspiration__background">
        <div className="inspiration__container">
          <div className="inspiration__banner row">
            <div className="inspiration__img">
              <img src={cloudtea} alt="" />
            </div>
            <div className="inspiration__info">
              <div className="inspiration__info-img">
                <img src={cloudteainfo} alt="" />
              </div>
              <div className="inspiration__info-des">
                Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, BST Trà Sữa CloudTea
                Hương Vị Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là
                foam béo mịn bồng bềnh, càng thêm đậm đà nhờ topping vụn bánh
                quy phô mai hoặc bột ca cao thơm lừng. Kế tiếp là tầng trà sữa
                sóng sánh, đậm hương, rõ vị. Và tầng thạch nguyên chất, dai giòn
                giúp giữ trọn vị trà sữa đến ngụm cuối cùng. 3 tầng hòa quyện,
                nhấp một ngụm là ghiền, nhớ mãi không thôi.
              </div>
              <div className="inspiration__btn">Thử ngay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
