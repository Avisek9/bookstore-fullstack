package com.avisek.config;

import com.avisek.model.Book;
import com.avisek.repo.BookRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {
    private final BookRepo bookRepo;

    public DataLoader(BookRepo bookRepo){
        this.bookRepo = bookRepo;
    }
    @Override
    public void run(String... args) throws Exception {
        bookRepo.save(new Book(
                null,
                "Java Fullstack Development",
                "For Java SDEs",
                "https://example.com/cleancode.jpg",
                899.0,
                true
        ));

        bookRepo.save(new Book(
                null,
                "Frontend Development",
                "Best practices for frontend Development",
                "https://example.com/effectivejava.jpg",
                599.0,
                true
        ));
    }
}
