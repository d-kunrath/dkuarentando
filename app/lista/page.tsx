import Link from "next/link";
import { fetchGuests } from "../lib/actions"

export const dynamic = "force-dynamic";

export default async function Lista() {
    const guests = await fetchGuests();
    const guestsByName = [...guests];
    guestsByName.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

    return <div className="flex flex-col gap-3 items-center">
        <header className="flex justify-center items-center w-full">
            <h1 className="text-4xl">CONFIRMADOS</h1>
            <Link href="/" className="border rounded-full py-1 px-4 text-gray-900 absolute bg-slate-50 bottom-5 right-5">Voltar</Link>
        </header>
        <p className="text-xs">caso tenha algum erro entre em contato comigo!</p>
        <div className="flex flex-col flex-wrap">
            {guestsByName.map(guest => (
                <p key={guest.id}>{guest.name}</p>
            ))}
        </div>
    </div>
}