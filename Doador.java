package com.violeta.eliz.ads.domains;




import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import static javax.persistence.GenerationType.IDENTITY;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class Doador extends Object implements Serializable {

    private static final long serialVersionUID = 4645751831248289944L;


    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Long id = null;

    @Column (name = "nome", length = 150)
    private String nome = null;

    @Column (name = "email", length = 300)
    private String email = null;

    @Column (name = "valor")
    private double valor = 0;
}
