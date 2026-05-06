package com.assettrack.assettrack_backend.controller;

import com.assettrack.assettrack_backend.model.router;
import com.assettrack.assettrack_backend.Repository.RouterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/routers")
@CrossOrigin(origins = "http://localhost:5173")
public class RouterController {

    @Autowired
    private RouterRepository routerRepository;

    @PostMapping
    public ResponseEntity<router> addRouter(@RequestBody router router) {
        return ResponseEntity.ok(routerRepository.save(router));
    }

    @GetMapping
    public List<router> getAllRouters() {
        return routerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRouterById(@PathVariable String id) {
        return routerRepository.findById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("Router not found"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<router> updateRouter(@PathVariable String id, @RequestBody router updatedRouter) {
        return routerRepository.findById(id).map(router -> {
            router.setName(updatedRouter.getName());
            router.setLocation(updatedRouter.getLocation());
            router.setStatus(updatedRouter.getStatus());
            return ResponseEntity.ok(routerRepository.save(router));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRouter(@PathVariable String id) {
        if (!routerRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Router not found");
        }

        routerRepository.deleteById(id);
        return ResponseEntity.ok("Router deleted successfully");
    }
}
