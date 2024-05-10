package com.shoeStore.shoeStore.Controller;

import com.shoeStore.shoeStore.Entity.Clientes;
import com.shoeStore.shoeStore.IService.IClientesService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/clientes")
public class ClienteController extends ABaseController<Clientes, IClientesService>{
    /**
     * Constructor for ABaseController.
     *
     * @param service    The service for the entity.
     */
    protected ClienteController(IClientesService service) {
        super(service, "clientes");
    }
}
