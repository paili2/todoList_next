"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    localStorage.getItem("userName", idValue);
  }, [idValue]);

  const handleChange = () => {
    if (idValue.trim() && pwValue.trim()) {
      localStorage.setItem("userId", idValue);
      localStorage.setItem("userPw", pwValue);
      router.push("/");
    } else {
      if (!idValue.trim()) {
        alert("ID를 입력해주세요!");
      } else if (!pwValue.trim()) {
        alert("비밀번호를 입력해주세요!");
      }
    }
  };

  return (
    <section className="bg-blue-50">
      <div className="w-full h-screen flex flex-col justify-center items-center gap-20">
        <h1 className="text-blue-500 font-bold text-7xl">TODOLIST</h1>
        <div className="flex justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-[300px] flex justify-between">
              <span>아이디</span>
              <div className="border rounded-sm w-3/4">
                <input
                  className="w-full appearance-none border-none outline-none bg-transparent focus:ring-0"
                  type="text"
                  value={idValue}
                  onChange={(e) => setIdValue(() => e.target.value)}
                />
              </div>
            </div>
            <div className="w-[300px] flex justify-between">
              <span className="whitespace-nowrap">비밀번호</span>
              <div className="border rounded-sm w-3/4">
                <input
                  className="w-full appearance-none border-none outline-none bg-transparent focus:ring-0"
                  type="password"
                  value={pwValue}
                  onChange={(e) => setPwValue(() => e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleChange}
            className="border rounded-sm px-3 text-lg  bg-blue-500  text-white hover:bg-blue-600 transition duration-200"
          >
            접속
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
