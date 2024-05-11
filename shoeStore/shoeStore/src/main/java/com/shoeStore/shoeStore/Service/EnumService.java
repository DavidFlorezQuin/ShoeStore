package com.shoeStore.shoeStore.Service;

import com.shoeStore.shoeStore.IService.IEnumService;
import com.shoeStore.shoeStore.Utils.Estado;
import com.shoeStore.shoeStore.Utils.TipoIdentificacion;

public class EnumService implements IEnumService {

    @Override
    public Estado[] getEstado() {
        return Estado.values();
    }

    @Override
    public TipoIdentificacion[] getTipoDocumento() {
        return TipoIdentificacion.values();
    }
}
