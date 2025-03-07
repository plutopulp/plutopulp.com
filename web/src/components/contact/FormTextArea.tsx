import { FormTextAreaProps } from "@/types/form";

export const FormTextArea = ({
  id,
  label,
  placeholder = "",
  required = false,
  register,
  error,
  rows = 5,
}: FormTextAreaProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        className="w-full p-3 bg-white rounded text-gray-800 min-h-[120px]"
        placeholder={placeholder}
        rows={rows}
        {...register}
      />
      {error && <p className="mt-1 text-red-400 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormTextArea;
