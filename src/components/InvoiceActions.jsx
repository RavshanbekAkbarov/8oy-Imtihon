const InvoiceActions = () => {
  return (
    <div className="flex justify-end gap-2 font-semibold text-bgLight">
      <label
        htmlFor="edit-drawer"
        className="bg-bgLight title text-light2 px-6 py-4 drawer-button rounded-[30px] cursor-pointer"
      >
        Edit
      </label>

      <button className="bg-danger1 px-6 py-4 rounded-[40px]">Delete</button>
      <button className="bg-primary px-6 py-4 rounded-[40px]">
        Mark as Paid
      </button>
    </div>
  );
};

export default InvoiceActions;
