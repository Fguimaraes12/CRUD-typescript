import { useContext } from "react";
import { taskContext } from "../../contexts/tasksContext";
import EditRegisterModal from "../EditRegisterModal/EditRegisterModal";

function CreateRegister() {
  const {
    states: { form, showModal, setShowModal, registerToEdit },
    functions: { handleInput, handleSubmit, editRegister, handleEditInput },
  } = useContext(taskContext)!;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-semibold mb-4">aaaa</h1>

      <form action={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInput}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Nome"
        />

        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleInput}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Email"
        />

        <select
          name="level"
          value={form.level}
          onChange={handleInput}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Junior">Junior</option>
          <option value="Pleno">Pleno</option>
          <option value="Senior">Senior</option>
        </select>

        <select
          name="area"
          value={form.area}
          onChange={handleInput}
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
          value={form.note}
          onChange={handleInput}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm min-h-[80px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Observações"
        />

        <button
          type="submit"
          className="mt-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Registrar
        </button>
      </form>

      {/* MODAL DE EDIÇÃO */}
      {showModal && (
        <EditRegisterModal
          setShowModal={setShowModal}
          registerToEdit={registerToEdit}
          editRegister={editRegister}
          handleEditInput={handleEditInput}
        />
      )}
    </div>
  );
}

export default CreateRegister;
