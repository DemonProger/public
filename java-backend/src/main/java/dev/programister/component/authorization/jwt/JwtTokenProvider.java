package dev.programister.component.authorization.jwt;

import dev.programister.component.registration.JwtRegistrationService;
import dev.programister.component.registration.JwtUserDetailsService;
import dev.programister.component.registration.data.RoleEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@Component
public class JwtTokenProvider {

    @Value("${jwt.token.secret}")
    private String secret;

    @Value("${jwt.token.expired}")
    private long validityInMilliseconds;

    @Autowired
    private UserDetailsService userDetailsService;


    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        return bCryptPasswordEncoder;
    }


    @PostConstruct
    protected void init() {
        secret = Base64.getEncoder().encodeToString(secret.getBytes());
    }

    public String createToken(String login, List<RoleEntity> roles) {
        Claims claims = Jwts.claims().setSubject(login);
        claims.put("roles", getRoleNames(roles));

        Date now = new Date();
        Date validity = new Date(now.getTime() + validityInMilliseconds);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }


    public Authentication getAuthentication(String token) {
        UserDetails details = userDetailsService.loadUserByUsername(getLogin(token));
        return new UsernamePasswordAuthenticationToken(details, "", details.getAuthorities());
    }


    public String getLogin(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }


    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer_")) {
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }


    public boolean isTokenValid(String token) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            if (claims.getBody().getExpiration().before(new Date()))
                return false;
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            throw new RuntimeException("JWT token is expired or invalid");
        }
    }


    private List<String> getRoleNames(List<RoleEntity> userRoles) {
        return userRoles.stream()
                .map(r -> r.getName()).collect(Collectors.toList());
    }
}