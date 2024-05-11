package com.shoeStore.shoeStore.IRepository;

import com.shoeStore.shoeStore.Dto.ClientesDto;
import com.shoeStore.shoeStore.Dto.ProductosDto;
import com.shoeStore.shoeStore.Entity.Productos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductosRepository extends JpaRepository<Productos, Long> {

    @Query(value =
            "SELECT"
                    + " id,"
                    + " nombre_producto AS nombreProducto,"
                    + " descripcion, "
                    + " estado,"
                    + " precio,"
                    + " porcentaje_descuento AS descuento,"
                    + " cantidad,"
                    + " porcentaje_iva AS iva "
                    + " FROM "
                    + " productos "
                    + " WHERE (:nombre IS NULL OR nombre_producto LIKE CONCAT('%', :nombre, '%')) "
                    + " AND (:estado IS NULL OR estado = :estado)", nativeQuery = true)
    List<ProductosDto> getProductosFiltro(String nombre, String estado);
}
