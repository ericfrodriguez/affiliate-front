import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

// eslint-disable-next-line
const Slide = ({ image }) => (
	<SwiperSlide className="text-center text-lg flex justify-center items-center bg-sky-500 shadow-sm rounded-lg overflow-hidden">
		<img className="w-full h-full object-cover" src={`/images/${image}`} alt="" />
	</SwiperSlide>
)

export const CarouselBenefits = () => {
	const images = [
		'renovatium.jpg',
		'renovatium.jpg',
		'renovatium.jpg',
	]

	return (
		<Swiper
			spaceBetween={50} q
			slidesPerView={1}
			pagination={true}
			navigation={true}
			centeredSlides={true}
			modules={[Pagination, Autoplay, Navigation]}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			className="w-11/12 h-full sm:w-6/12 p-8"
		>
			{
				images.map((image, index) => (
					<SwiperSlide key={index} className="text-center text-lg flex justify-center items-center bg-sky-500 shadow-sm rounded-lg overflow-hidden">
						<img className="w-full h-full object-cover" src={`/images/${image}`} alt="" />
					</SwiperSlide>
				))
			}
		</Swiper>
	);
};
