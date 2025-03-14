import { User } from "@heroui/user";
import { Link } from "@heroui/link";
import profile from "@/assets/profile.webp";

export default function AvatarUsr() {
  return (
    <>
      <User
        className="wrapper"
        avatarProps={{
          src: profile,
          size: "md",
          isBordered: true,
          color: "danger",
        }}
        description={
          <Link isExternal href="https://www.instagram.com/" size="sm">
            @EduardoAO
          </Link>
        }
        name="Eduardo Aguilar"
      />
    </>
  );
}
