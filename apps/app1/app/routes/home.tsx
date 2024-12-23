import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { add } from "@triple-go/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  let sum = add(1, 2);
  console.log(sum);
  return <Welcome />;
}
