import { FaCirclePlus } from "react-icons/fa6";
import Cardtitle from "../components/Cardtitle";
import CreateInvoice from "../components/CreateInvoice";
import { useEffect, useState } from "react";
import { getAllData } from "../hooks/useFetch";
import NotFound from "../components/NotFound";
import { RiArrowDropDownLine } from "react-icons/ri";
import EditInvoice from "../components/EditInvoice";

function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllData()
      .then((res) => {
        setData(res);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const filtered =
    selectedStatus.length > 0
      ? data.filter((b) => selectedStatus.includes(b.status))
      : data;
  useEffect(() => {
    if (data.length > 0) {
      setFilteredData(
        selectedStatus.length > 0
          ? data.filter((b) => selectedStatus.includes(b.status))
          : data
      );
    }
  }, [selectedStatus, data]);

  if (loading) {
    return <p> Loading....</p>;
  }

  const uniqueStatus = [...new Set(data.map((item) => item.status))];

  const handleFilterChange = (status) => {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  return (
    <div className="flex flex-col  mt-[150px]   align-elements lg:mt-14">
      <div className="flex justify-between items-center mb-[55px]">
        <div>
          <h1 className="text-[32px] font-bold">Invoices</h1>
          <p>
            {data
              ? `There are ${filtered.length} total invoices`
              : "No Invoices"}
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center cursor-pointer"
            >
              <h2>Filter by status</h2>
              <RiArrowDropDownLine className="max-w-[40px] max-h-[20px]" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box  max-w-52 p-2 shadow"
            >
              {uniqueStatus.map((status, index) => (
                <li key={index}>
                  <label className="flex items-center gap-3 capitalize">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => handleFilterChange(status)}
                      checked={selectedStatus.includes(status)}
                    />
                    {status}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <CreateInvoice />
        </div>
      </div>

      <div className="max-h-[460px] overflow-y-auto space-y-4">
        {filteredData.length > 0 ? (
          <Cardtitle filteredData={filteredData} />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default Home;
<div className="bg-primary text-white font-semibold cursor-pointer drawer-button text-[14px] flex items-center px-4 py-3 rounded-full gap-3 shadow-md">
  New Invoice
</div>;
