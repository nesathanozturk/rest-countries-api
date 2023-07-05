import { getCountries } from "@/api";
import Countries from "@/components/Countries";
import Filter from "@/components/Filter";

export default async function Home() {
  const data = await getCountries();

  return (
    <main className="px-5 md:px-20">
      <Filter />
      <Countries data={data} />
    </main>
  );
}
