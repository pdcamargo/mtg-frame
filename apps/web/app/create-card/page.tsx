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
  art: z.string().default(""),
  manaCost: z.string().default(""),
  type: z.string().default(""),
  pt: z.string().default(""),
});

type FormData = z.infer<typeof schema>;

const CreateCard: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Green Dragon",
      description: `Flying
  Poison Breath - When Green Dragon enters the battlefield, until end of turn, whenever a creature an opponent controls is dealt damage, destroy it.`,
      flavor:
        "Green dragons take special pleasure in corrupting the good-hearted.",
      art: "https://i.imgur.com/2z1k4Pp.jpeg",
      manaCost: "{4}{g}{g}",
      type: "Creature - Dragon",
      pt: "4/4",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);

    const img = document.createElement("img");

    const urlParams = new URLSearchParams();

    Object.entries(data).forEach(([key, value]) => {
      urlParams.append(key, value);
    });

    urlParams.append("frame", "/img/frames/m15/ub/regular/g.png");
    urlParams.append("isPhyrexian", "false");
    urlParams.append("timestamp", Date.now().toString());

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

        <div className="flex gap-10">
          <form
            className="flex flex-col gap-2 flex-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="flex flex-col gap-1">
              Card Name:
              <input type="text" {...register("name")} />
            </label>
            <label className="flex flex-col gap-1">
              Card Text:
              <textarea {...register("description")} />
            </label>
            <label className="flex flex-col gap-1">
              Flavor Text:
              <textarea {...register("flavor")} />
            </label>
            <label className="flex flex-col gap-1">
              Card Art URL:
              <textarea {...register("art")} />
            </label>

            <label className="flex flex-col gap-1">
              Mana Cost:
              <input type="text" {...register("manaCost")} />
            </label>

            <label className="flex flex-col gap-1">
              Card Type:
              <input type="text" {...register("type")} />
            </label>

            <Button type="submit">Create Card</Button>
          </form>

          <div className="w-[50%]">
            <div id="preview" className="bg-gray-600 p-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
