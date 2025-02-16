"use client"
import React, { useState } from "react";

import Image from "next/image";

const BraillePrinter = () => {
  const [text, setText] = useState("");

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setText(e.target?.result as string);
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a] px-4 md:px-0">
      <div className="border border-black p-6 w-full max-w-lg bg-black shadow-lg">
        <div className="flex items-center mb-4">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full border border-black"
          />
          <h1 className="ml-4 text-2xl font-bold text-white">BRAILLE PRINTER</h1>
        </div>
        <textarea
          className="w-full h-40 border border-black p-2 rounded-lg bg-[#333] text-white placeholder-gray-400"
          placeholder="Input text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex flex-col space-y-2 mt-4">
          <label className="border border-black px-4 py-2 rounded-lg text-center cursor-pointer bg-[#444] hover:bg-[#555] text-white">
            Upload File
            <input type="file" className="hidden" onChange={handleUpload} />
          </label>
          <button
            className="border border-black px-4 py-2 rounded-lg bg-[#444] hover:bg-[#555] text-white"
            onClick={() => setText("")}
          >
            Clear
          </button>
          <button className="border border-black px-4 py-2 rounded-lg bg-[#444] hover:bg-[#555] text-white">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default BraillePrinter;
