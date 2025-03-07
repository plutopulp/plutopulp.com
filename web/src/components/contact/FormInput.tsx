import { FormInputProps } from "@/types/form";

export const FormInput = ({
  id,
  label,
  type = "text",
  placeholder = "",
  required = false,
  register,
  error,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className="w-full p-3 bg-white rounded text-gray-800"
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="mt-1 text-red-400 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
