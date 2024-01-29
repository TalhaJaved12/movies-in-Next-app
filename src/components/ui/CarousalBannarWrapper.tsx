import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselBanner from "./CarouselBanner";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarousalBannarWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);

  return <CarouselBanner movies={movies} />;
}

export default CarousalBannarWrapper;