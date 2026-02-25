import { Container } from "@/components/container";
import Link from "next/link";
import { CardCustomer } from "./components/card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function Customer() {
  const session = await getServerSession(authOptions);

  const customers = await prisma.customer.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Clientes</h1>
          <Link
            href="/dashboard/customer/new"
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Novo cliente
          </Link>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {customers.map((c) => (
            <CardCustomer key={c.id} {...c} />
          ))}
        </section>
      </main>
    </Container>
  );
}
