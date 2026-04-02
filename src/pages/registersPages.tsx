import { useContext } from "react";
import { taskContext, type Register } from "../contexts/tasksContext";

function RegisterPages() {
  const {
    states: { state, setShowModal, setRegisterToEdit },
    functions: { deleteRegister },
  } = useContext(taskContext)!;

  return (
    <>
      {/* LISTA DE REGISTROS */}
      <ul className="max-w-2xl mx-auto mt-6 flex flex-col gap-4">
        {state.map((register: Register) => (
          <li
            key={register.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">{register.name}</h1>

              <div className="flex gap-2">
                <button
                  onClick={() => deleteRegister(register.id)}
                  className="text-sm px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Excluir
                </button>

                <button
                  onClick={() => {
                    setRegisterToEdit(register);
                    setShowModal(true);
                  }}
                  className="text-sm px-3 py-1 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition"
                >
                  Editar
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-600">{register.email}</p>

            <div className="flex gap-2 text-xs">
              <span className="bg-gray-100 px-2 py-1 rounded">
                {register.level}
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded">
                {register.area}
              </span>
            </div>

            <p className="text-sm text-gray-700">{register.note}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RegisterPages;
