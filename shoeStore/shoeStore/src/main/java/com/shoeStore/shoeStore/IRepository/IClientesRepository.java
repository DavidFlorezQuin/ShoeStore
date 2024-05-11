package com.shoeStore.shoeStore.IRepository;

import com.shoeStore.shoeStore.Dto.ClientesDto;
import com.shoeStore.shoeStore.Entity.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
    public interface IClientesRepository extends JpaRepository<Clientes, Long> {


        @Query(value =
                "SELECT"
                + " nombre_cliente AS nombreCliente,"
                + " apellido_cliente AS apellido, "
                + " ciudad,"
                + " direccion,"
                + " estado,"
                + " telefono "
                + " identificacion,"
                + " tipo_identificacion AS tipoIdentificacion"
                + " FROM "
                + " clientes "
                + " WHERE (:nombre IS NULL OR nombre_cliente LIKE CONCAT('%', :nombre, '%')) "
                + " AND (:ciudad IS NULL OR ciudad LIKE CONCAT('%', :ciudad, '%')) "
                + " AND (:estado IS NULL OR estado = :estado)", nativeQuery = true)
                List<ClientesDto> getClientesFiltro(String nombre, String ciudad, String estado);

    }
