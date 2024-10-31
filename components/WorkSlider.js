// WorkSlider Component
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

const data = {
  data: [
    {
      title: 'Mini Miracle E-commerce',
      path: '/minimiracle.png',
      href: 'https://github.com/Init-Projectx'
    },
    {
      title: 'Todo List App',
      path: '/todos.png',
      href: 'https://github.com/bebek-goreng/todos-minpro'
    },
    {
      title: 'Contact Management using nest',
      path: '/Nest.js.png',
      href: '/portofolio/nest-api'
    }
  ]
}

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[340px] sm:h-[520px]"
    >
      {data.data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center h-full">
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4 w-[90%] sm:w-[80%] lg:w-[70%] shadow-lg border border-white/10 transition-shadow duration-300 hover:shadow-xl">
              <Link href={item.href} className="block cursor-pointer">
                <Image
                  src={item.path}
                  width={500}
                  height={300}
                  alt={item.title}
                  className="object-cover w-full h-48 rounded-md"
                />
                <h3 className="mt-4 text-center text-lg font-semibold text-white">{item.title}</h3>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
