import React from "react";
import { Icon } from "@iconify/react";
import Group1 from "../pictures/asked.svg";

function Contact() {
  return (
    <div className="mx-20 my-12 flex bg-purple-600 rounded-2xl">
      <div style={{flexGrow: '3'}} className="flex justify-center flex-col p-8 text-white space-y-4">
        <h2 className="text-4xl font-semibold">Punya Pertanyaan Terkait Marcha?</h2>
        <p>
          Cus langsung aja kirim pertanyaanmu lewat kontak kita, mau apapun itu
          akan kami usahakan balas sebisa mungkin.
        </p>
        <button className="flex items-center gap-1 bg-white max-w-max px-5 py-3 text-purple-600 font-semibold rounded-lg space-x-4 hover:bg-purple-800 hover:text-white transition-all ease-out duration-200">
          <h5>Kontak Sekarang</h5>
          <Icon icon="bytesize:arrow-right" className="font-bold"/>
        </button>
      </div>
      <div style={{flexGrow: '1'}}>
        <img src={Group1} alt="" />
      </div>
    </div>
  );
}

export default Contact;
