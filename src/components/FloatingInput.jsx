const FloatingInput = ({ label, type, ref, value, onChange }) => {
  return (
    <label className="relative w-full">
      <input
        ref={ref}
        type={type}
        onChange={onChange}
        value={value}
        placeholder=" "
        className="bg-[#deeef1] text-neutral-800 w-full px-3 pt-5 pb-1.5 outline-none border border-[rgba(105,105,105,0.397)] rounded-lg text-base peer"
      />
      <span className=" absolute left-3 top-0 text-[0.9em] cursor-text transition-all duration-300 peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-[0.9em] peer-focus:top-0 peer-focus:text-[0.7em] peer-focus:font-semibold peer-valid:top-0 peer-valid:text-[0.7em] peer-valid:font-semibold text-[#0f181b]">
        {label}
      </span>
    </label>
  );
};

export default FloatingInput;
