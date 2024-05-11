package com.shoeStore.shoeStore.Entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "descripcion_ventas")
public class DescripcionVentas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_descripcion_venta", length = 36)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name="ventas_id_venta", nullable = true)
    private Ventas venta;

    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name="productos_id_producto", nullable = true)
    private Productos producto;

    @Column(name="cantidad", nullable = true)
    private Integer cantidad;

    @Column(name="precio", precision = 9, scale = 2,  nullable = true)
    private BigDecimal precio;

    @Column(name="descuento", precision = 9, scale = 2,  nullable = true)
    private BigDecimal descuento;

    @Column(name="sub_total", precision = 9, scale = 2,  nullable = true)
    private BigDecimal subTotal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Ventas getVenta() {
        return venta;
    }

    public void setVenta(Ventas venta) {
        this.venta = venta;
    }

    public Productos getProducto() {
        return producto;
    }

    public void setProducto(Productos producto) {
        this.producto = producto;
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

    public BigDecimal getDescuento() {
        return descuento;
    }

    public void setDescuento(BigDecimal descuento) {
        this.descuento = descuento;
    }

    public BigDecimal getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(BigDecimal subTotal) {
        this.subTotal = subTotal;
    }
}
