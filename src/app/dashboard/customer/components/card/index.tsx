"use client";

import { Customer } from "@/generated/prisma/client";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export function CardCustomer({ id, name, phone, email }: Customer) {
  const router = useRouter();

  async function handlerDelete() {
    try {
      await api.delete("/api/customer", {
        params: {
          id,
        },
      });

      router.refresh();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <article className="flex flex-col bg-gray-100 border p-2 rounded-lg gap-2 hover:scale-105 duration-300">
      <h2>
        <a className="font-bold">Nome:</a>
        {name}
      </h2>
      <p>
        <a className="font-bold">Email:</a>
        {email}
      </p>
      <p>
        <a className="font-bold">Telefone:</a>
        {phone}
      </p>

      <button
        className="bg-red-500 px-4 rounded text-white mt-2 self-start"
        onClick={handlerDelete}
      >
        Deletar
      </button>
    </article>
  );
}
