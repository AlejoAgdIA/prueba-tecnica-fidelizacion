# Formulario de Fidelización Multimarca

Este proyecto lo realicé como solución a la prueba técnica. Es una página web donde los clientes pueden registrarse al programa de puntos o fidelidad de su marca favorita (Americanino, American Eagle, Chevignon, Esprit, Naf Naf o Rifle).

---

## ¿Qué hace la aplicación?

- **Formulario de registro:** Pide los datos de la persona (documento, nombres, apellidos, fecha de nacimiento, dirección y marca).
- **Listas conectadas (en cascada):** Al elegir el país (Colombia), se activan los departamentos, y al elegir un departamento, se cargan únicamente las ciudades correspondientes a ese departamento.
- **Validaciones:** Revisa que la fecha de nacimiento no sea de hoy o a futuro, y que el documento tenga una cantidad válida de números.
- **Guarda los datos:** La información no se pierde en la pantalla; viaja al backend y se guarda en una base de datos.
- **Tabla de inscritos:** Justo debajo del formulario puse una tabla que muestra en tiempo real las personas que se van registrando.

---

## Tecnologías que usé

- **Frontend:** React (creado con Vite), JavaScript y CSS.
- **Backend:** Java con Spring Boot.
- **Base de datos:** H2 Database (base de datos en memoria, para que el proyecto corra en cualquier computador sin tener que instalar programas adicionales).

---

## Cómo poner a funcionar el proyecto

Para probarlo en tu computador, solo debes seguir estos pasos:

### 1. Iniciar el Backend (Spring Boot)
1. Abre la carpeta del backend (`backFidelizacion`) en tu editor o en la terminal.
2. Ejecuta este comando en la terminal:
   ```bash
   .\mvnw.cmd spring-boot:run
