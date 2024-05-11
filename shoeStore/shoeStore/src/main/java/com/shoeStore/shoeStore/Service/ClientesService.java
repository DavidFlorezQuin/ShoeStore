package com.shoeStore.shoeStore.Service;

import com.shoeStore.shoeStore.Entity.Clientes;
import com.shoeStore.shoeStore.IRepository.IClientesRepository;
import com.shoeStore.shoeStore.IService.IClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ClientesService extends ABaseService<Clientes> implements IClientesService {

    @Autowired
    private IClientesRepository repository;

    @Override
    protected JpaRepository<Clientes, Long> getRepository() {
        return repository;
    }

    @Override
    public Clientes save(Clientes entity) throws Exception{
        try {
             UUID uuid = UUID.randomUUID();

            char[] uuidChars = uuid.toString().toCharArray();

            entity.setIdCliente(uuidChars);


            return entity;
        }catch (Exception e) {
            // Manejo de excepciones
            throw new Exception("Error al guardar el cliente", e);
        }

    }
}
