interface props {
  placeholder: string;
  type: string;
}

export default function Input(
  { type, placeholder }: props,
) {
  return (
    <input
      type={type}
      className="p-2 px-5 rounded-lg shadow-black bg-accentWhite w-full lg:max-w-xl text-accentBlack text-lg border-4 border-accentGrey focus:outline-none"
      placeholder={placeholder}
    >
    </input>
  );
}
