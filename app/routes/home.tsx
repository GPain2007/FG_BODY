import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FG'S BODY SHOP" },
    { name: "description", content: "Auto Repair Shop" },
  ];
}

export default function Home() {
  return <Welcome />;
}
