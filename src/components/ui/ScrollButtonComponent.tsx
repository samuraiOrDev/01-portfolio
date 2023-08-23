import React, { useEffect } from "react";

export const ScrollButtonComponent = () => {
  useEffect(() => {
    document.querySelector(".scroll-button")?.addEventListener("click", () => {
      window.scroll({ top: 0, behavior: "smooth" });
    });
    window.onscroll = function () {
      const scrollButton = document.querySelector(
        ".scroll-button"
      ) as HTMLElement;
      const barScroll = document.querySelector(".bar-scroll") as HTMLElement;

      if (window.innerWidth < 1024) {
        window.scrollY > 40
          ? ((scrollButton.style.display = "block"),
            (barScroll.style.display = "block"))
          : ((scrollButton.style.display = "none"),
            (barScroll.style.display = "none"));
      } else {
        window.scrollY > 40
          ? (scrollButton.style.display = "block")
          : (scrollButton.style.display = "none");
      }
    };
  }, []);

  return (
    <>
      <button className="scroll-button bg-yellow-600 flex items-center justify-center text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
      <div className="bar-scroll bg-yellow-600"></div>
    </>
  );
};
