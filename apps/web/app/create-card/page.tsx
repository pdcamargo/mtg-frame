"use client";

import { Header } from "./header";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const schema = z.object({
  name: z.string().default(""),
  description: z.string().default(""),
  flavor: z.string().default(""),
});

type FormData = z.infer<typeof schema>;

export default function CreateCard() {
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "My Card name",
      description: "my Card Description",
      flavor: "My Card Flavor Text",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);

    const img = document.createElement("img");

    const urlParams = new URLSearchParams();

    urlParams.append("name", data.name);
    urlParams.append("description", data.description);
    urlParams.append("flavor", data.flavor);
    urlParams.append("frame", "/img/frames/dmu/stainedGlass/g.png");

    const finalUrl = `/api/generate-card?${urlParams.toString()}`;

    img.onload = () => {
      const container = document.getElementById("preview") as HTMLDivElement;
      container.innerHTML = "";

      container.appendChild(img);
    };

    img.src = finalUrl;
  };

  return (
    <div className="w-screen h-screen">
      <Header />

      <div className="max-w-[1024px] p-6 mx-auto">
        <h1>Create a Card</h1>
        <p>Use the form below to create a new card.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Card Name:
            <input type="text" {...register("name")} />
          </label>
          <label>
            Card Text:
            <textarea {...register("description")} />
          </label>
          <label>
            Flavor Text:
            <textarea {...register("flavor")} />
          </label>
          <Button type="submit">Create Card</Button>
        </form>

        <div id="preview"></div>
      </div>
    </div>
  );
}
