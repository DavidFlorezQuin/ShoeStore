package com.shoeStore.shoeStore.IRepository;

import com.shoeStore.shoeStore.Entity.DescripcionVentas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDescripcionVentasRepository extends JpaRepository<DescripcionVentas, Long> {
}
