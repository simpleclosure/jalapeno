"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// create a component that displays a grid of images
// fetch images from api route fetch-movies
// store the images in state
// add loading and error states

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  backdrop_path: string | null;
  original_title: string;
  original_language: string;
  adult: boolean;
  video: boolean;
  genre_ids: number[];
};

type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export default function ImageGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/fetch-movies");

        if (!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.status}`);
        }

        const data: MoviesResponse = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // sort movies by release date
  const sortedMovies = movies.sort((a, b) => {
    const dateA = new Date(a.release_date);
    const dateB = new Date(b.release_date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {sortedMovies.map((movie) => (
        <div
          key={movie.id}
          className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
              className="w-full h-auto hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            />
          ) : (
            <div className="bg-gray-200 w-full h-[300px] flex items-center justify-center">
              No Image Available
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2">
            <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
            <p className="text-xs">{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
