import { Container } from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // const session = await getServerSession(authOptions);

  // if (!session || !session.user) return redirect("/");

  return (
    <Container>
      <h1>página dashboard</h1>
    </Container>
  );
}
