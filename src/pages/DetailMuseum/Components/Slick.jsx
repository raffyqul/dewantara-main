import React, { useRef } from "react";
import Slider from "react-slick";
import museum1 from "../../../assets/Images/Museum/img-museum1.png";
import museum2 from "../../../assets/Images/Museum/img-museum2.png";
import museum3 from "../../../assets/Images/Museum/img-museum3.png";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IconLocation from "../../../assets/Icon/icon-loc.png";

const Slick = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section className="pt-10 pb-12">
      <div className="container mx-auto">
        <div className="content flex flex-col gap-6">
          <div className="content-top flex justify-between items-center">
            <h2>Lihat Museum Lainnya</h2>
            <div className="wrap inline-flex gap-4">
              <button
                className="btn btn-arrow"
                id="prev"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 19L3 12L10 5"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12H21"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="btn btn-arrow"
                id="next"
                onClick={() => sliderRef.current.slickNext()}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 5L21 12L14 19"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12H3"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="content-bottom slider-wrapper">
            <Slider ref={sliderRef} className="slider flex gap-6" {...settings}>
              {" "}
              <div className="card flex flex-col gap-2 ">
                <img src={museum1} alt="Museum 1" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Jakarta
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Jakarta Barat, Jakarta
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img
                        src={IcArrow}
                        alt="Arrow Icon"
                        className="max-w-[16px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2 ">
                <img src={museum2} alt="Museum 2" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Banyumas
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Banyumas, Jawa Tengah
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img
                        src={IcArrow}
                        alt="Arrow Icon"
                        className="max-w-[16px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2 ">
                <img src={museum3} alt="Museum 3" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Kulit Wonogiri
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Wonogiri, Jawa Tengah
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img
                        src={IcArrow}
                        alt="Arrow Icon"
                        className="max-w-[16px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2 ">
                <img src={museum1} alt="Museum 1" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Jakarta
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Jakarta Barat, Jakarta
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img
                        src={IcArrow}
                        alt="Arrow Icon"
                        className="max-w-[16px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2 ">
                <img src={museum2} alt="Museum 2" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Banyumas
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Banyumas, Jawa Tengah
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img
                        src={IcArrow}
                        alt="Arrow Icon"
                        className="max-w-[16px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2 ">
                <img src={museum3} alt="Museum 3" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Kulit Wonogiri
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img
                        src={IconLocation}
                        alt="Location Icon"
                        className="max-w-[24px]"
                      />
                      <span className="text-sm text-lightBlack font-medium">
                        Wonogiri, Jawa Tengah
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img
                        src={IcArrow}
                        alt="Arrow Icon"
                        className="max-w-[16px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* Tambahkan lebih banyak kartu jika diperlukan */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slick;
