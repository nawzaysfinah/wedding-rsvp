import { useRef, useEffect } from "react";
import photo1 from "../assets/gallery/photo1.jpeg";
import photo2 from "../assets/gallery/photo2.jpeg";
import photo3 from "../assets/gallery/photo3.jpeg";
import photo4 from "../assets/gallery/photo4.jpeg";

const images = [photo1, photo2, photo3, photo4];

export default function Gallery() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.style.scrollbarWidth = "none";
      container.style.msOverflowStyle = "none";
    }
    let scrollAmount = 0;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1;
        scrollAmount += 1;

        // Reset scroll when half of the duplicated list is scrolled
        if (scrollAmount >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen md:h-screen w-full flex items-start pt-[50px]">
      <div className="w-[95%] sm:w-[90%] mx-auto overflow-hidden py-4 sm:py-8 rounded-[20px]">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll scrollbar-hide"
          style={{
            scrollBehavior: "auto",
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflow: "scroll",
            opacity: "1",
            scrollbarColor: "transparent transparent",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Photo ${index + 1}`}
              className="w-[300px] h-[450px] sm:w-[400px] sm:h-[600px] object-cover rounded-xl shadow-lg mx-2 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
