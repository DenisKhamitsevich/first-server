package com.balinasoft.firsttask.domain;

import com.balinasoft.firsttask.domain.security.SecurityToken;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String name;

    @ManyToMany(mappedBy = "categories", fetch = FetchType.LAZY)
    @OrderBy("date desc")
    private Set<Image> images;

    public Category(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return Objects.equals(id, category.id) && name.equals(category.name) && Objects.equals(images, category.images);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, images);
    }
}
