"use client";
import React from "react";
import CasePoke from "@/Components/Utilities/Case";
import Light from "./Light";
import Led from "../Utilities/Led";

function Case() {
  return (
    <div className="w-600 h-700 bg-caseColor rounded-5 relative">
      <Led />
      <div className="w-164 h-43.5 flex items-end justify-end">
        <Light color="red" />
        <Light color="#FFFF00" />
        <Light color="#DDFF00" />
      </div>
      <div className="top-43.5 absolute">
        <CasePoke />
      </div>
      <div className="flex relative">
        <div className="h-656 flex items-center justify-start ">
          <button className="ml-3">
            <img
              src="https://res.cloudinary.com/ivannavas/image/upload/v1721969104/pokedex/iconos/nfcikaikllexutqdlw5a.svg"
              alt="open_pokedex_button"
            />
          </button>
        </div>
        <section className="h-full absolute right-0">
          <div className="w-28 h-5% border border-transparent border-l-black border-b-black"></div>
          <div className="w-28 h-90% border border-transparent border-l-black"></div>
          <div className="w-28 h-5% border border-transparent  border-l-black border-t-black"></div>
        </section>
      </div>
    </div>
  );
}

export default Case;
