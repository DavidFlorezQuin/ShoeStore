package com.shoeStore.shoeStore.IRepository;

import com.shoeStore.shoeStore.Entity.Ventas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVentasRepository extends JpaRepository<Ventas, Long> {
}
