import { useEffect } from "react";

function useChangeTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useChangeTitle;
