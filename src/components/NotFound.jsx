
function NotFound() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        <img
          src="/notfound.png"
          alt="Empty state illustration"
          width={300}
          height={300}
          className="mb-8"
        />
        <h2 className="mb-4 text-2xl font-bold">There is nothing here</h2>
        <p className="text-center text-gray-500">
          Create an invoice by clicking the
          <span className="mx-1 text-violet-500">New Invoice</span>
          button and get started
        </p>
      </div>
    </div>
  );
}

export default NotFound;
