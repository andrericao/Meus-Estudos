package br.estudos.exemploimasters.service;

import br.estudos.exemploimasters.domain.orm.Book;

public interface BookService {
    Book getById(Integer id);
    Book save(Book book);
}
