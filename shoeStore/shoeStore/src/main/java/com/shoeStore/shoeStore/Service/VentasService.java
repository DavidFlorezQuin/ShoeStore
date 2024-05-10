package com.shoeStore.shoeStore.Service;

import com.shoeStore.shoeStore.Entity.Ventas;
import com.shoeStore.shoeStore.IRepository.IVentasRepository;
import com.shoeStore.shoeStore.IService.IVentasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class VentasService extends ABaseService<Ventas> implements IVentasService {

    @Autowired
    private IVentasRepository repository;

    @Override
    protected JpaRepository<Ventas, Long> getRepository() {
        return repository;
    }
}
