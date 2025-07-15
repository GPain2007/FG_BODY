import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Testimonial } from "../testimonials/Testimonials";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FG'S BODY SHOP" },
    { name: "description", content: "Auto Repair Shop" },
  ];
}

export default function Home() {
  return (
    <>
      <Welcome />
      <Testimonial />
    </>
  );
}
