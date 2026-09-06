const API_URL = "http://localhost:8080/api/clientes";

export const registrarCliente = async (clienteData) => {
  const response = await fetch(`${API_URL}/registro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(clienteData)
  });

  if (!response.ok) {
    throw new Error("Error en la respuesta del servidor");
  }

  return await response.json();
};