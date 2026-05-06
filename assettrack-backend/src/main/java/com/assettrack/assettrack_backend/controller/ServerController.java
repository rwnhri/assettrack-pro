package com.assettrack.assettrack_backend.controller;

import com.assettrack.assettrack_backend.model.server;
import com.assettrack.assettrack_backend.Repository.ServerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/servers")
@CrossOrigin(origins = "http://localhost:5173")
public class ServerController {

    @Autowired
    private ServerRepository serverRepository;

    @PostMapping
    public ResponseEntity<Server> addServer(@RequestBody Server server) {
        return ResponseEntity.ok(serverRepository.save(server));
    }

    @GetMapping
    public List<Server> getAllServers() {
        return serverRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getServerById(@PathVariable String id) {
        return serverRepository.findById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("Server not found"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<server> updateServer(@PathVariable String id, @RequestBody Server updatedServer) {
        return serverRepository.findById(id).map(server -> {
            server.setName(updatedServer.getName());
            server.setLocation(updatedServer.getLocation());
            server.setStatus(updatedServer.getStatus());
            return ResponseEntity.ok(serverRepository.save(server));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteServer(@PathVariable String id) {
        if (!serverRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Server not found");
        }
        serverRepository.deleteById(id);
        return ResponseEntity.ok("Server deleted successfully");
    }
}