package com.assettrack.assettrack_backend.controller;

import com.assettrack.assettrack_backend.model.Asset;
import com.assettrack.assettrack_backend.Repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/assets")
@CrossOrigin(origins = "http://localhost:5173")
public class AssetController {

    @Autowired
    private AssetRepository assetRepository;

    // PERSON 1 - Add Asset (POST)

    // PERSON 2 - Search by ID (GET)

    // PERSON 3 - Update Asset (PUT) ✅
    @PutMapping("/{id}")
    public ResponseEntity<Asset> updateAsset(@PathVariable String id, @RequestBody Asset updatedAsset) {
        return assetRepository.findById(id).map(asset -> {
            asset.setName(updatedAsset.getName());
            asset.setType(updatedAsset.getType());
            asset.setLocation(updatedAsset.getLocation());
            asset.setStatus(updatedAsset.getStatus());
            return ResponseEntity.ok(assetRepository.save(asset));
        }).orElse(ResponseEntity.notFound().build());
    }

    // PERSON 4 - Get All + Delete


}