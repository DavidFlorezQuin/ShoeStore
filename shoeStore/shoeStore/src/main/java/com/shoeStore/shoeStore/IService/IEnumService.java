package com.shoeStore.shoeStore.IService;

import com.shoeStore.shoeStore.Utils.Estado;
import com.shoeStore.shoeStore.Utils.TipoIdentificacion;

public interface IEnumService {
    Estado[] getEstado();
    TipoIdentificacion[] getTipoDocumento();
}
