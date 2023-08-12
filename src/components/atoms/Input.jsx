/* eslint-disable react/prop-types */
const Input = ({ type, placeholder, label, onChange, name}) => {
  return (
    <div className="w-full pt-6">
      <input
        onChange={onChange}
        id={label}
        type={type}
        name={name}
        className=" shadow outline-none w-full bg-white pl-4 py-3 rounded-lg border-2 border-solid border-purple-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
