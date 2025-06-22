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
    <div className="w-full overflow-hidden py-8">
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide"
        style={{ scrollBehavior: "auto", whiteSpace: "nowrap" }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Photo ${index + 1}`}
            className="w-[400px] h-[600px] object-cover rounded-xl shadow-lg mx-2 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
