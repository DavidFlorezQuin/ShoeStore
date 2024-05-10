package com.shoeStore.shoeStore.IRepository;

import com.shoeStore.shoeStore.Entity.Productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductosRepository extends JpaRepository<Productos, Long> {
}
