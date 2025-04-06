import { RefreshCw } from "react-feather";

export const RefreshButton = ({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      aria-label="Refresh content"
      className={`p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
        loading ? "animate-spin opacity-70" : ""
      }`}
    >
      <RefreshCw
        size={24}
        className={loading ? "text-gray-400" : "text-gray-700"}
      />
    </button>
  );
};
