package com.example.formulariofidelizacion.controller;

import com.example.formulariofidelizacion.model.Cliente;
import com.example.formulariofidelizacion.repository.clienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "*")
public class clienteController {

    @Autowired
    private clienteRepository clienteRepository;

    @PostMapping("/registro")
    public ResponseEntity<Cliente> registrar(@RequestBody Cliente cliente) {
        Cliente guardado = clienteRepository.save(cliente);
        return ResponseEntity.ok(guardado);
    }

    @GetMapping("/listar")
    public List<Cliente> listar() {
        return clienteRepository.findAll();
    }
}