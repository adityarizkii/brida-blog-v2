import React from "react";
import AppShell from "@/components/Layouts/AppShell";
import Card from "@/components/Fragments/Card";
import data from "@/data/data.json";

const Main = () => {
  return (
    <AppShell>
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 flex flex-col items-center gap-2">
          <div className="w-56 h-56 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt=""
              className="w-full"
            />
          </div>
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            Severus Snape
          </h2>
          <p className="mt-1 text-gray-600 ">
            Sebagai UI designer, saya menciptakan design UI yang menggabungkan
            kemudahan dan estetika, meningkatkan pengalaman pengguna dalam
            berinteraksi dengan produk atau aplikasi.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((eachData) => (
            <Card
              key={eachData.id}
              id={eachData.id}
              title={eachData.title}
              imgUrl={eachData.imgUrl}
            />
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default Main;
