package com.shoeStore.shoeStore.Service;

import com.shoeStore.shoeStore.IService.IBaseService;
import org.springframework.beans.BeanUtils;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public abstract class ABaseService<T> implements IBaseService<T> {

    /**
     * Retrieves the repository associated with the entity.
     * @return The repository associated with the entity.
     */
    protected abstract JpaRepository<T, Long> getRepository();

    /**
     * Retrieves all entities.
     * @return A list of all entities.
     * @throws Exception If an error occurs while retrieving the entities.
     */
    @Override
    public List<T> all() throws Exception {
        return getRepository().findAll();
    }

    /**
     * Retrieves all entities with state set to true.
     * @return A list of entities with state set to true.
     * @throws Exception If an error occurs while retrieving the entities.
     */
    @Override
    public List<T> findByStateTrue() throws Exception {
        return getRepository().findAll();
    }

    /**
     * Retrieves an entity by its ID.
     * @param id The ID of the entity to retrieve.
     * @return An Optional containing the entity, or empty if not found.
     * @throws Exception If an error occurs while retrieving the entity.
     */
    @Override
    public Optional<T> findById(Long id) throws Exception {
        Optional<T> op = getRepository().findById(id);

        if (op.isEmpty()) {
            throw new Exception("Registro no encontrado");
        }
        return op;
    }

    /**
     * Saves an entity.
     * @param entity The entity to save.
     * @return The saved entity.
     * @throws Exception If an error occurs while saving the entity.
     */
    @Override
    public T save(T entity) throws Exception {
        try {
            return getRepository().save(entity);
        } catch (Exception e) {

            throw new Exception("Error al guardar la entidad: " + e.getMessage());
        }
    }

    /**
     * Updates an existing entity by its ID.
     * @param id The ID of the entity to update.
     * @param entity The updated entity.
     * @throws Exception If an error occurs while updating the entity.
     */
    @Override
    public void update(Long id, T entity) throws Exception {
        Optional<T> op = getRepository().findById(id);

        if (op.isEmpty()) {
            throw new Exception("Registro no encontrado");

        }

        T entityUpdate = op.get();

        String[] ignoreProperties = { "id", "createdAt", "deletedAt", "createdBy", "deletedBy" };
        BeanUtils.copyProperties(entity, entityUpdate, ignoreProperties);
        getRepository().save(entityUpdate);
    }

    /**
     * Deletes an entity by its ID.
     * @param id The ID of the entity to delete.
     * @throws Exception If an error occurs while deleting the entity.
     */
    @Override
    public void delete(Long id) throws Exception {
        Optional<T> op = getRepository().findById(id);

        if (op.isEmpty()) {
            throw new Exception("Registro no encontrado");
        }

        T entityUpdate = op.get();

        getRepository().save(entityUpdate);
    }
}
