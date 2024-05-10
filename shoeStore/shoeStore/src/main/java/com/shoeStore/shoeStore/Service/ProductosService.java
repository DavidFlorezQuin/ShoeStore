package com.shoeStore.shoeStore.Service;

import com.shoeStore.shoeStore.Entity.Productos;
import com.shoeStore.shoeStore.IRepository.IProductosRepository;
import com.shoeStore.shoeStore.IService.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductosService extends ABaseService<Productos> implements IProductoService {

    @Autowired
    private IProductosRepository repository;

    @Override
    protected JpaRepository<Productos, Long> getRepository() {
        return repository;
    }
}
