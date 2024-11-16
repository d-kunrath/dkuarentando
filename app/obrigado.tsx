import { Prisma } from "@prisma/client";
import { ScrollText, SquareX } from "lucide-react";
import Link from "next/link";

type Props = {
    guests: Prisma.GuestCreateManyInput[];
    isOpen: boolean;
    close: any;
}

export default function ObrigadoModal({ guests, isOpen, close }: Props) {
    return isOpen && (
        <div id="overlay" className="fixed top-0 left-0 w-full h-full bg-slate-800/50 flex justify-center items-center">
            <div className="max-w-80 bg-slate-50 shadow-lg p-2 rounded-md text-gray-900 flex flex-col gap-4 items-center relative">
                <button className="absolute right-1 top-1" onClick={close}><SquareX size={16} /></button>
                <h2 className="font-medium ">Obrigado!</h2>
                <p className="text-sm">Foram adicionados os nomes abaixo:</p>
                <ul className="list-none">
                    {guests.map((guest, index) => (
                        <li key={index}>{guest.name}</li>
                    ))}
                </ul>
                <Link className="flex gap-1 justify-center bg-green-500 py-1 px-3 rounded-md self-stretch" href="/lista"><ScrollText /> Ver lista</Link>
            </div>
        </div>
    )
}