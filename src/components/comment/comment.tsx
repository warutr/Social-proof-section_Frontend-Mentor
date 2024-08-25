import React from "react";
import Image from "next/image";

const Comment = () => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:gap-6 xl:h-[280px]">
      {/* Comment Colton Smith*/}
      <div className="flex flex-col gap-6 bg-very-dark-magenta rounded-lg text-white p-9 xl:self-start">
        <div className="flex items-center gap-5">
          <img
            src={"/images/image-colton.jpg"}
            alt=""
            className="w-12 rounded-full"
          />
          <div>
            <h3 className="font-bold">Colton Smith</h3>
            <p className="text-soft-pink">Verified Buyer</p>
          </div>
        </div>
        <p className="text-white">
          &quot; We needed the same printed design as the one we had ordered a
          week prior. Not only did they find the original order, but we also
          received it in time. Excellent! &quot;
        </p>
      </div>

      {/* Comment Irene Roberts */}
      <div className="flex flex-col gap-6 bg-very-dark-magenta rounded-lg text-white p-9 xl:self-center">
        <div className="flex items-center gap-5">
          <img
            src={"/images/image-irene.jpg"}
            alt=""
            className="w-12 rounded-full"
          />
          <div>
            <h3 className="font-bold">Irene Roberts</h3>
            <p className="text-soft-pink">Verified Buyer</p>
          </div>
        </div>
        <p className="text-white">
          &quot;Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery. &quot;
        </p>
      </div>

      {/* Comment Anne Wallace */}
      <div className="flex flex-col gap-6 bg-very-dark-magenta rounded-lg text-white p-9 xl:self-end">
        <div className="flex items-center gap-5">
          <img
            src={"images/image-anne.jpg"}
            alt=""
            className="w-12 rounded-full"
          />
          <div>
            <h3 className="font-bold">Anne Wallace</h3>
            <p className="text-soft-pink">Verified Buyer</p>
          </div>
        </div>
        <p className="text-white">
          &quot; Put an order with this company and can only praise them for the
          very high standard. Will definitely use them again and recommend them
          to everyone! &quot;
        </p>
      </div>
    </div>
  );
};

export default Comment;
