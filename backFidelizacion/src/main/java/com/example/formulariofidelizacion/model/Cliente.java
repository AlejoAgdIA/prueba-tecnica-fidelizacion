package com.example.formulariofidelizacion.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "clientes")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipoDoc;
    private String numDoc;
    private String nombres;
    private String apellidos;
    private LocalDate fechaNacimiento;
    private String direccion;
    private String pais;
    private String departamento;
    private String ciudad;
    private String marca;

    public Cliente() {
    }

    public Long getId() { 
        return id; 
    }
    
    public void setId(Long id) { 
        this.id = id; 
    }

    public String getTipoDoc() { 
        return tipoDoc; 
    }
    
    public void setTipoDoc(String tipoDoc) { 
        this.tipoDoc = tipoDoc; 
    }

    public String getNumDoc() { 
        return numDoc; 
    }
    
    public void setNumDoc(String numDoc) { 
        this.numDoc = numDoc; 
    }

    public String getNombres() { 
        return nombres; 
    }
    
    public void setNombres(String nombres) { 
        this.nombres = nombres; 
    }

    public String getApellidos() { 
        return apellidos; 
    }
    
    public void setApellidos(String apellidos) { 
        this.apellidos = apellidos; 
    }

    public LocalDate getFechaNacimiento() { 
        return fechaNacimiento; 
    }
    
    public void setFechaNacimiento(LocalDate fechaNacimiento) { 
        this.fechaNacimiento = fechaNacimiento; 
    }

    public String getDireccion() { 
        return direccion; 
    }
    
    public void setDireccion(String direccion) { 
        this.direccion = direccion; 
    }

    public String getPais() { 
        return pais; 
    }
    
    public void setPais(String pais) { 
        this.pais = pais; 
    }

    public String getDepartamento() { 
        return departamento; 
    }
    
    public void setDepartamento(String departamento) { 
        this.departamento = departamento; 
    }

    public String getCiudad() { 
        return ciudad; 
    }
    
    public void setCiudad(String ciudad) { 
        this.ciudad = ciudad; 
    }

    public String getMarca() { 
        return marca; 
    }
    
    public void setMarca(String marca) { 
        this.marca = marca; 
    }
}