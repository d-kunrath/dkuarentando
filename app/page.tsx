"use client"
import { ArrowRight, CircleMinus, CirclePlus, ExternalLink, ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { createGuests } from "./lib/actions";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import ObrigadoModal from "./obrigado";

export default function Home() {
  const [list, setList] = useState<Prisma.GuestCreateInput[]>([{ name: '' }]);
  const [openModal, setOpenModal] = useState(false);

  const addressLink = "https://www.google.com/maps/place/Av.+Otac%C3%ADlio+Tomanik,+343+-+Vila+Polopoli,+S%C3%A3o+Paulo+-+SP,+05363-000/@-23.576187,-46.7476803,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce56779eff67df:0x97c93b277b43de91!8m2!3d-23.5761919!4d-46.7451054!16s%2Fg%2F11f_b__vv4?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D";

  const HandleAddField = () => {
    setList([...list, { name: '' }]);
  }

  const handleRemoveField = (index: number) => {
    const listCopy = [...list];
    listCopy.splice(index, 1);
    setList(listCopy);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const onChangeValue = [...list];
    onChangeValue[index] = { name: value };
    setList(onChangeValue);
  }

  const sendName = async () => {
    await createGuests(list);
    setOpenModal(true);
  }
  
  
  const trimmedInputs = list.filter(value => value.name.length > 0);
  const disableSend = trimmedInputs.length === 0;
  const firstName = trimmedInputs[0]?.name ?? '';

  return (
    <>
      <main className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl sm:text-6xl z-10">DKuarentando!</h1>

        <div className="relative">
          <Image
            src="/dk_d.jpg"
            alt="kid dk"
            height={400}
            width={300}
            priority
          />
          <Image
            className="absolute top-[21%] left-[14%] sm:top-20 sm:left-[2.7rem] animate-appear-up"
            src="/beard.png"
            alt="beard"
            height={220}
            width={220}
          />
          <Image
            className="absolute bottom-3/4 -rotate-[30deg] animate-appear-up"
            src="/hat.png"
            alt="party hat"
            height={180}
            width={180}
          />
          <Image
            className="hidden sm:block absolute bottom-3 -rotate-45 right-3/4 animate-balloons"
            src="/balloons.png"
            alt="balloons"
            height={300}
            width={300}
          />
          <Image
            className="hidden sm:block absolute bottom-3 rotate-45 left-3/4 animate-40"
            src="/balloon-40.png"
            alt="balloon 40"
            height={300}
            width={300}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-bold">DK virou Quarentão!</p>
          <p>Venha comemorar comigo no meu terceiro dia dos quarenta anos!</p>
          <p>(pq é oficialmente dia 28, hahaha)</p>
        </div>

        <ul className="list-none text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            <strong>Quando?</strong> Dia 30/11/24 a partir das 13h até as 22h
          </li>
          <li>
            <strong>Onde?</strong> Av. Otacílio Tomanik, 343 - Quiosque Principal <Link href={addressLink} target="_blank">(mapa <ExternalLink className="inline" size={12}/>)</Link>
          </li>
          <li>
            <strong>Posso levar alguém?</strong> Sim! Não quero limitar, mas use o bom senso!
          </li>
          <li>
            <strong>O que precisa?</strong> Algo que você queira beber e algo pra por na churrasqueira!
          </li>
        </ul>

        <div className="flex items-center gap-3 flex-col">
          <p className="font-bold">Confirme abaixo se vier:</p>
          <p className="p-0 m-0 text-xs">para adicionar mais gente, clique no &quot;+&quot;!</p>
          {list.map((guest, index) => (
            <div className="flex gap-3 w-full" key={index}>
              <input className="p-2 rounded-md text-black" value={guest.name} onChange={(e) => handleChange(e, index)}/>
              {list.length > 1 && index < list.length - 1 && (
                <button onClick={() => handleRemoveField(index)}><CircleMinus className="text-red-500" /></button>
              )}
              {index === list.length - 1 && (
                <button onClick={HandleAddField}><CirclePlus /></button>
              )}
            </div>
          ))}
          <button
            className={`group rounded-full flex items-center gap-2 bg-foreground text-background py-2 px-4 ${disableSend ? 'pointer-events-none bg-gray-500' : ''}`}
            aria-disabled={disableSend}
            tabIndex={disableSend ? -1 : undefined}
            onClick={sendName}
          >
            Enviar <ArrowRight className="group-hover:translate-x-2 transition-all duration-300"/>
          </button>
          
        </div>
      </main>
      <footer className="flex items-center justify-center">
        <Link className="flex gap-1 items-center" href="/lista">
          <ScrollText size={16} /> Ver lista de quem confirmou <ArrowRight size={16} />
        </Link>
      </footer>
      <ObrigadoModal guests={list} isOpen={openModal} close={() => setOpenModal(false)}/>
    </>
  );
}
