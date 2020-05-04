package dev.programister.component.registration.data;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "role")
@NoArgsConstructor
public class RoleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id = Long.valueOf(0);

    @Column(name = "name")
    private String name;

    public RoleEntity(String name) {
        this.name = name;
    }

//    @ManyToMany(mappedBy = "role", fetch = FetchType.LAZY)
//    private List<RegistrationEntity> registrattions;
}
