import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleProductLoading = () => {
  return (
    <div style={{ marginTop: "150px", maxWidth: "1200px" }}>
      <div style={{ display: "flex" }}>
        <div>
          <Skeleton width={570} height={570} style={{ marginLeft: "150px" }} />
          <div style={{ display: "flex" }}>
            <Skeleton
              width={150}
              height={150}
              style={{ marginTop: 30, marginLeft: "150px" }}
            />
            <Skeleton
              width={150}
              height={150}
              style={{ marginTop: 30, marginLeft: "20px" }}
            />
            <Skeleton
              width={150}
              height={150}
              style={{ marginTop: 30, marginLeft: "20px" }}
            />
          </div>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <Skeleton width={350} height={40} />
          <Skeleton width={80} height={30} style={{ marginTop: "30px" }} />
          <div style={{ display: "flex" }}>
            <Skeleton width={80} height={50} style={{ marginTop: "30px" }} />
            <Skeleton
              width={80}
              height={50}
              style={{ marginTop: "30px", marginLeft: "20px" }}
            />
            <Skeleton
              width={80}
              height={50}
              style={{ marginTop: "30px", marginLeft: "20px" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Skeleton width={80} height={50} style={{ marginTop: "30px" }} />
            <Skeleton
              width={180}
              height={50}
              style={{ marginTop: "30px", marginLeft: "20px" }}
            />
            <Skeleton
              width={180}
              height={50}
              style={{ marginTop: "30px", marginLeft: "20px" }}
            />
          </div>
          <Skeleton width={360} height={50} style={{ marginTop: 150 }} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductLoading;
