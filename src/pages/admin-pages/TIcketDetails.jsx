import React from "react";
import { MoveLeft, MoveRight, Hourglass } from "lucide-react";

function TIcketDetails() {
  return (
    <div className=" p-5 ">
      <nav className="border-b border-gray-400 flex items-center h-[80px] rounded-t-sm bg-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex justify-evenly items-center space-x-5 pl-4 mb-4">
            <MoveLeft className="text-blue-500" />
            <MoveRight className="text-blue-500" />
            <h1 className="font-poppins font-bold text-2xl">
              Ticket #3298hfru
            </h1>

            <span className="bg-amber-300">
              <Hourglass className="w-3 h-3" />
            </span>
            <p>Pending</p>
          </div>
        </div>
      </nav>
      <main>
        <div className=" flex justify-between items-center h-[70px]">
          <div>
            <h1 className="text-[20px] font-poppins font-semibold  text-gray-700">
              Decription: I need help with my purchase
            </h1>
            <p className="text-sm font-bold font-poppins text-gray-500">
              Via Email
            </p>
          </div>
        </div>
        <hr className="text-gray-400" />

        <section>
          <div className="">
            <div className="flex mt-5 flex-row mb-5">
              <div className=" bg-pink-600 flex justify-center items-center rounded-[50px] w-[60px] h-[60px]">
                <h1 className="text-amber-100 text-2xl font-poppins font-semibold">
                  J
                </h1>
              </div>
              <div className="ml-3">
                <h3>contact</h3>
                <p>From Mr Andy</p>
              </div>
            </div>
            <div className="mt-4  pb-5">
              <p className="text-[20px] text-wrap">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores dolor pariatur sapiente voluptate incidunt asperiores
                dolorum dignissimos totam fuga! Fuga accusamus ipsum, quae
                beatae ad nemo ipsa quia explicabo cumque.
              </p>
            </div>
          </div>
        </section>
        <hr />

        <section>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            itaque incidunt. A ipsa quod excepturi perferendis vitae repellat
            asperiores aliquam consequuntur rerum, maiores alias, maxime
            cupiditate eius fugiat, ducimus esse!
          </div>
        </section>
        <hr />
      </main>
    </div>
  );
}

export default TIcketDetails;
