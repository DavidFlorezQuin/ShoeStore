package com.shoeStore.shoeStore.Entity;

import com.shoeStore.shoeStore.Utils.Estado;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "productos")
public class Productos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", length = 36)
    private Long idProducto;

    @Column(name="nombre_producto", nullable = true)
    private String nombreProducto;

    @Column(name="descripcion", nullable = true)
    private String descripcion;

    @Column(name="cantidad", nullable = true)
    private Integer cantidad;

    @Column(name="precio", precision = 9, scale = 2,  nullable = true)
    private BigDecimal precio;
    @Column(name="porcentaje_iva", length = 2, nullable = true)
    private Integer porcentajeIva;

    @Column(name="porcentaje_descuento", length = 2, nullable = true)
    private Integer porcentajeDescuento;

    @Enumerated(EnumType.STRING)
    @Column(name="estado")
    private Estado estado;


    public Long getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Long idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public Integer getPorcentajeIva() {
        return porcentajeIva;
    }

    public void setPorcentajeIva(Integer porcentajeIva) {
        this.porcentajeIva = porcentajeIva;
    }

    public Integer getPorcentajeDescuento() {
        return porcentajeDescuento;
    }

    public void setPorcentajeDescuento(Integer porcentajeDescuento) {
        this.porcentajeDescuento = porcentajeDescuento;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
}
