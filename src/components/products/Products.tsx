import { Link } from "react-router-dom";
import "./Products.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import patek from "../../db/resource";

const Products = () => {
  return (
    <section className="products" id="products" role="selection">
      <div className="products__wrapper">
        <h3 className="products__title">
          Patek Philippe <span>Watches</span>
        </h3>
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
          }}
          navigation={true}
          breakpoints={{
            375: {
              slidesPerView: 1.5,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            500: {
              slidesPerView: 2.5,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 3.5,
              slidesPerGroup: 3,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 4.5,
              slidesPerGroup: 4,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 5.5,
              slidesPerGroup: 5,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 6.5,
              slidesPerGroup: 6,
              spaceBetween: 10,
            },
            1300: {
              slidesPerView: 7.5,
              slidesPerGroup: 7,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 8,
              slidesPerGroup: 8,
              spaceBetween: 10,
            }
          }}
          modules={[Pagination, Navigation]}
          className="products__list"
          watchOverflow={true}
          loop={false}
          loopFillGroupWithBlank={false}
          slidesPerGroupAuto={true}
        >
          {patek.map((collection) => {
            const { title, pathname, main_image, products, model_code } = collection;
            return (
              <SwiperSlide key={pathname}>
                <Link to={`/collection/${pathname}`} className="product__wrapper">
                  <div className="product">
                    <img src={main_image} alt={title} />
                    <p>{title}</p>
                    <p className="link link--outline">{products.length} models</p>
                    <p>{model_code}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
