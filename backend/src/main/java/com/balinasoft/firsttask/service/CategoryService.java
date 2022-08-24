package com.balinasoft.firsttask.service;

import com.balinasoft.firsttask.dto.ImageDtoIn;
import com.balinasoft.firsttask.dto.ImageDtoOut;

import java.util.List;

public interface CategoryService {
    List<ImageDtoOut> getImagesByCategory(String categoriesUnparsed);
}
