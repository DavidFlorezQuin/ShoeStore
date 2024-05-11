package com.shoeStore.shoeStore.IService;

import com.shoeStore.shoeStore.Dto.ProductosDto;
import com.shoeStore.shoeStore.Entity.Productos;

import java.util.List;

public interface IProductoService extends IBaseService<Productos> {
    List<ProductosDto> getProductosFiltro(String nombre, String estado);
}
