import React, { useState } from "react";
import { useMovieGenreQuery } from "../hooks/useMovieGenre";
import LoadingSpinner from "../pages/components/LoadingSpinner";

//1. 장르별 버튼을 만든다 >> map을 이용 + css

//2. 버튼을 누르면 장르별로 필터링이 되어서 오른쪽 리스트에 보여준다
//- onClick이벤트를 주어서 filter() 함수를 이용
//- 클릭한 장르를 useState() 를 이용하여 state에 저장
//- 찾은 결과를 map() 을 이용해서 리스트를 나열

const GenreFilter = () => {
  const { data, isLoading, isError } = useMovieGenreQuery();
  //   console.log("genre???", data);

  const [selectedGenre, setSelectedGenre] = useState(null);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div>
        {data?.map((genre) => (
          <button
            key={genre.id}
            className="w-auto h-8 px-4 m-2 rounded-lg bg-gradient-to-tr from-orange-400 via-red-600 to-black font-bold"
            // onClick={() => )}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
