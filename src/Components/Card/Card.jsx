import React from "react";
import { data2 } from "../../Data/Alldata";

const Card = () => {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="flex flex-wrap gap-6 w-[85%] justify-center mt-[6rem] ">
        {data2.map((items) => {
          return (
            <div className="border-[2px] hover:bg-purple-100 transition-all duration-300 rounded-[8px] flex flex-col gap-[2rem] border-gray-200 max-w-[36rem] p-10">
              <div className="flex flex-row gap-5">
                <p>{items.icon}</p>
                <p>{items.name}</p>
              </div>
              <div>{items.description}</div>
              <div>
                <button className="border-[1px] p-1 px-4 rounded-[8px] border-[8064A2]">
                  {items.btn}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
