import Image from "next/image";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <Image src="/tooth.png" alt="Logo" width={50} height={50} />
        <h1 className="title text-2xl font-semibold">Dental Clinic</h1>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="px-4 py-2 hover:text-primary transition-colors"
              href="/"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="px-4 py-2 hover:text-primary transition-colors"
              href="/appointment"
            >
              Appointment
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="px-4 py-2 hover:text-primary transition-colors"
              href="/blog"
            >
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="px-4 py-2 hover:text-primary transition-colors"
              href="/contact"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
