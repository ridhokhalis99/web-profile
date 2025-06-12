import Github from "../../src/icons/Github.astro";
import Linkedin from "../../src/icons/Linkedin.astro";
import Instagram from "../../src/icons/Instagram.astro";
import Medium from "../../src/icons/Medium.astro";
import Tiktok from "../../src/icons/Tiktok.astro";

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/ridhokhalis99",
    component: Github,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ridho-khalis/",
    component: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ridho_khalis/",
    component: Instagram,
  },
  {
    name: "Medium",
    href: "https://medium.com/@ridhokhalis",
    component: Medium,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@heyitsridho",
    component: Tiktok,
  },
];

export default socialLinks;
