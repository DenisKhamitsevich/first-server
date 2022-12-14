package com.balinasoft.firsttask.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "image")
@Setter
@Getter
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column
    private String url;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @Column
    double lat;

    @Column
    double lng;

    @ManyToOne
    private User user;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    private Set<Category> categories;
}
