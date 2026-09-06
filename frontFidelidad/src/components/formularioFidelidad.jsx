import { useState, useEffect } from "react";
import { TIPOS_DOCUMENTO, MARCAS, GEOGRAFIA } from "../constants/fidelidadData";
import { registrarCliente } from "../services/clienteService";
import "../styles/FormularioFidelidad.css";

export default function FormularioFidelidad() {
  const [form, setForm] = useState({
    tipoDoc: "",
    numDoc: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    direccion: "",
    pais: "",
    departamento: "",
    ciudad: "",
    marca: ""
  });

  const [mensaje, setMensaje] = useState("");
  const [clientes, setClientes] = useState([]);

  const cargarClientes = async () => {
    try {
      const respuesta = await fetch("http://localhost:8080/api/clientes/listar");
      if (respuesta.ok) {
        const data = await respuesta.json();
        setClientes(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "pais") {
      setForm({ ...form, pais: value, departamento: "", ciudad: "" });
    } else if (name === "departamento") {
      setForm({ ...form, departamento: value, ciudad: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hoy = new Date();
    const fechaIngresada = new Date(form.fechaNacimiento);

    if (fechaIngresada >= hoy) {
      alert("La fecha de nacimiento no puede ser en el presente o futuro.");
      return;
    }

    if (form.numDoc.trim().length < 5) {
      alert("El número de documento debe tener al menos 5 caracteres.");
      return;
    }

    try {
      await registrarCliente(form);
      setMensaje(`¡Registro exitoso para ${form.nombres} en ${form.marca}!`);
      
      setForm({
        tipoDoc: "",
        numDoc: "",
        nombres: "",
        apellidos: "",
        fechaNacimiento: "",
        direccion: "",
        pais: "",
        departamento: "",
        ciudad: "",
        marca: ""
      });

      cargarClientes();
    } catch (error) {
      alert("No se pudo conectar con el servidor Spring Boot.");
    }
  };

  const deptosDisponibles = form.pais ? Object.keys(GEOGRAFIA[form.pais] || {}) : [];
  const ciudadesDisponibles = form.departamento ? GEOGRAFIA[form.pais]?.[form.departamento] || [] : [];

  return (
    <div className="contenedor-fidelidad">
      <h2>Registro al Programa de Fidelidad</h2>

      {mensaje && <div className="mensaje-exito">{mensaje}</div>}

      <form onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label>Tipo de Identificación *</label>
          <select name="tipoDoc" value={form.tipoDoc} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            {TIPOS_DOCUMENTO.map((item, i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="campo-formulario">
          <label>Número de Identificación *</label>
          <input type="text" name="numDoc" value={form.numDoc} onChange={handleChange} required />
        </div>

        <div className="campo-formulario">
          <label>Nombres *</label>
          <input type="text" name="nombres" value={form.nombres} onChange={handleChange} required />
        </div>

        <div className="campo-formulario">
          <label>Apellidos *</label>
          <input type="text" name="apellidos" value={form.apellidos} onChange={handleChange} required />
        </div>

        <div className="campo-formulario">
          <label>Fecha de Nacimiento *</label>
          <input type="date" name="fechaNacimiento" value={form.fechaNacimiento} onChange={handleChange} required />
        </div>

        <div className="campo-formulario">
          <label>Dirección *</label>
          <input type="text" name="direccion" value={form.direccion} onChange={handleChange} required />
        </div>

        <div className="campo-formulario">
          <label>País *</label>
          <select name="pais" value={form.pais} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            {Object.keys(GEOGRAFIA).map((p, i) => (
              <option key={i} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="campo-formulario">
          <label>Departamento *</label>
          <select name="departamento" value={form.departamento} onChange={handleChange} disabled={!form.pais} required>
            <option value="">Seleccione país primero...</option>
            {deptosDisponibles.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="campo-formulario">
          <label>Ciudad *</label>
          <select name="ciudad" value={form.ciudad} onChange={handleChange} disabled={!form.departamento} required>
            <option value="">Seleccione departamento primero...</option>
            {ciudadesDisponibles.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="campo-formulario">
          <label>Marca *</label>
          <select name="marca" value={form.marca} onChange={handleChange} required>
            <option value="">Seleccione...</option>
            {MARCAS.map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-registro">Registrarme</button>
      </form>

      {clientes.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ textAlign: "center", color: "#333", marginBottom: "15px" }}>
            Clientes Inscritos ({clientes.length})
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f1f5f9", borderBottom: "2px solid #cbd5e1" }}>
                <th style={{ padding: "8px" }}>Doc</th>
                <th style={{ padding: "8px" }}>Nombre</th>
                <th style={{ padding: "8px" }}>Ciudad</th>
                <th style={{ padding: "8px" }}>Marca</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c) => (
                <tr key={c.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "8px" }}>{c.numDoc}</td>
                  <td style={{ padding: "8px" }}>{c.nombres} {c.apellidos}</td>
                  <td style={{ padding: "8px" }}>{c.ciudad}</td>
                  <td style={{ padding: "8px", fontWeight: "bold", color: "#007bff" }}>{c.marca}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}