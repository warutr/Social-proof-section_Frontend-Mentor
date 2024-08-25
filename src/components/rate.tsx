import React from "react";
import IconStar from "../imgs/icon-star";

const Rate = () => {
  return (
    <div className="flex flex-col gap-4 w-full xl:w-1/2">
      <div className="flex flex-col items-center gap-3 bg-light-grayish-magenta py-2 rounded-xl xl:flex-row xl:w-[75%] xl:justify-center xl:gap-6 xl:self-start">
        <div className="flex gap-2">
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </div>
        <p className="text-very-dark-magenta font-bold ">
          Rated 5 Stars in Reviews
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 bg-light-grayish-magenta py-2 rounded-xl xl:flex-row xl:w-[75%] xl:justify-center xl:gap-6 xl:self-center">
        <div className="flex gap-2">
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </div>
        <p className="text-very-dark-magenta font-bold ">
          Rated 5 Stars in Reviews
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 bg-light-grayish-magenta py-2 rounded-xl xl:flex-row xl:w-[75%] xl:justify-center xl:gap-6 xl:self-end">
        <div className="flex gap-2">
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </div>
        <p className="text-very-dark-magenta font-bold ">
          Rated 5 Stars in Reviews
        </p>
      </div>
    </div>
  );
};

export default Rate;
