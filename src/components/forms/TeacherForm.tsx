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
type Inputs = z.infer<typeof schema>;

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
    <div className="max-h-[80vh] overflow-y-auto">
      <form className="flex flex-col gap-6 p-6" onSubmit={onSubmit}>
        <div className="text-center border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {type === "create" ? "Create New Teacher" : "Update Teacher"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Fill in the information below to {type === "create" ? "add a new" : "update the"} teacher
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Authentication Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InputField
                label="Username"
                name="username"
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
                label="Password"
                name="password"
                type="password"
                defaultValue={data?.password}
                register={register}
                error={errors.password}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium text-gray-700">Gender</Label>
                <select
                  defaultValue={data?.gender}
                  className="ring-1 ring-gray-300 p-3 rounded-lg text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  {...register("gender")}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender?.message && (
                  <p className="text-xs text-red-600">
                    {errors.gender.message.toString()}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium text-gray-700">Profile Photo</Label>
                <Label
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-400 transition-colors"
                  htmlFor="img"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Image src="/upload.png" alt="Upload" width={32} height={32} />
                    <span className="text-sm text-gray-600">Upload a photo</span>
                  </div>
                </Label>
                <input type="file" id="img" {...register("img")} className="hidden" accept="image/*" />
                {errors.img?.message && (
                  <p className="text-xs text-red-600">
                    {errors.img.message.toString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
          >
            {type === "create" ? "Create Teacher" : "Update Teacher"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
