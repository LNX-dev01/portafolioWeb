import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  InstaIcon,
} from "@/components/icons";
import favicon from "../../favicon.ico";

import AvatarUsr from "./avatar";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Logo y Nombre a la Izquierda */}
      <NavbarContent className="basis-1/5 sm:basis-auto" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex items-center gap-1" color="foreground" href="/">
            <img src={favicon} alt="Logo" className="w-6 h-6 rounded-lg" />
            <p className="font-bold text-inherit">EA</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Lista de navegación centrada */}
      <NavbarContent className="hidden lg:flex flex-1 justify-center gap-4">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Redes sociales y botón a la derecha */}
      <NavbarContent
        className="hidden md:flex basis-1/5 md:basis-auto"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-3">
          <Link isExternal href={siteConfig.links.facebook} title="Facebook">
            <FacebookIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.insta} title="Instagram">
            <InstaIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <AvatarUsr />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Menú móvil */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        {/* <AvatarUsr/> */}
        <Link isExternal href={siteConfig.links.github} title="GitHub">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menú desplegable en móviles */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <AvatarUsr />
          <div className="flex items-center justify-center gap-4 py-2">
            <Link isExternal href={siteConfig.links.facebook} title="Facebook">
              <FacebookIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.insta} title="Instagram">
              <InstaIcon className="text-default-500" />
            </Link>
            <Link isExternal href={siteConfig.links.github} title="GitHub">
              <GithubIcon className="text-default-500" />
            </Link>
          </div>

          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.email}
            startContent={<EmailIcon className="text-danger" />}
            variant="bordered"
          >
            Contact
          </Button>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
