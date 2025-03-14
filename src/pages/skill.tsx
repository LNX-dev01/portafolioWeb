import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionItem } from "@heroui/accordion";

import { MonitorMobileIcon } from "@/components/icons";
import { Link } from "@heroui/link";
import { skillElement } from "@/config/skill-element";
import { EventDrawer } from "@/components/skillAccordion";
import { Button } from "@heroui/button";

export default function SkillPage() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  return (
    <DefaultLayout>
      <section className=" flex flex-col items-start justify-center gap-4 py-8 md:py-10 dark:bg-black">
        {/* <section className="my-8 flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-gradient-to-br dark:from-pink-950 dark:to-gray-950 rounded-lg"> */}
        <div className="w-full max-w-screen-xl text-center ">
          {/* <div className="w-full max-w-screen-lg text-center shadow-2xl shadow-pink-500/50 rounded-xl"> */}
          <Accordion
            className="w-full"
            itemClasses={itemClasses}
            showDivider={false}
            variant="shadow"
            
          >
            {skillElement.Projects.map((project, index) => (
              <AccordionItem
                key={index}
                aria-label={project.title}
                // startContent={<MonitorMobileIcon className="text-primary" />}
                startContent={
                  <MonitorMobileIcon className={`text-${project.colorIcon} `} /> //cambia el icono de cada lista
                }
                subtitle={
                  <p className="flex">
                    {/* Programación orientada a objetos{" "} */}
                    <span className="text-gray-500 my-1">
                      {project.description}
                    </span>
                  </p>
                }
                title={project.title}
                className="my-4"
              >
                <div className="flex flex-wrap gap-2">
                  {project.items.map((item) => (
                    <Button
                      key={`${project.title}-${item.skill}`}
                      showAnchorIcon
                      as={Link}
                      isExternal
                      variant="shadow"
                      size="sm"
                      color={
                        item.color as  // | "foreground"
                          | "default"
                          | "primary"
                          | "secondary"
                          | "warning"
                          | "danger"
                          | "success"
                          | undefined
                      }
                      href={item.link}
                    >
                      {item.skill}
                    </Button>
                  ))}
                  <EventDrawer  project={project}/>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </DefaultLayout>
  );
}
