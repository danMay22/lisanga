"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import InputField from "@/components/InputField";
import Image from "next/image";

interface FormModdleProps {
  type: "create" | "update";
  data?: any;
}
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 charater long!" })
    .max(20, { message: "Username must be at most 20 charater long!" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Username must be at least 3 charater long!" })
    .max(8, { message: "Password should be at least 8 charater long!" }),
  firstName: z.string().min(1, { message: "First name is Required" }),
  lastName: z.string().min(1, { message: "Last name is Required" }),
  phone: z.string().min(1, { message: "Phone number is Required" }),
  address: z.string().min(1, { message: "Address is required" }),
  bloodType: z
    .string()
    .min(1, { message: "please provide accurate Blood Type" })
    .optional(),
  birthday: z.date({ message: "Birthday is required" }),
  gender: z.enum(["male", "female"], { message: "Gender is required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});
type Inputs = z.inter<typeof schema>;

const TeacherForm: React.FC<FormModdleProps> = ({ type, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-4 mt-1" onSubmit={onSubmit}>
      <h1 classname="text-3xl font-bold">Create a new teacher</h1>
      <span className="text-sm text-gray-500 font-medium">
        Authentication Information
      </span>
      <Separator />
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          x
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />

        <InputField
          label="Passowrd"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>
      <span className="text-sm text-gray-500 font-medium">
        Personal Information
      </span>
      <Separator />
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />

        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <Label className="text-sm text-gray-500">Gender</Label>
          <select
            defaultValue={data?.gender}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("genders")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender?.message && (
            <p className="text-xs text-red-600">
              {errors.gender.message.toString()}
            </p>
          )}
        </div>
        <div className="mt-4 mb-6flex flex-col gap-4 w-full md:w-1/4 justify-center">
          <Label
            className="text-sm text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span className="">Upload a photo</span>
          </Label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-600">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <Button
        variant="outline"
        className="mt-6 bg-sky-600 text-white p-2 rounded-md self-center w-full text-md"
      >
        {type === "create" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default TeacherForm;
