import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeLoading = () => {
  return (
    <div
      style={{
        marginTop: 120,
      }}
    >
      <Skeleton height={450} width={"100%"} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "1200px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: 50,
              marginTop: 50,
              justifyContent: "center",
            }}
          >
            <Skeleton style={{ borderRadius: 10 }} height={370} width={570} />
            <Skeleton
              height={250}
              width={250}
              style={{ marginLeft: 20, borderRadius: 10 }}
            />
            <Skeleton
              height={250}
              width={250}
              style={{ marginLeft: 20, borderRadius: 10 }}
            />
            <Skeleton
              height={261}
              width={261}
              style={{ marginLeft: 20, marginTop: 50, borderRadius: 10 }}
            />
            <Skeleton
              height={261}
              width={261}
              style={{ marginLeft: 20, marginTop: 50, borderRadius: 10 }}
            />
            <Skeleton
              height={261}
              width={261}
              style={{ marginLeft: 20, marginTop: 50, borderRadius: 10 }}
            />
            <Skeleton
              height={261}
              width={261}
              style={{ marginLeft: 20, marginTop: 50, borderRadius: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoading;
