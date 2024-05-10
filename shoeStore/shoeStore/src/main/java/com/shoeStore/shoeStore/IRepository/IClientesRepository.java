package com.shoeStore.shoeStore.IRepository;

import com.shoeStore.shoeStore.Entity.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

    @Repository
    public interface IClientesRepository extends JpaRepository<Clientes, Long> {
    }
