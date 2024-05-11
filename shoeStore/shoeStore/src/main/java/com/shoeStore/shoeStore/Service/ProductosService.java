package com.shoeStore.shoeStore.Service;

import com.shoeStore.shoeStore.Dto.ProductosDto;
import com.shoeStore.shoeStore.Entity.Clientes;
import com.shoeStore.shoeStore.Entity.Productos;
import com.shoeStore.shoeStore.IRepository.IProductosRepository;
import com.shoeStore.shoeStore.IService.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductosService extends ABaseService<Productos> implements IProductoService {

    @Autowired
    private IProductosRepository repository;

    @Override
    protected JpaRepository<Productos, Long> getRepository() {
        return repository;
    }

    @Override
    public List<ProductosDto> getProductosFiltro(String nombre, String estado) {
        return repository.getProductosFiltro(nombre, estado);
    }
}
