import React from "react";
import Image from "next/image";

type propsType = {
  id: number;
  name: string;
  children: React.ReactNode;
  onDelete: any;
  onEdit: any;
  isEdited: boolean;
};

const CommentSection = (props: propsType) => {
  const { id, name, children, onDelete, onEdit, isEdited } = props;
  return (
    <article
      className={`text-base bg-slate-100 p-4 mt-5 rounded-lg duration-100 ${
        isEdited ? "bg-blue-100 scale-[1.03]" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
            <div className="mr-2 w-6 h-6 relative">
              <Image
                className="w-full rounded-full"
                src="/profile.avif"
                alt="Michael Gough"
                fill
              />
            </div>
            {name}
          </div>
          <p className="text-sm text-gray-600 ">
            <time dateTime="2022-02-08" title="February 8th, 2022">
              8/9/2023
            </time>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            id="edit-comment"
            data-dropdown-toggle="dropdownComment1"
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-gray-50  "
            type="button"
            onClick={() => {
              onEdit(id);
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-2.3 6.35c.22-.21.22-.56 0-.77L15.42 7.3a.532.532 0 00-.77 0l-1 1 2.05 2.05 1-1M7 14.94V17h2.06l6.06-6.06-2.06-2.06L7 14.94z" />
            </svg>
          </button>
          <button
            id="delete-comment"
            data-dropdown-toggle="dropdownComment1"
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-gray-50  "
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            <svg fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
              <path d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5v7a.5.5 0 01-1 0v-7a.5.5 0 011 0z" />
            </svg>
          </button>
        </div>
      </div>
      <p className="text-gray-500 ">{children}</p>
    </article>
  );
};

export default CommentSection;
