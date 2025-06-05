import React, { useState } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { GithubIcon, ReadingIcon } from "./icons";
import favicon from "../assets/favicon.svg";

interface EventDrawerProps {
  // index: number;
  project: {
    image: string;
    title: string;
    p1?: string;
    p2?: string;
    git?: string;
  };
}

export const EventDrawer: React.FC<EventDrawerProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenChange = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button
        color="success"
        endContent={<ReadingIcon />}
        variant="light"
        size="sm"
        onPress={onOpenChange}
      >
        Show description
      </Button>
      <Drawer
        hideCloseButton
        backdrop="blur"
        classNames={{
          base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                <Tooltip content="Close">
                  <Button
                    isIconOnly
                    className="text-default-400"
                    size="sm"
                    variant="light"
                    onPress={onClose}
                  >
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                    </svg>
                  </Button>
                </Tooltip>
              </DrawerHeader>
              <DrawerBody className="pt-16">
                <div className="flex w-full justify-center items-center pt-4">
                  <Image
                    isBlurred
                    isZoomed
                    alt="Event image"
                    className="aspect-square w-full hover:scale-110 object-contain"
                    height={300}
                    src={project.image}
                  />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <h1 className="text-2xl font-bold leading-7">
                    {project.title}
                  </h1>
                  <p className="text-sm text-default-500">
                    Responsive web and mobile design
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <Link
                        isBlock
                        showAnchorIcon
                        color="primary"
                        href={project.git}
                        isExternal
                      >
                        <GithubIcon />
                        <p className="ml-1">Repositorio</p>

                      </Link>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-medium font-medium">
                        About the project
                      </span>
                      <div className="text-medium text-default-500 flex flex-col gap-2">
                        <p>¡Welcome to my web {project.title}! jo!</p>
                        <p>{project.p1}</p>
                        <p>{project.p2}</p>
                      </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-3 items-start">
                      <span className="text-small text-default-500">
                        EA.dev
                      </span>
                      <div className="flex gap-2 items-center">
                        <Avatar
                          name="A"
                          size="sm"
                          src={favicon}
                          className="bg-blue-700"
                        />
                        <span className="text-small text-default-500">
                          EA.dev
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerBody>
              <DrawerFooter className="flex flex-col gap-1">
                <Link
                  className="text-default-400"
                  href="mailto:lanixsi.dev@gmail.com"
                  size="sm"
                >
                  Contact
                </Link>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
