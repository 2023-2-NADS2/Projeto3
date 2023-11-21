package com.violeta.eliz.ads.service;

import com.violeta.eliz.ads.domains.Doador;
import com.violeta.eliz.ads.repositoy.DoadorRepository;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.*;

@Service
public class DoadorService extends Object{

    @Autowired
    private DoadorRepository doadorRepository;
    @Autowired
    private Configuration config;
    @Autowired
    private JavaMailSender javaMailSender;

    public List<Doador> findAll() {
        List<Doador> client = new ArrayList<>();
        this.doadorRepository.findAll().forEach(client :: add);
        return client;
    }

    public double calcularSomaDoacoes() {
        List<Doador> doadores = findAll();

        double soma = doadores.stream()
                .mapToDouble(Doador::getValor)
                .sum();

        return soma;
    }
    public   Doador save (Doador doador) throws MessagingException, TemplateException, IOException {
        this.doadorRepository.save(doador);
        sendEmailDoador(doador);

        return  doador;
    }

    public void sendEmailDoador (Doador doador)
            throws MessagingException, IOException, TemplateException {
        String toAddress = doador.getEmail();
        String fromAddress = "violeta@violeta.com.br";
        String senderName = "Violeta";
        String subject = "Violeta - Lembrete de doação";

        Template template = config.getTemplate("emailVerificacao.ftl");

        Map<String,Object> model =new HashMap<>();
        model.put("nome",doador.getNome());

        String html = FreeMarkerTemplateUtils.processTemplateIntoString(template,model);

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        helper.setText(html, true);

        javaMailSender.send(message);

    }
}
