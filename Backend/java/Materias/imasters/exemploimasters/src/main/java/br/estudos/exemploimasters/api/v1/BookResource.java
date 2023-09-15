package br.estudos.exemploimasters.api.v1;

import jdk.jfr.Relational;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.hateoas.ResourceSupport;
import org.springframework.hateoas.server.core.Relation;

import java.util.ResourceBundle;

@Data
@EqualsAndHashCode(callSuper = true)
@Relation(value = "book", collectionRelation = "book")
   public class BookResource extends ResourceSupport{
        private String title;
        private String author;
        private Integer pages;
}
