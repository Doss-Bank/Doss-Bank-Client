import { useHistory } from "react-router-dom";

function usePush(link: string) {
  const { push } = useHistory();

  const handleLink = () => push(link);

  return handleLink;
}

export default usePush;
