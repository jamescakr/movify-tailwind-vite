import React from "react";
import { useMovieTrailerQuery } from "../hooks/useMovieTrailer";
import LoadingSpinner from "../pages/components/LoadingSpinner";

const MovieTrailer = ({ movieId, iframeClassName = "" }) => {
  const { data, isLoading, isError, error } = useMovieTrailerQuery(movieId);
  // console.log("trailer video DATA", data);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <div>
        <div className="bg-red-600 rounded-lg text-white p-4 shadow-lg max-w-md mx-auto">
          {error.message}
        </div>
      </div>
    );
  }

  const trailer = data?.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  if (!trailer) {
    return <div>No Trailer Available</div>;
  }

  const trailerURL = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&showinfo=0&iv_load_policy=3`;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <iframe
        className={`absolute pointer-events-none ${iframeClassName}`}
        style={{
          top: "50%", //1)iframe 자체를 위에서 반(50%), 왼쪽에서 반(50%)이동
          left: "50%", //2)그럼 결국 프레임 왼쪽 위 모서리가 정중앙에 위치
          width: "auto",
          height: "auto",
          minWidth: "100%",
          minHeight: "100%",
          transform: "translate(-50%, -50%) scale(1.4)", //3)프레임이 오른쪽 아래로 치우쳐져있으니 그 프레임을 기준으로 x축으로 왼쪽으로 반(-50%)만큼 y축으로 위쪽으로 반(-50%)만큼 오면 정중앙에 위치하게됨, 즉 위의 50%와 translate(-50%)는 숫자만 같을뿐 기준이 다르다!
          transformOrigin: "center center", //"x축(가로) y축(세로)" 즉, 중앙을 기준으로 확대시킴. "left top"이라면 왼쪽 위 모서리를 기준으로 확대함
        }}
        src={trailerURL}
        title="Youtube Movie Trailer"
        // frameBorder="0"
        allowFullScreen
        allow="autoplay encrypted-media"
      />
    </div>
  );
};

export default MovieTrailer;
