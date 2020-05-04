package dev.programister.component.registration.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JwtRegistration implements UserDetails {

    private Long id;
    private String login;
    private String email;
    private String password;

    @Builder.Default
    private boolean isEnabled = true;

    @Builder.Default
    private boolean isExpired = false;

    @Builder.Default
    private boolean isLocked = false;

    @Builder.Default
    private boolean isCredentialsExpired = false;

    private List<? extends GrantedAuthority> authorities = null;


    public static JwtRegistration fromRegistation(RegistrationEntity e) {
        return new JwtRegistration().builder()
                .email(e.getEmail())
                .id(e.getId())
                .login(e.getLogin())
                .password(e.getPassword())
                .authorities(mapToGrantedAuthorities(e.getRoles()))
                .isEnabled(true)
                .build();
    }


    public static List<GrantedAuthority> mapToGrantedAuthorities(List<RoleEntity> roles) {
        return roles.stream()
                .map(r -> new SimpleGrantedAuthority(r.getName()))
                .collect(Collectors.toList());
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
