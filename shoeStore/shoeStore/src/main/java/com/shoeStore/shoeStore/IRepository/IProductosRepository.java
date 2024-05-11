package com.shoeStore.shoeStore.IRepository;

import com.shoeStore.shoeStore.Dto.ClientesDto;
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
                    + " porcentaje_descuento AS descuento,"
                    + " cantidad,"
                    + " porcentaje_iva AS iva, "
                    + " identificacion "
                    + " FROM "
                    + " productos "
                    + " WHERE (:nombre IS NULL OR nombre_cliente LIKE CONCAT('%', :nombre, '%')) "
                    + " AND (:estado IS NULL OR estado = :estado)", nativeQuery = true)
    List<ClientesDto> getClientesFiltro(String nombre, String ciudad, String estado);
}
