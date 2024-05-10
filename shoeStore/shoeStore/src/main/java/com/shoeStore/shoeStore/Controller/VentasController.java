package com.shoeStore.shoeStore.Controller;

import com.shoeStore.shoeStore.Entity.Ventas;
import com.shoeStore.shoeStore.IService.IVentasService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/ventas")
public class VentasController extends ABaseController<Ventas, IVentasService>{
    /**
     * Constructor for ABaseController.
     *
     * @param service    The service for the entity.
     */
    protected VentasController(IVentasService service) {
        super(service, "ventas");
    }
}
