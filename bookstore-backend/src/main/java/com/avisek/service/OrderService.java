package com.avisek.service;

import com.avisek.dto.OrderRequest;
import com.avisek.model.Book;
import com.avisek.model.Order;
import com.avisek.repo.BookRepo;
import com.avisek.repo.OrderRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepo orderRepository;
    private final BookRepo bookRepository;

    public OrderService(OrderRepo orderRepository,
                        BookRepo bookRepository) {
        this.orderRepository = orderRepository;
        this.bookRepository = bookRepository;
    }

    public Order placeOrder(OrderRequest request) {

        List<Book> books = bookRepository.findAllById(request.getBookIds());

        if (books.isEmpty()) {
            throw new RuntimeException("No books found");
        }

        Order order = new Order();
        order.setBooks(books);
        order.setTotalPrice(request.getTotalPrice());

        return orderRepository.save(order);
    }
}