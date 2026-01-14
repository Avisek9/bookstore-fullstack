package com.avisek.service;

import com.avisek.model.Book;
import com.avisek.repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepo bookRepo;

    public List<Book> getAvailableBook(){
        return bookRepo.findByAvailableTrue();
    }

    public Book getBookById(Long id){
        return bookRepo.findById(id).orElseThrow();
    }
}
