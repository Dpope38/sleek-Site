import React from "react";
import FloatingInput from "./FloatingInput.jsx";
import Modal from "./Modal.jsx";

const TeamFormCreate = () => {
  return (
    <Modal desc="Create a new team member">
      <form className="flex flex-col gap-3 max-w-[350px] p-5 rounded-2xl relative bg-[rgba(242,245,253,0.4)] text-white border border-[rgb(195,215,228)]">
        <p className="text-[28px] font-semibold tracking-[-1px] relative flex items-center pl-8 text-[#00bfff] before:absolute before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:left-0 before:bg-[#00bfff] after:absolute after:content-[''] after:w-[18px] after:h-[18px] after:rounded-full after:left-0 after:bg-[#00bfff] after:animate-pulseCustom">
          Register
        </p>

        <p className="text-[14.5px] text-white/70">
          Signup now and get full access to our app.
        </p>

        <div className="flex w-full gap-2">
          <FloatingInput label="Firstname" type="text" />
          <FloatingInput label="Lastname" type="text" />
        </div>

        <FloatingInput label="Email" type="email" />
        <FloatingInput label="Password" type="password" />
        <FloatingInput label="Confirm password" type="password" />

        <button
          type="submit"
          className="border-none outline-none px-4 py-2 rounded-lg text-white text-[16px] bg-[#00bfff] hover:bg-[#00bfff96] transition"
        >
          Submit
        </button>

        <p className="text-[14.5px] text-white/70 text-center">
          <button className="text-[#00bfff] border-cyan-500  hover:underline hover:border-cyan-500 transition-all 0.5s ease-in-out">
            Cancel
          </button>
        </p>
      </form>
    </Modal>
  );
};

export default TeamFormCreate;
