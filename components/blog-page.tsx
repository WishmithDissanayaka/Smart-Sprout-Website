"use client"

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/pagination"


const blogPosts = [
  {
    title: "Crop Intelligence",
    image: "image1.jpg",
    content:
      "Maximize yields with AI-driven crop monitoring! Real-time insights help detect issues early for healthier, more productive farms.",
  },
  {
    title: "Smart Harvest: AI-Powered Predictions for Farming",
    image: "image2.jpg",
    content:
      "Timing is key in farming! AI-driven predictive analytics analyzes weather, soil, and crop conditions to determine the best planting and harvesting times, maximizing yields with precision.",
  },
  {
    title: "Max Yield",
    image: "image3.avif",
    content:
      "Smart farming meets data! AI-driven insights help optimize crop yields, reduce waste, and boost efficiency for a more sustainable harvest.",
  },
  {
    title: "Climate Sync",
    image: "image4.webp",
    content:
      "Stay ahead of the weather! Smart forecasting and automated climate response ensure crops thrive in changing conditions for better yields and less risk.",
  },
  {
    title: "Agri Connect",
    image: "image5.jpg",
    content:
      "Grow smarter with expert insights! Connect with agricultural professionals, share knowledge, and make informed farming decisions for better yields.",
  },
  {
    title: "Sustainable Farming Practices",
    image: "image6.jpg",
    content:
      "Learn about eco-friendly farming methods that promote soil health, reduce water consumption, and increase yields sustainably.",
  },
]

export function BlogSection() {
  return (
    <div className="py-20 bg-gradient-to-br from-leaf-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-space text-4xl font-bold mb-4 text-leaf-400">Latest Blog Posts</h2>
          <p className="text-xl text-leaf-300 max-w-2xl mx-auto">
            Stay updated with the latest advancements and trends in agricultural technology.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 10000 }}
          className="w-full max-w-4xl mx-auto"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl overflow-hidden"
              >
                <div
                  className="h-60 bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <h3 className="font-space text-2xl font-bold text-leaf-400 mt-4">{post.title}</h3>
                <p className="text-gray-600 text-md mt-2">{post.content}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}