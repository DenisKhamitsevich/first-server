package com.balinasoft.firsttask.config.security;

import com.balinasoft.firsttask.domain.User;
import com.balinasoft.firsttask.domain.security.SecurityToken;
import com.balinasoft.firsttask.domain.security.SecurityUser;
import com.balinasoft.firsttask.repository.UserRepository;
import com.balinasoft.firsttask.repository.security.SecurityTokenRepository;
import com.balinasoft.firsttask.repository.security.SecurityUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.Http401AuthenticationEntryPoint;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class SecurityFilter extends OncePerRequestFilter {
    private AuthenticationManager authenticationManager;

    private final SecurityTokenRepository securityTokenRepository;

    private AuthenticationEntryPoint authenticationEntryPoint =
            new Http401AuthenticationEntryPoint("");

    public SecurityFilter(AuthenticationManager authenticationManager,SecurityTokenRepository securityTokenRepository) {
        this.authenticationManager = authenticationManager;
        this.securityTokenRepository=securityTokenRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        String token = request.getHeader("Access-Token");
        Cookie[] cookies=request.getCookies();
        for(Cookie c:cookies)
        {
            if(c.getName().equals("token"))
            {
                token=c.getValue();
                break;
            }
        }

        if (token != null) {
            SecurityToken securityToken=securityTokenRepository.findByToken(token);
            if(securityToken!=null)
            {
                try {
                    List<SimpleGrantedAuthority> authorities=new ArrayList<>();
                    authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
                    User user=new User(securityToken.getSecurityUser().getUserId()," ");
                    Authentication authenticate =
                            new UsernamePasswordAuthenticationToken(user, null,authorities);
//                authRequest.setDetails(this.authenticationDetailsSource.buildDetails(request));

                    //= authenticationManager.authenticate(authRequest);
                    SecurityContextHolder.getContext().setAuthentication(authenticate);

                } catch (AuthenticationException e) {

                    SecurityContextHolder.clearContext();
                    this.authenticationEntryPoint.commence(request, response, e);
                    return;
                }
            }

        }

        filterChain.doFilter(request, response);
    }
}
