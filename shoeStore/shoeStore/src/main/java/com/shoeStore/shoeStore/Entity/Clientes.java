package com.shoeStore.shoeStore.Entity;

import Utils.Estado;
import Utils.TipoIdentificacion;
import jakarta.persistence.*;

@Entity
@Table(name = "clientes")
public class Clientes{

    @Id
    @Column(name = "id_cliente", length = 36)
    private char[] idCliente;

    @Enumerated(EnumType.STRING)
    @Column(name="tipo_identificacion", nullable = true)
    private TipoIdentificacion tipoIdentificacion;

    @Column(name="identificacion", nullable = true)
    private String identificacion;

    @Column(name="nombre_cliente", nullable = true)
    private String nombreCliente;

    @Column(name="apellido_cliente", nullable = true)
    private String apellidoCliente;

    @Column(name="telefono", nullable = true)
    private String telefono;

    @Column(name="direccion", nullable = true)
    private String direccion;

    @Column(name="ciudad", nullable = true)
    private String ciudad;

    @Enumerated(EnumType.STRING)
    @Column(name="estado")
    private Estado estado;

    public char[] getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(char[] idCliente) {
        this.idCliente = idCliente;
    }

    public TipoIdentificacion getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(TipoIdentificacion tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }

    public String getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getApellidoCliente() {
        return apellidoCliente;
    }

    public void setApellidoCliente(String apellidoCliente) {
        this.apellidoCliente = apellidoCliente;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
}
