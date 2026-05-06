package com.assettrack.assettrack_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class router {

    @Id
    private String id;
    private String name;
    private String location;
    private String status;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
