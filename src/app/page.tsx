import Header from "@/components/Header";
import HomeContainer from "@/containers/home";
import { getCountries } from "@/api";

export default async function Home() {
  const data = await getCountries();

  return (
    <>
      <Header />
      <HomeContainer data={data} />
    </>
  );
}
