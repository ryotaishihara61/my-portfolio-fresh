import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ryotaishihara61",
    icon: Icons.gitHub,
    link: "https://github.com/ryotaishihara61",
  },
  {
    name: "LinkedIn",
    username: "Ryota Ishihara",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ryota-ishihara/",
  },
  {
    name: "Gmail",
    username: "ryota.ishihara",
    icon: Icons.gmail,
    link: "mailto:ryota61@gmail.com",
  },
];
