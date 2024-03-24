import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { PrismaClient } from "@repo"



export default function Page(): JSX.Element {
  return (
    <div className="text-xl">
      hi there from user-app
    </div>
  );
}
