import React from "react";

function Index() {
  return (
    <main className="mx-20 my-12">
      <h5 className="font-medium text-xl text-purple-600 my-2">Contact</h5>
      <h2 className="font-semibold text-5xl leading-[60px] w-[90%] mb-9">
        Tanyakan, sampaikan pesan, apapun itu Kami siap dengerin Kamu.
      </h2>
      <form action="" className="w-4/5 space-y-9 flex flex-col">
        <input
          type="text"
          name=""
          required
          id=""
          placeholder="Masukkin namamu*"
          className="border-b-2 pb-1 border-gray-300 w-4/5 focus:outline-none transition-all duration-200 ease-out focus:pb-4 focus:border-purple-600"
        />
        <input
          type="email"
          name=""
          required
          id=""
          placeholder="Emailmu*"
          className="border-b-2 pb-1 border-gray-300 w-4/5 focus:outline-none transition-all duration-200 ease-out focus:pb-2 focus:border-purple-600"
        />
        <input
          type="text"
          name=""
          required
          id=""
          placeholder="Pesan yang mau disampaiin*"
          className="border-b-2 pb-1 border-gray-300 w-4/5 focus:outline-none transition-all duration-200 ease-out focus:pb-2 focus:border-purple-600"
        />
        <button type="submit"
        className="bg-purple-600 py-3 px-12 w-1/4 text-white font-semibold rounded-sm text-lg hover:bg-purple-700">
            Kirim
        </button>
      </form>
    </main>
  );
}

export default Index;
