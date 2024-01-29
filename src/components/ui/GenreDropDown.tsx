import { Genres } from "../../../typing";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

async function GenreDropDown() {
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWYzYTAzMGI4ODZjOTAyYzdjNjdiY2U0ZjkwNDU4MCIsInN1YiI6IjY1YjYzN2UzMmZhZjRkMDE3Y2RkOTMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TwAlHs0yWsIwPhWdboJUxG58h65mI7z1YwaF1m050eg",
      // Authorization: `Bearer ${process.env.TMBD_ACCESS_TOKEN}`
    },
    next: {
      revalidate: 60 * 50 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center ">
        Genre <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre: any) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropDown;
