import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import imgdesign from "@/assets/imgdesign.webp";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <Card className="">
        <CardBody className="flex flex-col md:flex-row justify-between items-center p-6 bg-gradient-to-br  dark:from-pink-950 dark:to-gray-950">
          <div className="flex-1 p-4 text-left rounded-lg dark:bg-zinc-950 dark:bg-opacity-30">
            <h1 className="text-4xl font-bold mb-4">Software Engineer</h1>
            <span className={title({ color: "violet" })}>Web&nbsp;</span>
            <span className={title({ color: "pink" })}>Developer&nbsp;</span>
            <span className={title()}>Full Stack.</span>
            <div className={subtitle({ class: "mt-4" })}>
              Welcome to my portfolio, where I showcase my experience and
              projects as a backend developer, building efficient and scalable
              solutions. 💻
            </div>
          </div>
          <div className="flex-1 p-4 flex justify-center relative">
            <div className="absolute -top-7 -left-4 w-52 h-52 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-6 -right-4 w-52 h-52 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-6 left-20 w-52 h-52 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            <Image
              isBlurred
              alt="XD"
              className="m-5"
              loading="lazy"
              src={imgdesign}
              width={280}
            />
          </div>
        </CardBody>
      </Card>
    </DefaultLayout>
  );
}
