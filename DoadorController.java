package com.violeta.eliz.ads.controller;

import com.violeta.eliz.ads.domains.Doador;
import com.violeta.eliz.ads.repositoy.DoadorRepository;
import com.violeta.eliz.ads.service.DoadorService;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/Doador")
@CrossOrigin(origins = "*")
public class DoadorController {

    @Autowired
    private DoadorRepository doadorRepository;

    @Autowired
    private DoadorService doadorService;

    @GetMapping()
    private List<Doador> get (){
        List<Doador> doadores = doadorService.findAll();
        if (doadores.isEmpty()){ // Se ele nao encontrar dados no banco retorna uma lista vazia e informa o erro
            return doadores;
        }
        return doadores;
    }

    @GetMapping("/soma")
    private double doadores  (){

        return doadorService.calcularSomaDoacoes();
    }

    @PostMapping("/post")
    private ResponseEntity post (
            @RequestBody Doador request) throws MessagingException, TemplateException, IOException {
        doadorService.save(request);
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
