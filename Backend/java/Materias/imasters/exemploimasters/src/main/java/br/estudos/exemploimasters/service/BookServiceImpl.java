package br.estudos.exemploimasters.service;

import br.estudos.exemploimasters.domain.orm.Book;
import br.estudos.exemploimasters.domain.repository.BookRepository;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import static java.util.Objects.isNull;

@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService{

    private final BookRepository bookRepository;

    @Override
    public Book getById(Integer id){
        Book book = bookRepository.findOne(id);
        if(isNull(book)){
            throw new RuntimeException("Book not found!");
        }
        return book;
    }

    @Override
    public Book save(Book book) {
        //QUALQUER REGRA DE NEGÓCIO OU VALIDAÇÃO ANTES DE SALVAR
        return bookRepository.save(book);
    }

}
