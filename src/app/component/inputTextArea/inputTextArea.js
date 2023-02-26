"use client";
import { Fragment, useState } from "react";
import styles from "./style.module.css";

export default function InputTextArea() {
  const [inputArea, setInputArea] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [error, setError] = useState();

  const handleSubmit = () => {};
  const handleUpload = (file) => {
    if (file.size > 1024 * 16) setError("File size is too big");
    let fileData = new FileReader()
    fileData.onloadend = (e) =>{
      const svg = e.target.result;
      setInputArea(svg)
    }
    fileData.readAsText(file)
  };

  return (
    <form onSubmit={handleSubmit}>
      <pre className="px-4 py-3 mt-8 font-mono text-left bg-transparent border rounded border-zinc-600 focus:border-zinc-100/80 focus:ring-0 sm:text-sm text-zinc-100  w-7/12 m-auto">
        {/* ----------------- TEXTAREA ----------------- */}
        <div className="flex items-start px-2 text-sm">
          <div
            aria-hidden="true"
            className="pr-4 font-mono border-r select-none border-zinc-300/5 text-zinc-700"
          >
            {Array.from(inputArea.split("\n")).map((_, index) => (
              <Fragment key={index}>
                <span className="text-red-500">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <br />
              </Fragment>
            ))}
          </div>
          <div className="w-full">
            <textarea
              className="focus:outline-none w-full p-0 text-base bg-transparent border-0 appearance-none resize-none hover:resize text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
              rows={Math.max(5, inputArea.split("\n").length)}
              placeholder="DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres"
              onChange={(e) => setInputArea(e.target.value)}
              style={{ minWidth: "100%" }}
            />{" "}
          </div>
        </div>
        {/* ----------------- DATE ----------------- */}
        <div>
          <div>
            <label>Upload a file</label>
            <input
              type="file"
              onChange={(e) => handleUpload(e.target.files[0])}
            />
            <span>{error}</span>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </pre>
    </form>
  );
}
