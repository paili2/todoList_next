import ListCard from "@/src/components/ListCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-screen mx-auto grid grid-cols-4">
      <div className="col-span-3 p-10">
        <div>
          <h1>Good Day, SHONG</h1>
          <span>최종 접속시간은 10시 02분 40초입니다</span>
        </div>
        <div>
          <div>
            <input type="text" />
          </div>
          <button>+</button>
        </div>
        <div className="flex">
          <ListCard title={"하이"}></ListCard>{" "}
          <ListCard title={"하이"}></ListCard>
        </div>
      </div>
      <div className="col-span-1 p-10">하이</div>
    </div>
  );
}
