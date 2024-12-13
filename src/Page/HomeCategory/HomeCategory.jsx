
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const CategoryAndCarousel = () => {
  return (
    <div className="flex w-full">
      {/* Danh mục bên trái */}
      <div className="w-1/4 bg-gray-100 p-4">
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 flex items-center justify-between"
            >
              {category} <span>›</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          className="rounded-lg overflow-hidden border border-blue-500"
        >
          <SwiperSlide>
            <div className="bg-black text-white flex items-center justify-between p-8">
              <div>
                <h3 className="text-xl font-semibold">iPhone 14 Series</h3>
                <p className="text-3xl font-bold">Up to 10% off Voucher</p>
                <button className="mt-4 px-4 py-2 bg-white text-black font-medium rounded">
                  Shop Now →
                </button>
              </div>
              <img
                src="https://images.apple.com/v/iphone-14-series/b/images/meta/og__c1lyoxd2mqyq_overview.png"
                alt="iPhone 14"
                className="h-48"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-800 text-white flex items-center justify-between p-8">
              <div>
                <h3 className="text-xl font-semibold">MacBook Pro</h3>
                <p className="text-3xl font-bold">Exclusive Offers</p>
                <button className="mt-4 px-4 py-2 bg-white text-black font-medium rounded">
                  Shop Now →
                </button>
              </div>
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-pro-14-og-202310"
                alt="MacBook Pro"
                className="h-48"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryAndCarousel;
