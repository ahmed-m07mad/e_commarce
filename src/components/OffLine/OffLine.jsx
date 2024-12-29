import useOnline from "../../hooks/useOnline";

export default function OffLine({ children }) {
  let isOnline = useOnline();
  if (!isOnline) {
    return children;
  }
}
