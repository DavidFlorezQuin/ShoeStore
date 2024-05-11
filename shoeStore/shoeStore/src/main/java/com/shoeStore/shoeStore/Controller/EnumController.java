package com.shoeStore.shoeStore.Controller;


import com.shoeStore.shoeStore.IService.IEnumService;
import com.shoeStore.shoeStore.Utils.Estado;
import com.shoeStore.shoeStore.Utils.TipoIdentificacion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("v1/api/enum")
public class EnumController {

    @Autowired
    private IEnumService service;

    @GetMapping("/estado")
    public Estado[] getEstado(){
        return service.getEstado();
    }

    @GetMapping("/tipo-identificacion")
    public TipoIdentificacion[] getTipoIdentificacion(){
        return service.getTipoDocumento();
    }

}
