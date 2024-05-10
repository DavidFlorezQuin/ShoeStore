package com.shoeStore.shoeStore.Service;

import com.shoeStore.shoeStore.Entity.Clientes;
import com.shoeStore.shoeStore.IRepository.IClientesRepository;
import com.shoeStore.shoeStore.IService.IClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ClientesService extends ABaseService<Clientes> implements IClientesService {

    @Autowired
    private IClientesRepository repository;

    @Override
    protected JpaRepository<Clientes, Long> getRepository() {
        return repository;
    }
}
