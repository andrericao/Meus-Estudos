package br.estudos.exemploimasters.domain.repository;

import br.estudos.exemploimasters.domain.orm.Book;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer>{

}