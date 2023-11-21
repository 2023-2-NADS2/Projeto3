package com.violeta.eliz.ads.repositoy;

import com.violeta.eliz.ads.domains.Doador;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DoadorRepository extends CrudRepository<Doador, Integer> {
    List<Doador> findAll();
}
