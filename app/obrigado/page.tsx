"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation"

const addressLink = "https://www.google.com/maps/place/Av.+Otac%C3%ADlio+Tomanik,+343+-+Vila+Polopoli,+S%C3%A3o+Paulo+-+SP,+05363-000/@-23.576187,-46.7476803,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce56779eff67df:0x97c93b277b43de91!8m2!3d-23.5761919!4d-46.7451054!16s%2Fg%2F11f_b__vv4?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D";

export default  function Confirmar() {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    return <div className="flex flex-col flex-grow items-center justify-center gap-10">
        <h1 className="text-6xl">Obrigado, {name}!</h1>
        <p>Te vejo dia 30/11/24!</p>
        <Link href="/" className="border rounded-full py-1 px-4">Voltar</Link>
    </div>
}