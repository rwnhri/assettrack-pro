package com.assettrack.assettrack_backend.Repository;


import com.assettrack.assettrack_backend.model.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssetRepository extends JpaRepository<Asset, String> {
}