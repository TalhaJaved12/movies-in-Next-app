import { SearchResults } from "../../typing";

async function FetchFromTMDB(url: URL, chacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWYzYTAzMGI4ODZjOTAyYzdjNjdiY2U0ZjkwNDU4MCIsInN1YiI6IjY1YjYzN2UzMmZhZjRkMDE3Y2RkOTMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TwAlHs0yWsIwPhWdboJUxG58h65mI7z1YwaF1m050eg",
    },
    next: {
      revalidate: chacheTime || 60 * 50 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await FetchFromTMDB(url);
  return data.results;
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await FetchFromTMDB(url);
  return data.results;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await FetchFromTMDB(url);
  return data.results;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await FetchFromTMDB(url);
  return data.results;
}

export async function getSearchMovies(term: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  url.searchParams.set("query", term);

  const data = await FetchFromTMDB(url);
  return data.results;
}
