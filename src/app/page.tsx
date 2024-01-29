import CarousalBannarWrapper from "@/components/ui/CarousalBannarWrapper";
import MoviesCarousal from "@/components/ui/MoviesCarousal";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
    <main className="">
      <CarousalBannarWrapper/>
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousal title="Upcoming" movies={upcomingMovies} />
        <MoviesCarousal title="TopRated" movies={topRatedMovies} />
        <MoviesCarousal title="Popular" movies={popularMovies} />
      </div>
    </main>
  );
}
