"use client";
import Image from "next/image";
import { AccordionItem } from "@/components/ui/accordion";
import ProjectDesc from "@/sections/ProjectDesc";
import Sidebar from "@/components/ui/sidebar";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className=" ">
      <Sidebar />
      <Navbar />
      <ProjectDesc></ProjectDesc>
    </main>
  );
}
