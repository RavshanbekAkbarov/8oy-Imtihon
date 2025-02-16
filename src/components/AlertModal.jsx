function DeleteModal({ isOpen, onClose, onClick, invoiceId }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-sm">
      <div className="list-a  rounded-lg p-6 max-w-[400px] shadow-lg">
        <h3 className="text-xl colors font-bold ">Confirm Deletion</h3>
        <p className=" colors mt-2">
          Are you sure you want to delete invoice{" "}
          <span className="font-bold">#{invoiceId}</span>? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-3 mt-4">
          <button
            className="px-4 py-2 text-gray-600 bg-light2 rounded-2xl"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-white bg-red-500 rounded-2xl"
            onClick={onClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
