import { useEffect } from "react";

export const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (x, y) => {
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
    };

    const handleMouseMove = (e) => {
      moveCursor(e.clientX, e.clientY);
      if (cursor) cursor.style.display = "block";
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (touch) {
        moveCursor(touch.clientX, touch.clientY);
        if (cursor) cursor.style.display = "block";
      }
    };

    const handleTouchStart = () => {
      if (cursor) cursor.style.display = "block";
    };

    const handleTouchEnd = () => {
      if (cursor) cursor.style.display = "none";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return <div className="cursor fixed top-0 left-0 pointer-events-none hidden sm:block"></div>;
};
