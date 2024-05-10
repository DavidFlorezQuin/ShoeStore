package com.shoeStore.shoeStore.Controller;

import com.shoeStore.shoeStore.Entity.DescripcionVentas;
import com.shoeStore.shoeStore.IService.IDescripcionVentasService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/descripcion_ventas")
public class DescripcionVentasController extends ABaseController<DescripcionVentas, IDescripcionVentasService> {
    /**
     * Constructor for ABaseController.
     *
     * @param service    The service for the entity.
     */
    protected DescripcionVentasController(IDescripcionVentasService service) {
        super(service, "descripcion_ventas");
    }
}
