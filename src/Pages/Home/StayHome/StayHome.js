import React from "react";

const StayHome = () => {
  return (
    <>
      <div className="container mx-auto my-5 bg-hero-pattern bg-center bg-no-repeat bg-cover rounded-xl">
        <div
          className="container mx-auto"
          style={{
            position: "relative",
            padding: "50px 40px",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#253D4E",
              maxWidth: "600px",
            }}
            className="mb-4"
          >
            Stay home & get your daily needs from our shop
          </h2>
          <p className="mb-10" style={{ fontSize: "18px", color: "#7E7E7E" }}>
            Start Your Daily Shopping with{" "}
            <span className="text-brand">Nest Mart</span>
          </p>
          <form className="subscribe" style={{ color: "#7E7E7E" }}>
            <span
              className="input-bg"
              style={{
                backgroundColor: "#fff",
                padding: "15px 0px",
                borderRadius: "30px",
              }}
            >
              <i
                className="fas fa-paper-plane"
                style={{ paddingLeft: "20px" }}
              ></i>
              <input
                className="pl-5"
                type="email"
                placeholder="Your email address"
                style={{ border: "none", outline: "none" }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#10b981",
                  color: "#fff",
                  fontWeight: "700",
                  cursor: "pointer",
                  padding: "15px 40px",
                  borderRadius: "30px",
                }}
              >
                Subscribe
              </button>
            </span>
          </form>
          <img
            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png"
            alt=""
            style={{
              maxWidth: "40%",
              position: "absolute",
              right: "30px",
              bottom: "0",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default StayHome;
