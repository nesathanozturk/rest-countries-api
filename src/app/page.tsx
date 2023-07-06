import Header from "@/components/Header";
import Main from "@/components/Main";
import { getCountries } from "@/api";

export default async function Home() {
  const data = await getCountries();

  return (
    <>
      <Header />
      <Main data={data} />
    </>
  );
}
