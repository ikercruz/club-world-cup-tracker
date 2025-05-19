import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function MatchSlider() {
  const headlines = [
    "🏆 Club World Cup Kicks Off!",
    "🔥 Real Madrid Faces Al Ahly in Semis",
    "🎫 Tickets Now Available for Final Match"
  ];

  return (
    <div className="mt-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="bg-indigo-100 p-4 rounded shadow"
      >
        {headlines.map((text, index) => (
          <SwiperSlide key={index}>
            <p className="text-center font-medium">{text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
