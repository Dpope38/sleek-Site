import React from "react";

function UserCard({ Userdata }) {
  return (
    <div className="flex flex-wrap gap-y-4 justify-start  ">
      {Userdata &&
        Userdata.length > 0 &&
        Userdata.map((userData) => (
          <div
            key={userData.id}
            className="flex flex-col
                  h-72
                  mx-4
                  bg-primary-300
                  rounded-lg
                  shadow-lg
                  relative
                  hover:shadow-xl/20
                  transition-shadow duration-300

                  bg-linear-to-r from-cyan-500 to-blue-500
                  w-50
"
          >
            <div className="bg-gray-200 w-full h-full mt-25 flex flex-col items-center ">
              <div className="flex flex-col items-center mt-6">
                <h1 className="text-2xl font-semibold text-gray-700">
                  {userData.name}
                </h1>
                <p className="text-gray-500 font-poppins font-semibold">
                  I.T DEPT.
                </p>
                <p className=" text-sm text-gray-500 font-poppins font-semibold">
                  {userData.email}
                </p>
                <p className="text-gray-500 font-poppins font-semibold">{`Role: ${userData.role}`}</p>
              </div>
              <button className="mt-5 px-3 py-2 text-white bg-blue-500  hover:scale-95 rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4  focus:ring-blue-300 ">
                Check Profile
              </button>
            </div>
            <div className="bg-blue-500 h-20 w-20 flex justify-center items-center rounded-full absolute top-10 left-14">
              <h1 className="bg-linear-to-r from-gray-200 to-blue-300 bg-clip-text text-3xl font-bold text-transparent">
                {userData.name.charAt(0).toUpperCase()}
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UserCard;
