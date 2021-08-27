import { useMemo, FC } from "react";
import { createPortal } from "react-dom";

interface PortalInterface {
  elementId: string;
}

const Portal: FC<PortalInterface> = ({ children, elementId }) => {
  const rootElement = useMemo(
    () => document.getElementById(elementId)!,
    [elementId]
  );

  return createPortal(children, rootElement);
};

export default Portal;
