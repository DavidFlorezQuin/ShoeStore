package com.shoeStore.shoeStore.IService;

import com.shoeStore.shoeStore.Dto.ClientesDto;
import com.shoeStore.shoeStore.Entity.Clientes;

import java.util.List;

public interface IClientesService extends IBaseService<Clientes> {

    List<ClientesDto> getClientesFiltros(String nombre, String ciudad, String estado);
}
