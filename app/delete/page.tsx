"use client";

import Link from "next/link";
import { deleteGuest, fetchGuests } from "../lib/actions"
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Lista() {
    const [list, setList] = useState<{name: string, id: string}[]>([]);
    const guestsByName = [...list];
    guestsByName.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

    const removeGuest = async (id: string) => {
        try {
            await deleteGuest(id);
            console.log(`REMOVIDO: ${id}`);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchGuests()
            .then((result) => setList(result))
            .catch(error => console.error(error));
    }, [])

    return <div className="flex flex-col gap-3 items-center">
        <header className="flex justify-center items-center w-full">
            <h1 className="text-4xl">CONFIRMADOS</h1>
            <Link href="/" className="border rounded-full py-1 px-4 text-gray-900 fixed bg-slate-50 bottom-5 right-5">Voltar</Link>
        </header>
        <p className="text-xs">caso tenha algum erro entre em contato comigo!</p>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>ID</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {guestsByName.map(({ name, id }, index) => (
                    <tr key={id} style={{ backgroundColor: index % 2 === 0 ? '#0003' : 'transparent'}}>
                        <td className="p-2">{name}</td>
                        <td className="p-2">{id.slice(0,3)} ... {id.slice(-3)}</td>
                        <td className="p-2"><button onClick={() => removeGuest(id)}><Trash2 size={12} className="bg-red-700 font-black" /></button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}