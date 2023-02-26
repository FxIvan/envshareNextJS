"use client";
import { Fragment, useState } from "react";
import styles from "./style.module.css";

export default function InputTextArea() {
  const [inputArea, setInputArea] = useState("");
  const [reads, setReads] = useState(100);
  const [ttl, setTtl] = useState(7);
  const [selectTime, setSelectTme] = useState(60 * 60 * 24);
  const [error, setError] = useState();

  const handleSubmit = () => {};
  const handleUpload = (file) => {
    if (file.size > 1024 * 16) setError("File size is too big");
    let fileData = new FileReader();
    fileData.onloadend = (e) => {
      const svg = e.target.result;
      setInputArea(svg);
    };
    fileData.readAsText(file);
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
          <div>
            <div>
              <label>Read</label>
              <input
                type="number"
                value={reads}
                className="text-black"
                onChange={(e) => setReads(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <label>TTL</label>
              <input
                type="number"
                className="text-black"
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
              />
            </div>
            <div>
              <select
                id="time"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
                onChange={(e) => setSelectTme(e.target.value)}
                defaultValue={60 * 60 * 24}
              >
                <option value={60}>{ttl === 1 ? "Minute" : "Minutes"}</option>
                <option value={60 * 60}>{ttl === 1 ? "Hour" : "Hours"}</option>
                <option value={60 * 60 * 24}>
                  {ttl === 1 ? "Day" : "Days"}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div></div>
      </pre>
    </form>
  );
}
