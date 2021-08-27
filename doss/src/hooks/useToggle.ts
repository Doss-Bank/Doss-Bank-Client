import { useCallback, useState } from "react";

type FunctionType = () => void;

type ReturnTypes = (
  initialState: boolean
) => [boolean, FunctionType, FunctionType, FunctionType];

const useToggle: ReturnTypes = (inititalState: boolean) => {
  const [toggleState, setToggleState] = useState<boolean>(
    inititalState || false
  );

  const setTrue = useCallback(() => {
    setToggleState(true);
  }, []);

  const setFalse = useCallback(() => {
    setToggleState(false);
  }, []);

  const handleToggle = useCallback(() => {
    setToggleState((prev) => !prev);
  }, []);

  return [toggleState, handleToggle, setTrue, setFalse];
};

export default useToggle;
