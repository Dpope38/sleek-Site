import { useEffect, useRef, useState } from "react";
import FloatingInput from "./FloatingInput.jsx";
import Modal from "./Modal.jsx";
import { useCreateUsers } from "../fetching-mutating/userQuery.js";

const TeamFormCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const createUser = useCreateUsers();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleForm(e) {
    e.preventDefault();
    createUser.mutate({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
  }

  return (
    <Modal
      className="my-7 w-full relative flex flex-col"
      desc="Create a new team member"
    >
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-3 max-w-[350px] p-5 rounded-2xl relative bg-[rgba(242,245,253,0.4)] text-white border border-[rgb(195,215,228)]"
      >
        <p className="text-[28px] font-semibold tracking-[-1px] relative flex items-center pl-8 text-[#00bfff] before:absolute before:content-[''] before:w-[18px] before:h-[18px] before:rounded-full before:left-0 before:bg-[#00bfff] after:absolute after:content-[''] after:w-[18px] after:h-[18px] after:rounded-full after:left-0 after:bg-[#00bfff] after:animate-pulseCustom">
          Register
        </p>

        <p className="text-[14.5px] text-white/70">
          Signup now and get full access to our app.
        </p>

        <div className="flex w-full gap-2">
          <FloatingInput
            ref={inputRef}
            label="Firstname"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
          />
          <FloatingInput
            label="Lastname"
            value={formData.lastname}
            onChange={(e) =>
              setFormData({ ...formData, lastname: e.target.value })
            }
            type="text"
          />
        </div>

        <FloatingInput
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
        />
        <FloatingInput
          label="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
        />

        <button
          type="submit"
          disabled={createUser.isLoading}
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
