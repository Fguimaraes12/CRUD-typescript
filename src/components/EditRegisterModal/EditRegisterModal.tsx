type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<Boolean>>;
  registerToEdit: any;
  editRegister: () => void;
  handleEditInput: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
};

function EditRegisterModal({
  setShowModal,
  registerToEdit,
  editRegister,
  handleEditInput,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
        <form action={editRegister} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            defaultValue={registerToEdit?.name}
            onChange={(e) => handleEditInput(e)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            name="email"
            defaultValue={registerToEdit?.email}
            onChange={(e) => handleEditInput(e)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            name="level"
            value={registerToEdit?.level ?? ""}
            onChange={(e) => handleEditInput(e)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Junior">Junior</option>
            <option value="Pleno">Pleno</option>
            <option value="Senior">Senior</option>
          </select>

          <select
            name="area"
            value={registerToEdit?.area ?? ""}
            onChange={(e) => handleEditInput(e)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Mobile">Mobile</option>
            <option value="Data">Data</option>
            <option value="DevOps">DevOps</option>
          </select>

          <textarea
            name="note"
            value={registerToEdit?.note ?? ""}
            onChange={(e) => handleEditInput(e)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm min-h-[80px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Salvar
            </button>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRegisterModal;
