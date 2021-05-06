import { createContext, ReactNode, useContext, useState } from "react";

type Genre = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

type GenreContextProviderData = {
  selectedGenre: Genre,
  selectedGenreId: number,
  selectGenre: (genre: Genre) => void,
  handleClickButton: (id: number) => void
}

export const GenreContext = createContext({} as GenreContextProviderData)

type GenreContextProviderProps = {
  children: ReactNode
}

export function GenreContextProvider ({ children }: GenreContextProviderProps) {
  const [selectedGenre, setSelectedGenre] = useState<Genre>({} as Genre);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  function selectGenre(genre: Genre) {
    setSelectedGenre(genre)
  }

  return (
    <GenreContext.Provider
      value={{
        selectedGenre,
        selectedGenreId,
        selectGenre,
        handleClickButton
      }}
    >
      {children}
    </GenreContext.Provider>
  )
}

export const useGenre = () => {
  return useContext(GenreContext)
}