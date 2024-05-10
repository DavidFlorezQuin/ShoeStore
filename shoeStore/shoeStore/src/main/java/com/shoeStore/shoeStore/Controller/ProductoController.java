package com.shoeStore.shoeStore.Controller;

import com.shoeStore.shoeStore.Entity.Productos;
import com.shoeStore.shoeStore.IService.IProductoService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/productos")
public class ProductoController extends ABaseController<Productos, IProductoService>{
    /**
     * Constructor for ABaseController.
     *
     * @param service    The service for the entity.
     */
    protected ProductoController(IProductoService service) {
        super(service, "productos");
    }
}
