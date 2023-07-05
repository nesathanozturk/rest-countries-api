import { getCountries } from "@/api";
import Main from "@/components/Main";

export default async function Home() {
  const data = await getCountries();

  return (
    <main className="px-5 md:px-20 text-lmtxt">
      <Main data={data} />
    </main>
  );
}
