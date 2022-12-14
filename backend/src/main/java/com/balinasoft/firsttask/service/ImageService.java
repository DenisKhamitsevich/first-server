package com.balinasoft.firsttask.service;

import com.balinasoft.firsttask.dto.ImageDtoIn;
import com.balinasoft.firsttask.dto.ImageDtoOut;

import java.util.List;

public interface ImageService {
    ImageDtoOut uploadImage(ImageDtoIn imageDtoIn);

    void deleteImage(int id);

    List<ImageDtoOut> getImages(int page);

    ImageDtoOut getImage(int id);

    void updateImage(ImageDtoIn imageDtoIn,int id);
}
