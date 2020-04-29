package dev.programister.entity;

import dev.programister.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


@Data
@Entity
@Table(name = "users")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @PrimaryKeyJoinColumn
    @Column(name = "id")
    @Builder.Default
    private Long id = Long.valueOf(0);

    @NotNull
    @NotEmpty
    @Column(name = "login")
    private String login;

    @NotNull
    @NotEmpty
    @Column(name = "email")
    private String email;

    @NotNull
    @NotEmpty
    @Column(name = "password")
    private String password;

//    @NotNull
//    @CreatedDate
//    @Column(name = "created")
//    private Date created;


    public static UserEntity fromDto(UserDto data) {
        return new UserEntity().builder()
                .login(data.getLogin())
                .email(data.getEmail())
                .password(data.getPassword())
                .build();
    }
}
