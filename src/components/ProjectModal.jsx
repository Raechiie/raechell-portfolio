import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import './ProjectModal.css';

export const ProjectModal = ({
  show,
  onClose,
  title,
  description,
  tech = [],
  images = [],
  videoSrc = null
}) => {
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  if (!show) return null;

  const isGrouped = images.length > 0 && typeof images[0] === 'object' && images[0].images;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a1a] max-w-3xl w-full rounded-2xl p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold transition"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-8">{description}</p>

        <div className="h-px bg-blue-500/20 my-8" />

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-5 text-blue-400">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:brightness-110 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="h-px bg-blue-500/20 my-8" />

        {/* Video Demo */}
        {videoSrc && (
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-5 text-blue-400">Video Demo</h3>
            <video
              src={videoSrc}
              controls
              className="w-full h-64 object-contain rounded-md border border-white/10 shadow-md"
            />
          </div>
        )}

        {images.length > 0 && (
          <>
            <div className="h-px bg-blue-500/20 my-8" />

            {/* Images */}
            {isGrouped ? (
              images.map((section, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-xl font-bold mb-5 text-blue-400">{section.title}</h3>
                  <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="rounded-lg overflow-hidden"
                  >
                    {section.images.map((src, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={src}
                          alt={`${section.title} Slide ${i}`}
                          className="w-full max-h-64 object-contain rounded-md shadow-md"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ))
            ) : (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-5 text-blue-400">System Screenshots</h3>
                <Swiper
                  modules={[Navigation]}
                  navigation={true}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="rounded-lg overflow-hidden"
                >
                  {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={src}
                        alt={`Slide ${idx}`}
                        className="w-full max-h-64 object-contain rounded-md shadow-md"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
