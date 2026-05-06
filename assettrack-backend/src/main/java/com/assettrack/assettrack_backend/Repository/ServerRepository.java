package com.assettrack.assettrack_backend.Repository;

import com.assettrack.assettrack_backend.model.server;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServerRepository extends JpaRepository<server, String> {
}