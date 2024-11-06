
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
    return (
      <section>
        <SectionTitle subHeading={"ORDER ONLINE"} heading={"From 11:00am to 10:00pm"}></SectionTitle>
          <div className='max-w-6xl mx-auto mb-9'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="../../../src/assets/home/slide1.jpg" alt="" />
                    <p className='font-normal text-center text-3xl text-white -mt-16'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../../src/assets/home/slide2.jpg" alt="" />
                    <p className='font-normal text-center text-3xl text-white -mt-16'>Salads</p>
                    </SwiperSlide>
                <SwiperSlide><img src="../../../src/assets/home/slide3.jpg" alt="" />
                <p className='font-normal text-center text-3xl text-white -mt-16'>Soups</p>
                </SwiperSlide>
                <SwiperSlide><img src="../../../src/assets/home/slide4.jpg" alt="" />
                <p className='font-normal text-center text-3xl text-white -mt-16'>pizzas</p>
                </SwiperSlide>
                <SwiperSlide><img src="../../../src/assets/home/slide5.jpg" alt="" />
                <p className='font-normal text-center text-3xl text-white -mt-16'>desserts</p>
                </SwiperSlide>
                <SwiperSlide><img src="../../../src/assets/home/slide1.jpg" alt="" />
                <p className='font-normal text-center text-3xl text-white -mt-16'>Salads</p>
                </SwiperSlide>
                <SwiperSlide><img src="../../../src/assets/home/slide2.jpg" alt="" />
                <p className='font-normal text-center text-3xl text-white -mt-16'>Soups</p>
                </SwiperSlide>
                <SwiperSlide><img src="../../../src/assets/home/slide3.jpg" alt="" />
                <p className='font-normal text-center text-3xl text-white -mt-16'>desserts</p>
                </SwiperSlide>
                <SwiperSlide><img src="../../../src/assets/home/slide4.jpg" alt="" />
                <p className='font-normal text-center text-3xl text-white -mt-16'>pizzas</p>
                </SwiperSlide>
            </Swiper>
        </div>
      </section>
    );
};

export default Category;
