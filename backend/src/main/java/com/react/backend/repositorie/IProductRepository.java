package com.react.backend.repositorie;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.react.backend.model.Product;

@CrossOrigin(origins = "http://localhost:5173/")
@RepositoryRestResource(path = "products")
public interface IProductRepository extends CrudRepository<Product, Long> {
    
     
}
