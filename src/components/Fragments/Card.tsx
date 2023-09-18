import React from "react";
import Link from "next/link";

type propsType = {
  title: string;
  imgUrl: string;
  id: number;
};

const Card = ({ title, imgUrl, id }: propsType) => {
  return (
    <Link
      className="flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5   "
      href={`/blog/${id}`}
    >
      <div className="w-full h-52 overflow-hidden rounded-xl bg-red-400">
        <img
          className="w-full object-cover rounded-xl"
          src={imgUrl}
          alt="Image Description"
        />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800  ">{title}</h3>
        <p className="mt-5 text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas labore
          harum pariatur doloremque reprehenderit. Corrupti!
        </p>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <img
          className="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Image Description"
        />
        <div>
          <h5 className="text-sm text-gray-800 ">Oleh Severus Snape</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
