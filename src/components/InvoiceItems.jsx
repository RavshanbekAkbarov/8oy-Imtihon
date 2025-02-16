const InvoiceItems = ({ items }) => {
  return (
    <div className=" title flex flex-col rounded-t-lg p-8">
      <div className="grid grid-cols-4 text-light3 font-normal mb-3 text-sm   pb-2">
        <span className="text-left">Item Name</span>
        <span className="text-end">QTY.</span>
        <span className="text-end">Price</span>
        <span className="text-right">Total</span>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="grid grid-flow-col grid-cols-4 text-base font-bold  py-3 border-b last:border-none"
        >
          <span className="text-left ">{item.name}</span>
          <span className="text-end text-light2 ">{item?.quantity}</span>
          <span className="text-end text-light2">{item.price}</span>
          <span className="text-right">£{item.total}</span>
        </div>
      ))}
    </div>
  );
};

export default InvoiceItems;
