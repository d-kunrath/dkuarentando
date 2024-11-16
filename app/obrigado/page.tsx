"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation"

export default  function Confirmar() {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    return <div className="flex flex-col flex-grow items-center justify-center gap-10">
        <h1 className="text-6xl">Obrigado, {name}!</h1>
        <p>Te vejo dia 30/11/24!</p>
        <Link href="/" className="border rounded-full py-1 px-4">Voltar</Link>
    </div>
}