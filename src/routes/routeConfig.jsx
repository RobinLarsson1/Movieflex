import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Search from "../components/Search.jsx";
import Genre from "../components/genre.jsx";
import Language from "../components/language.jsx";
import Duration from "../components/duration.jsx";
import ReleaseMonth from "../components/releaseMonth.jsx";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: (
          <>
            <Search />
          </>
        ),
      },
      {
        path: "genres",
        element: <Genre />,
      },
      {
        path: "languages",
        element: <Language />,
      },
      {
        path: "durations",
        element: <Duration />,
      },
      {
        path: "release",
        element: <ReleaseMonth />,
      },
    ],
  },
]);
