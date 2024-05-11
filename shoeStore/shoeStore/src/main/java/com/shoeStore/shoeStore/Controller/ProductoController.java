package com.shoeStore.shoeStore.Controller;

import com.shoeStore.shoeStore.Dto.ApiResponseDto;
import com.shoeStore.shoeStore.Dto.ClientesDto;
import com.shoeStore.shoeStore.Dto.ProductosDto;
import com.shoeStore.shoeStore.Entity.Productos;
import com.shoeStore.shoeStore.IService.IProductoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/filtros")
    public ResponseEntity<ApiResponseDto<List<ProductosDto>>> show(
            @RequestParam(required = false) String nombre,
            @RequestParam(required = false) String estado
    ) {
        try {
            List<ProductosDto> entity = service.getProductosFiltro(nombre, estado);
            return ResponseEntity.ok(new ApiResponseDto<>("Registro encontrado", entity, true));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(new ApiResponseDto<>(e.getMessage(), null, false));
        }
    }


}
