package com.balinasoft.firsttask.service;

import com.balinasoft.firsttask.domain.Category;
import com.balinasoft.firsttask.domain.Image;
import com.balinasoft.firsttask.dto.ImageDtoOut;
import com.balinasoft.firsttask.repository.CategoryRepository;
import lombok.SneakyThrows;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService{

    private final CategoryRepository categoryRepository;
    private final ImageServiceImpl imageService;


    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository,ImageServiceImpl imageService) {
        this.categoryRepository = categoryRepository;
        this.imageService=imageService;
    }

    @Override
    public List<ImageDtoOut> getImagesByCategory(String categoriesUnparsed) {
        List<Category> categories=categoryRepository.getByNameIn(Arrays.asList(categoriesUnparsed.split(",")));
        Set<Image> images = new HashSet<>();
        for (Category i:categories)
        {
            images.addAll(i.getImages());
        }
        List<ImageDtoOut> result = new ArrayList<>();
        for(Image i:images)
        {
            result.add(imageService.toDto(i));
        }
        return result;
    }

}
