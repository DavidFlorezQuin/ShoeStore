package com.shoeStore.shoeStore.Entity;

import Utils.Estado;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "ventas")
public class Ventas{

    @Id
    @Column(name = "id", length = 36)
    private char idVenta;

    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name="cliente_id_cliente", nullable = true)
    private Clientes cliente;

    @Column(name="total", nullable = true)
    private String total;

    @Enumerated(EnumType.STRING)
    @Column(name="estado")
    private Estado estado;

    @Column(name="fecha_venta", nullable = true)
    private LocalDateTime fechaVenta;



    public Clientes getCliente() {
        return cliente;
    }

    public void setCliente(Clientes cliente) {
        this.cliente = cliente;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public LocalDateTime getFechaVenta() {
        return fechaVenta;
    }

    public void setFechaVenta(LocalDateTime fechaVenta) {
        this.fechaVenta = fechaVenta;
    }
}
