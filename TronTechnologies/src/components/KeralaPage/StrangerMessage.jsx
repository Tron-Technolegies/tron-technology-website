import React from "react";

export default function StrangerMessage() {
  return (
    <div className="px-6 py-16 md:px-20 lg:px-40 bg-white flex flex-col gap-4 text-black items-start font-manrope">
      <p className="text-[#FC650B] text-xl md:text-2xl">Hello Stranger</p>
      <p className="text-lg md:text-2xl lg:text-3xl max-w-full leading-relaxed">
        We are an award-winning strategic design company that provides consultancy services
        worldwide. Our team consists of a superb blend of thinkers, strategists, designers,
        researchers, developers and organisers. Not too big, not too small, quite sensible and
        completely independent.
      </p>
    </div>
  );
}
