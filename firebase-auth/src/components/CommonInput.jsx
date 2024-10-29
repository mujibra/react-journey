export default function CommonInput({ type, name, placeholder, value, onChange, className }) {
    return (
        <input
            type={type || "text"}
            name={name}
            placeholder={placeholder || "Enter Value"}
            value={value}
            onChange={onChange}
            className={className || "w-full block px-5 py-2 mt-2 text-black border rounded-lg"}
        />
    );
}
