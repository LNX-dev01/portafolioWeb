import { Button } from "@heroui/button";
import { DownloadIcon } from "@/components/icons";
import { Image } from "@heroui/image";
import DefaultLayout from "@/layouts/default";
import imgdesign from "@/assets/imgdesign.webp";

export default function CvPage() {
  return (
    <DefaultLayout>
      <section className=" bg-gradient-to-br from-gray-100 to-gray-200 dark:from-pink-950 dark:to-gray-950 flex items-center justify-center p-4 sm:p-8 shadow-2xl shadow-pink-500/50 rounded-xl">
        {/* <section className=" flex items-center justify-center p-4 sm:p-8 "> */}
        {/* <section className="flex items-center justify-center p-4 sm:p-8 shadow-2xl shadow-pink-500/50 rounded-xl"> */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 ">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
              More information...
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Download my CV and discover how my skills and experience can bring
              value to your team.
            </p>
            <Button
              size="lg"
              className="group bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <DownloadIcon className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <Image
                src={imgdesign}
                isBlurred
                width={280}
                // height={250}
                loading="lazy"
                alt="photo portfolio"
                className="rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
