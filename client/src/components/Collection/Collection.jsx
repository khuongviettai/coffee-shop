import React, { useEffect, useState } from "react";
import "./Collection.scss";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import instant from "../../routes/instant";
const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await instant.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="Collection">
      <div className="collection__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-3 col-xs-12 col-sm-12 collection__sidebar-left">
              <div className="collection__sidebar-menu">
                <ul className="sidebar__menu-items">
                  <li className="sidebar__menu-list">
                    <Link href="" className="sidebar__menu-list--link">
                      Cà phê
                    </Link>
                  </li>
                  <li className="sidebar__menu-list">
                    <Link href="" className="sidebar__menu-list--link">
                      Trà
                    </Link>
                  </li>
                  <li className="sidebar__menu-list">
                    <Link href="" className="sidebar__menu-list--link">
                      Snack
                    </Link>
                  </li>
                  <li className="sidebar__menu-list">
                    <Link href="" className="sidebar__menu-list--link">
                      Khác
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-9 col-md 9 col-xs-12 col-sm-12 collection__item-right">
              <div className="flex-wrap dis-flex menu-lists menu__lists-item">
                {products.map((item, index) => {
                  return (
                    <Item
                      id={item._id}
                      image={item.image[0]}
                      title={item.title}
                      price={item.price}
                      item={item}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
