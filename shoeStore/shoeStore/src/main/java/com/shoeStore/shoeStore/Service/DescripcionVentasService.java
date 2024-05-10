package com.shoeStore.shoeStore.Service;

import com.shoeStore.shoeStore.Entity.DescripcionVentas;
import com.shoeStore.shoeStore.IRepository.IDescripcionVentasRepository;
import com.shoeStore.shoeStore.IService.IDescripcionVentasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class DescripcionVentasService extends ABaseService<DescripcionVentas> implements IDescripcionVentasService{

    @Autowired
    private IDescripcionVentasRepository repository;

    @Override
    protected JpaRepository<DescripcionVentas, Long> getRepository() {
        return repository;
    }
}
