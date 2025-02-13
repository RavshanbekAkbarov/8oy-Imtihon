const StatusBadge = ({ status }) => {
  const statusStyles = {
    paid: "text-green-500 bg-green-900 bg-opacity-20",
    pending: "text-amber-500 bg-yellow-700 bg-opacity-10",
    draft: "text-gray-500 bg-gray-700 bg-opacity-10",
  };

  const dotStyles = {
    paid: "bg-green-500",
    pending: "bg-yellow-500",
    draft: "bg-gray-500",
  };

  return (
    <span
      className={`font-semibold px-3 py-2 w-[104px] rounded-md flex items-center justify-center ${
        statusStyles[status.toLowerCase()] || "bg-gray-700"
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full mr-2 ${
          dotStyles[status.toLowerCase()] || "bg-gray-500"
        }`}
      />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;
