package com.shoeStore.shoeStore.Controller;

import com.shoeStore.shoeStore.Dto.ApiResponseDto;
import com.shoeStore.shoeStore.Dto.ClientesDto;
import com.shoeStore.shoeStore.Entity.Clientes;
import com.shoeStore.shoeStore.IService.IClientesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/filtros")
    public ResponseEntity<ApiResponseDto<List<ClientesDto>>> show(
            @RequestParam(required = false) String nombre,
            @RequestParam(required = false) String ciudad,
            @RequestParam(required = false) String estado
    ) {
        try {
            List<ClientesDto> entity = service.getClientesFiltros(nombre, ciudad, estado);
            return ResponseEntity.ok(new ApiResponseDto<>("Registro encontrado", entity, true));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ApiResponseDto<>(e.getMessage(), null, false));
        }
    }

}
