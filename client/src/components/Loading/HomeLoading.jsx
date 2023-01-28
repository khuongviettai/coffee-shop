import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);
const HomeLoading = () => {
  return (
    <div>
      <div className={cx("HomeLoadingWrap")}>
        <Skeleton height={565} width={2000} />
      </div>
    </div>
  );
};

export default HomeLoading;
