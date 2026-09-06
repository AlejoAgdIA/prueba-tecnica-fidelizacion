package com.example.formulariofidelizacion.repository;

import com.example.formulariofidelizacion.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface clienteRepository extends JpaRepository<Cliente, Long> {
}