"use client";

import { Label } from "@/components/ui/label";

interface InputFieldProps {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-1/4">
      <Label className="text-sm text-gray-500">{label}</Label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-600">{error?.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
