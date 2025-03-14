import React from "react";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import DefaultLayout from "@/layouts/default";

interface IFormInput {
  name: string;
  company: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 lg:p-5 ">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-5/6 grid grid-cols-1 gap-4 md:grid-cols-2 p-4 shadow-2xl shadow-pink-500/50 rounded-xl bg-gradient-to-br dark:from-pink-950 dark:to-gray-950"
            validationBehavior="native"
        >
          <Input
            id="name"
            isRequired
            errorMessage={errors.name?.message}
            label="Username"
            labelPlacement="outside"
            placeholder="Enter your name"
            type="text"
            className="col-span-2 md:col-span-1"
            {...register("name", {
              required: "Please enter a valid name",
            })}
            autoComplete="name"
          />
          <Input
            id="company"
            isRequired
            label="Company"
            autoComplete="company"
            labelPlacement="outside"
            placeholder="Company"
            type="text"
            className="col-span-2 md:col-span-1"
            {...register("company", {
              required: "Please enter a valid company name",
            })}
            errorMessage={errors.company?.message}
          />
          <Input
            id="email"
            isRequired
            label="Email"
            autoComplete="email"
            labelPlacement="outside"
            placeholder="Enter your email"
            type="email"
            className="col-span-2 md:col-span-1"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Format invalid",
              },
            })}
            errorMessage={errors.email?.message}
          />
          <Textarea
            id="message"
            isRequired
            className="col-span-2  md:col-span-2 "
            label="Message"
            labelPlacement="outside"
            placeholder="Enter your message"
            variant="bordered"
            {...register("message", { required: "Message is required" })}
            errorMessage={errors.message?.message}
          />
          <div className="flex gap-2 col-span-2">
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </div>
        </Form>
      </section>
    </DefaultLayout>
  );
};

export default ContactPage;
